import { NavLink } from "react-router-dom"
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/" className={({isActive}) => (isActive ? "active" : "hover")}>Home</NavLink></li>
        <li><NavLink to="/users" className={({isActive}) => (isActive ? "active" : "hover")}>Users</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => (isActive ? "active" : "hover")}>About</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar