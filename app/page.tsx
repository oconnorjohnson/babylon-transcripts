import Link from "next/link"
import '@fontsource/public-sans'

export default function Home() {
  return (
    <main className="py-8 px-48">
      <Link className="bg-blue-900 hover:bg-blue-700 text-black font-medium py-2 px-4 rounded-md" href={"/dashboard"}>Dashboard</Link>
    </main>
  )
};