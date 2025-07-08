// "use client"

// import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { useAuth } from "../context/AuthContext"
// import "./Auth.css"

// const OTPVerification = () => {
//   const [otp, setOtp] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")
//   const [resendLoading, setResendLoading] = useState(false)
//   const navigate = useNavigate()
//   const { login } = useAuth()

//   useEffect(() => {
//     const tempEmail = localStorage.getItem("tempEmail")
//     if (!tempEmail) {
//       navigate("/signup")
//     }
//   }, [navigate])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError("")
//     setLoading(true)

//     const email = localStorage.getItem("tempEmail")

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, otp }),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         localStorage.removeItem("tempEmail")
//         login(data.user, data.token)
//         navigate("/home")
//       } else {
//         setError(data.message || "OTP verification failed")
//       }
//     } catch (error) {
//       setError("Network error. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleResendOTP = async () => {
//     setResendLoading(true)
//     const email = localStorage.getItem("tempEmail")

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/resend-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       })

//       if (response.ok) {
//         alert("OTP sent successfully!")
//       } else {
//         alert("Failed to resend OTP")
//       }
//     } catch (error) {
//       alert("Network error. Please try again.")
//     } finally {
//       setResendLoading(false)
//     }
//   }

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Verify Your Email</h2>
//         <p className="otp-message">We've sent a 6-digit OTP to your email address. Please enter it below.</p>

//         <form onSubmit={handleSubmit} className="auth-form">
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Enter 6-digit OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               required
//               maxLength="6"
//               pattern="[0-9]{6}"
//             />
//           </div>

//           {error && <div className="error-message">{error}</div>}

//           <button type="submit" className="auth-button" disabled={loading}>
//             {loading ? "Verifying..." : "Verify OTP"}
//           </button>
//         </form>

//         <button className="resend-button" onClick={handleResendOTP} disabled={resendLoading}>
//           {resendLoading ? "Resending..." : "Resend OTP"}
//         </button>
//       </div>
//     </div>
//   )
// }

// export default OTPVerification













"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { ShieldCheckIcon, RefreshCwIcon } from "lucide-react"

const OTPVerification = () => {
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [resendLoading, setResendLoading] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const navigate = useNavigate()
  const { login } = useAuth()

  useEffect(() => {
    const tempEmail = localStorage.getItem("tempEmail")
    if (!tempEmail) {
      navigate("/signup")
    }
  }, [navigate])

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const email = localStorage.getItem("tempEmail")

    try {
      const response = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.removeItem("tempEmail")
        login(data.user, data.token)
        navigate("/home")
      } else {
        setError(data.message || "OTP verification failed")
      }
    } catch (error) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleResendOTP = async () => {
    setResendLoading(true)
    const email = localStorage.getItem("tempEmail")

    try {
      const response = await fetch("http://localhost:5000/api/auth/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setCountdown(60)
        setError("")
      } else {
        setError("Failed to resend OTP")
      }
    } catch (error) {
      setError("Network error. Please try again.")
    } finally {
      setResendLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <ShieldCheckIcon className="w-8 h-8" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">Verify Your Email</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              We've sent a 6-digit verification code to your email address
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-center">
                Enter Verification Code
              </label>
              <input
                type="text"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                required
                maxLength="6"
                className="w-full px-4 py-4 text-center text-2xl font-mono tracking-widest border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
              />
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Verifying...
                </div>
              ) : (
                "Verify Email"
              )}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={resendLoading || countdown > 0}
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RefreshCwIcon className="w-4 h-4 mr-1" />
                {countdown > 0 ? `Resend in ${countdown}s` : resendLoading ? "Sending..." : "Resend Code"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OTPVerification
