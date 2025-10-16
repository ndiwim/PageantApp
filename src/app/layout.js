// app/layout.js
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Pageant App',
  description: 'Showcasing pageant events',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-white shadow p-4">
          <Link href="/" className="text-lg font-bold">Home</Link>
        </nav>
        <main>{children}</main>
        {/* Footer */}
        <footer className="bg-gray-100 text-center py-6 mt-12">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Miss South Africa Archive. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
