import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Hybrid Athlete',
  description: 'Personal website showcasing hybrid athlete journey',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
      <main className="min-h-screen">
        {children}
      </main>
      </body>
      </html>
  )
}
