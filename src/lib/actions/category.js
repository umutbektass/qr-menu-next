"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Result } from "../result";
import { writeFile } from "fs/promises"
import path from "path";
import sharp from "sharp";
import multer from "multer";
const prisma = new PrismaClient();


export const addCategory = async (formData) => {
    try {
        const categoryName = formData.get("categoryName")
        const fileName = formData.get("fileName")
        console.log(categoryName, fileName)
        await prisma.category.create({
            data: {
                categoryName,
                fileName
            }
        })
        return Result.successResult("Başarılı.").toPlainObject()
    } catch (error) {
        console.log("error", error)
        return Result.errorResult("Sunucu hatası daha sonra tekrar deneyiniz.")
    }
}

export const getAllCategory = async () => {
    try {
        const data = await prisma.category.findMany()
        return data;
    } catch (error) {
        console.log("error", error)
    }
}


export const addCategoryFile = async (formData) => {
    try {
        const categoryName = formData.get('categoryName')
        const file = formData.get('file')
        const date = new Date()
        console.log("date.getDate()", date.toString());
        file.buffer = Buffer.from(await file.arrayBuffer());
        const formattedDate = date.toISOString().replace(/[-:.]/g, '_');
        const fileName = `${formattedDate}_${file.name.replaceAll(" ", "_")}`;
        const filePath = path.join(process.cwd(), 'public', 'assets', 'category', fileName)
        await sharp(file.buffer).resize(1200).jpeg({ quality: 80 }).toFile(filePath);
        const revalidate_Path = "/"+path.relative(path.join(process.cwd(), 'public'), filePath).toString();
        console.log("revalidate_Path",revalidate_Path)
        await prisma.category.create({
            data: {
                categoryName,
                fileName:revalidate_Path
            }
        })
        return Result.successResult("File ekleme başarılı").toPlainObject()

    } catch (error) {
        console.log("error", error)
        return Result.errorResult("başarısız.").toPlainObject()

    }
}