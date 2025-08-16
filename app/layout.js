import { Outfit } from 'next/font/google'
import './globals.css'
const OutfitFont = Outfit({ subsets: ['latin'], weight:['400','500','600','700'] })

export const metadata = {
  title:"Blogs App",
  description: "A simple blog app",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={OutfitFont.className}>
        {children}
      </body>
    </html>
  );
}
