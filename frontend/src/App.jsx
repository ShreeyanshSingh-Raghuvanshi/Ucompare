// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App














// "use client"
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
// import Navbar from "./components/Navbar"
// import Login from "./pages/Login"
// import Signup from "./pages/Signup"
// import OTPVerification from "./pages/OTPVerification"
// import Home from "./pages/Home"
// import Profile from "./pages/Profile"
// import Compare from "./pages/Compare"
// import { ThemeProvider } from "./context/ThemeContext"
// import { AuthProvider, useAuth } from "./context/AuthContext"
// import "./App.css"

// function AppContent() {
//   const { user, loading } = useAuth()

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="spinner"></div>
//         <p>Loading...</p>
//       </div>
//     )
//   }

//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" />} />
//         <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/home" />} />
//         <Route path="/verify-otp" element={<OTPVerification />} />
//         <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
//         <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
//         <Route path="/compare" element={user ? <Compare /> : <Navigate to="/login" />} />
//         <Route path="/" element={<Navigate to={user ? "/home" : "/login"} />} />
//       </Routes>
//     </div>
//   )
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <AuthProvider>
//         <Router>
//           <AppContent />
//         </Router>
//       </AuthProvider>
//     </ThemeProvider>
//   )
// }

// export default App










"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import OTPVerification from "./pages/OTPVerification"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Compare from "./pages/Compare"
import { ThemeProvider } from "./context/ThemeContext"
import { AuthProvider, useAuth } from "./context/AuthContext"

function AppContent() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/home" />} />
        <Route path="/verify-otp" element={<OTPVerification />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/compare" element={user ? <Compare /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={user ? "/home" : "/login"} />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
