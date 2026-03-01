import Link from 'next/link'

export default function Header() {
  return (
    <header style={{padding:20, borderBottom:"1px solid #ddd"}}>

      <Link href="/">Home</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/portfolio">Portfolio</Link> |{" "}
      <Link href="/privacy">Privacy</Link>

    </header>
  )
}
