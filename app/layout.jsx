import './globals.css'
import Nav from './auth/nav'
import { Public_Sans } from "@next/font/google";
// import { Public } from '@fontsource/public-sans';

// const sans = Public({
//   subsets: ["latin"],
//   weight: [400, 700],
//   variable: "--font-publicSans",
// })

const pubSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`mx-4 md:mx-48 xl:mx-96 ${pubSans}`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
