export const metadata = {
  title: 'Vanuatu Team — Be Seen. Be Remembered. Be Nambawan!',
  description: 'Discover a global opportunity with professional branding and relationship marketing. Join the Vanuatu Team.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
