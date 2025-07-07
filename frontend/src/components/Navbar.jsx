"use client"
import { Link, useNavigate } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import { useAuth } from "../context/AuthContext"
import "./Navbar.css"

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Ucompare
        </Link>

        <div className="nav-menu">
          {user && (
            <>
              <Link to="/home" className="nav-link">
                Home
              </Link>
              <Link to="/compare" className="nav-link">
                Compare
              </Link>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </>
          )}

          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? "☀️" : "🌙"}
          </button>

          {user ? (
            <button className="nav-button logout-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="nav-button">
                Login
              </Link>
              <Link to="/signup" className="nav-button">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
