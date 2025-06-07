import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leo Pastel",
  description:
    "Leo Pastel is an artist from Cincinnati, Ohio. Early adopter of AI music, contributor to onchain music space, and co-founder of THE 3THER creative collective.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  )
}
