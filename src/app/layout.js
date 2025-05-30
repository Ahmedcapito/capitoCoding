import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";

const roboto = Roboto({
  subsets: ['latin'], 
});

export const metadata = {
  title: "capitoCoding",
  description: "A creative hub for learning graphic design, web development, and digital marketing. Discover your roadmap and level up your skills in one powerful platform.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
