
import { Navbar } from '@/components'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Explora',
  description: 'Explora is a car rental service provider based in Nairobi, Mombasa and Kisumu. We offer convenience, flexibility and class.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        {/* <Footer/> */}
        </body>
      
    </html>
  )
}