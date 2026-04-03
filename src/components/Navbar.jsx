import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const activeStyle = {
    color: '#0dcaf0',
    borderBottom: '2px solid #0dcaf0',
    paddingBottom: '4px'
  };

  const inactiveStyle = {
    color: '#f8f9fa',
    paddingBottom: '4px',
    transition: '0.3s'
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top border-bottom border-secondary" style={{ backgroundColor: 'rgba(33, 37, 41, 0.85)', backdropFilter: 'blur(12px)' }}>
      <div className="container py-2">
        <Link className="navbar-brand fw-bolder fs-3 text-info text-decoration-none" to="/">
          Fatkur<span className="text-white">Mods</span>
        </Link>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold align-items-lg-center">
            <li className="nav-item mx-2">
              <NavLink 
                to="/" 
                className="nav-link" 
                style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink 
                to="/team" 
                className="nav-link" 
                style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
              >
                Team
              </NavLink>
            </li>
            <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
              <Link to="/contact" className="btn btn-info rounded-pill px-4 fw-bold shadow-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}