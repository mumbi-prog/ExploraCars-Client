import { Navbar, Footer } from "@/components";
import "../globals.css";
import { Inter } from "next/font/google";
import { Providers } from "../providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Explora",
  description:
    "Explora is a car rental service provider based in Nairobi, Mombasa and Kisumu. We offer convenience, flexibility and class.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="!font-poppins">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
