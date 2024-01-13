import '../globals.css'
export const metadata = {
    title: 'Explora',
    description: 'Explora is a car rental service provider based in Nairobi, Mombasa and Kisumu. We offer convenience, flexibility and class.',
  }
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className="!font-poppins">{children}</body>
    </html>
  )
}

