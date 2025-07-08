// "use client"

// import { createContext, useContext, useState, useEffect } from "react"

// const AuthContext = createContext()

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider")
//   }
//   return context
// }

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const token = localStorage.getItem("token")
//     if (token) {
//       fetchUserProfile(token)
//     } else {
//       setLoading(false)
//     }
//   }, [])

//   const fetchUserProfile = async (token) => {
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })

//       if (response.ok) {
//         const userData = await response.json()
//         setUser(userData)
//       } else {
//         localStorage.removeItem("token")
//       }
//     } catch (error) {
//       console.error("Error fetching user profile:", error)
//       localStorage.removeItem("token")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const login = (userData, token) => {
//     setUser(userData)
//     localStorage.setItem("token", token)
//   }

//   const logout = () => {
//     setUser(null)
//     localStorage.removeItem("token")
//   }

//   return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
// }














"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      fetchUserProfile(token)
    } else {
      setLoading(false)
    }
  }, [])

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const userData = await response.json()
        setUser(userData)
      } else {
        localStorage.removeItem("token")
      }
    } catch (error) {
      console.error("Error fetching user profile:", error)
      localStorage.removeItem("token")
    } finally {
      setLoading(false)
    }
  }

  const login = (userData, token) => {
    setUser(userData)
    localStorage.setItem("token", token)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("token")
  }

  return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
}
