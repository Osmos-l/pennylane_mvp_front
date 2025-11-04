import { NavLink } from 'react-router-dom';
import { FaChartLine, FaUser } from 'react-icons/fa';
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
        <FaChartLine />
      </NavLink>
    </nav>
  );
}
