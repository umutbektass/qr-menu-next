import Link from "next/link";
import Categories from "./components/categories";
import MenuList from "./components/menu-list";

export default function Home({searchParams}) {
  const params =searchParams
  console.log("params page",params)
  const menuItems = [
    {
      img: "menu-1",
      title: "Menu 1",
      ingredientsList: ["Patates", "Soğan", "Köfte", "Yumurta", "Çay"],
      price: 150
    },
    {
      img: "menu-2",
      title: "Menu 2",
      ingredientsList: ["Tavuk", "Pilav", "Salata", "Ayran", "Ekmek"],
      price: 180
    },
    {
      img: "menu-3",
      title: "Menu 3",
      ingredientsList: ["Pizza", "Mozzarella", "Domates", "Zeytin", "Kola"],
      price: 200
    },
    {
      img: "menu-4",
      title: "Menu 4",
      ingredientsList: ["Hamburger", "Marul", "Domates", "Patates Kızartması", "Limonata"],
      price: 170
    },
    {
      img: "menu-5",
      title: "Menu 5",
      ingredientsList: ["Lazanya", "Ricotta Peyniri", "Ispanak", "Domates Sosu", "Su"],
      price: 220
    },
    {
      img: "menu-6",
      title: "Menu 6",
      ingredientsList: ["Suşi", "Soya Sosu", "Wasabi", "Zencefil", "Yeşil Çay"],
      price: 250
    },
    {
      img: "menu-7",
      title: "Menu 7",
      ingredientsList: ["Biftek", "Patates Püresi", "Brokoli", "Mantar Sosu", "Kırmızı Şarap"],
      price: 300
    },
    {
      img: "menu-8",
      title: "Menu 8",
      ingredientsList: ["Tacos", "Tavuk", "Guacamole", "Mısır", "Margarita"],
      price: 190
    }
  ];
  
  return (
   <div className="container mx-auto bg-white" >
    <div className="flex flex-col items-center pt-8 lg:pt-16">
    <h1 className="section-title text-primary">Menu</h1>
    <h5 className="ff-second text-4xl font-bold mt-3">Menu Listesi</h5>
    </div>
    <div className="flex justify-center">
    <Categories/>
    </div>
    <MenuList menuItems={menuItems} params={params}/>
    {/* Home Page
    <br></br>
    <Link className="me-5" href={"/register"}>Register</Link>
    <Link href={"/login"}>Login</Link> */}
   </div>
  );
}
