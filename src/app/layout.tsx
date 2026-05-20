import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Sy Henna & Blanchiment Dentaire',
  description: 'Art du henné par Syrine & blanchiment dentaire par Mariam — beauté artisanale et soins premium.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full bg-[#0A0A0A] text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
