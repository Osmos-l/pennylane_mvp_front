import { NavLink } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import './sidebar.css';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `icon-link ${isActive ? 'active' : ''}`
        }
      >
        <IoMdHome />
      </NavLink>
    </nav>
  );
}
