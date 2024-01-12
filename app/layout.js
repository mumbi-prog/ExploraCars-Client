import "./globals.css";

import { Providers } from "./providers/providers";
export const metadata = {
  title: "Explora",
  description:
    "Explora is a car rental service provider based in Nairobi, Mombasa and Kisumu. We offer convenience, flexibility and class.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main className="!font-poppins">
        <Providers>{children}</Providers>
      </main>
    </html>
  );
}
