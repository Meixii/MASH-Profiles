import React from 'react'
import './styles.css'

export const metadata = {
  description: 'A multi-profile portfolio powered by Payload CMS.',
  title: 'MASH Profiles',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
