import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          AK
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-green-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/resume" className="hover:text-green-400 transition-colors">
              Resume
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
