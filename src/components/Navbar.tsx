import { Link } from "react-router-dom"


export function Navbar() {

  return (
    <nav className="flex bg-purple-500 gap-3">
      <li className="list-none">
        <Link to={'/home'}>Home</Link>
      </li>
      <li className="list-none">
        <Link to={'/contact'}>Contacts</Link>
      </li>
    </nav>
  )
}