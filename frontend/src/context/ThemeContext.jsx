// "use client"

// import { createContext, useContext, useState, useEffect } from "react"

// const ThemeContext = createContext()

// export const useTheme = () => {
//   const context = useContext(ThemeContext)
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider")
//   }
//   return context
// }

// export const ThemeProvider = ({ children }) => {
//   const [isDark, setIsDark] = useState(false)

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme")
//     if (savedTheme) {
//       setIsDark(savedTheme === "dark")
//     }
//   }, [])

//   useEffect(() => {
//     document.body.className = isDark ? "dark-theme" : "light-theme"
//     localStorage.setItem("theme", isDark ? "dark" : "light")
//   }, [isDark])

//   const toggleTheme = () => {
//     setIsDark(!isDark)
//   }

//   return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
// }











"use client"

import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    } else {
      setIsDark(prefersDark)
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
}
