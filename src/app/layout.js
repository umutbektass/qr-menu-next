import { getServerSession } from "next-auth";
import Navbar from "./components/navbar";
import "./globals.css";
import SessionProvider from "@/utils/SessionProvider"
export default function RootLayout({ children }) {
  const session = getServerSession()
 
  return (
    <html lang="en">
      <body className="min-h-screen ">
        <main>
          <SessionProvider session={session}>
            {children}
          </SessionProvider>
        </main>
      </body>
    </html>
  );
}
