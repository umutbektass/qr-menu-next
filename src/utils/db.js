import mongoose from "mongoose"

export const connectToDB = async ()=>{
        let connect = {}
        if(connect.isConnected) return;
        try {
         const connect =   await mongoose.connect(process.env.MONGO_DB_URI)
         connect.isConnected = connect.connections[0].readyState
         console.log("db connection successful.")
        } catch (error) {
            console.log("Error connecting to mongodb.",error)
        }
}