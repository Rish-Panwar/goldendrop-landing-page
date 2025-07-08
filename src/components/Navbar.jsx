import { navLinks } from "../../constants"

const Navbar = () => {
  return (
    <nav>
      <a href="#home" className="flex items-center gap-2">
        <p className="m-2 text-5xl text-amber-200">Bee Pure</p>
      </a>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
