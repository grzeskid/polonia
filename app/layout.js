`use client`
import '../app/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Towarzystwo Wioślarzy Polonia',
  description: 'Strona klubu wioślarskiego TW Polonia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <header>
          <Navbar/>
         </header>
         <main>
            {children}
          </main>
          <Footer/>
      </body>
    </html>
  )
}
