import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Roboto } from 'next/font/google'
import { Orbitron } from 'next/font/google'
import './globals.css'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700'] })
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Athil Shaji Portfolio',
  description:
    'Portfolio website for an Electronics and Communication Engineer specializing in VLSI and Microsystems.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.className} ${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
