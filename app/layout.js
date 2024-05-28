import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EdTech Project",
  description: "project for evaluation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <nav>
          <ul className="flex justify-center mt-2">
            <li className="hover:bg-blue-500 hover:text-white hover:py-1 py-1 hover:px-4 px-4 rounded"><Link href='/'>Home</Link></li>
            <li className="hover:bg-blue-500 hover:text-white hover:py-1 py-1 hover:px-4 px-4 rounded"><Link href='/login'>LogIn</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
