export const metadata = {
  title: 'Vanuatu Team — Be Seen. Be Remembered. Be Nambawan!',
  description: 'Discover a global opportunity with professional branding and relationship marketing. Join the Vanuatu Team.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
