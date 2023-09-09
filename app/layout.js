import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { Providers } from "./providers/providers";
export const metadata = {
  title: 'Explora',
  description: 'Explora is a car rental service provider based in Nairobi, Mombasa and Kisumu. We offer convenience, flexibility and class.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>{children}</Providers>
    </html>
  )
}
