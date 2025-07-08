// "use client"
// import { Link, useNavigate } from "react-router-dom"
// import { useTheme } from "../context/ThemeContext"
// import { useAuth } from "../context/AuthContext"
// import "./Navbar.css"

// const Navbar = () => {
//   const { isDark, toggleTheme } = useTheme()
//   const { user, logout } = useAuth()
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     logout()
//     navigate("/login")
//   }

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <Link to="/" className="nav-logo">
//           Ucompare
//         </Link>

//         <div className="nav-menu">
//           {user && (
//             <>
//               <Link to="/home" className="nav-link">
//                 Home
//               </Link>
//               <Link to="/compare" className="nav-link">
//                 Compare
//               </Link>
//               <Link to="/profile" className="nav-link">
//                 Profile
//               </Link>
//             </>
//           )}

//           <button className="theme-toggle" onClick={toggleTheme}>
//             {isDark ? "☀️" : "🌙"}
//           </button>

//           {user ? (
//             <button className="nav-button logout-btn" onClick={handleLogout}>
//               Logout
//             </button>
//           ) : (
//             <div className="auth-buttons">
//               <Link to="/login" className="nav-button">
//                 Login
//               </Link>
//               <Link to="/signup" className="nav-button">
//                 Sign Up
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar





















"use client"

import { Link, useNavigate } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import { useAuth } from "../context/AuthContext"
import { SunIcon, MoonIcon, UserIcon, LogOutIcon } from "lucide-react"

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">U</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ucompare
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            {user && (
              <>
                <Link
                  to="/home"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/compare"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Compare
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
                >
                  <UserIcon className="w-4 h-4" />
                  <span>Profile</span>
                </Link>
              </>
            )}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {isDark ? (
                <SunIcon className="w-5 h-5 text-yellow-500" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <LogOutIcon className="w-4 h-4" />
                <span>Logout</span>
              </button>
            ) : (
              <div className="flex space-x-2">
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
