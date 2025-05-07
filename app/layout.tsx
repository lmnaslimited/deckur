import type React from "react"
import type { Metadata } from "next"
import "@repo/ui/globals.css"
export const metadata: Metadata = {
  title: "LMNAs Cloud Solutions - AI-Powered ERP Solutions",
  description: "Enterprise-grade cloud solutions with AI integration for modern businesses",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" >
      <body >
          <main className="">{children}</main>
      </body>
    </html>
  )
}

