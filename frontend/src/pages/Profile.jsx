// "use client"

// import { useState } from "react"
// import { useAuth } from "../context/AuthContext"
// import "./Profile.css"

// const Profile = () => {
//   const { user } = useAuth()
//   const [isEditing, setIsEditing] = useState(false)
//   const [formData, setFormData] = useState({
//     name: user?.name || "",
//     age: user?.age || "",
//     phone: user?.phone || "",
//   })
//   const [loading, setLoading] = useState(false)
//   const [message, setMessage] = useState("")

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSave = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setMessage("")

//     try {
//       const token = localStorage.getItem("token")
//       const response = await fetch("http://localhost:5000/api/auth/update-profile", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         setMessage("Profile updated successfully!")
//         setIsEditing(false)
//         // Update user context here if needed
//       } else {
//         setMessage(data.message || "Update failed")
//       }
//     } catch (error) {
//       setMessage("Network error. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleCancel = () => {
//     setFormData({
//       name: user?.name || "",
//       age: user?.age || "",
//       phone: user?.phone || "",
//     })
//     setIsEditing(false)
//     setMessage("")
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <div className="profile-header">
//           <div className="profile-avatar">{user?.name?.charAt(0).toUpperCase()}</div>
//           <h1>My Profile</h1>
//         </div>

//         <form onSubmit={handleSave} className="profile-form">
//           <div className="form-group">
//             <label>Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Email Address</label>
//             <input type="email" value={user?.email || ""} disabled className="disabled-input" />
//             <small>Email cannot be changed</small>
//           </div>

//           <div className="form-group">
//             <label>Age</label>
//             <input
//               type="number"
//               name="age"
//               value={formData.age}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               min="1"
//               max="120"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               disabled={!isEditing}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Member Since</label>
//             <input
//               type="text"
//               value={new Date(user?.createdAt).toLocaleDateString()}
//               disabled
//               className="disabled-input"
//             />
//           </div>

//           {message && <div className={`message ${message.includes("success") ? "success" : "error"}`}>{message}</div>}

//           <div className="profile-actions">
//             {!isEditing ? (
//               <button type="button" className="edit-button" onClick={() => setIsEditing(true)}>
//                 Edit Profile
//               </button>
//             ) : (
//               <div className="edit-actions">
//                 <button type="button" className="cancel-button" onClick={handleCancel}>
//                   Cancel
//                 </button>
//                 <button type="submit" className="save-button" disabled={loading}>
//                   {loading ? "Saving..." : "Save Changes"}
//                 </button>
//               </div>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Profile


















"use client"

import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { UserIcon, MailIcon, PhoneIcon, CalendarIcon, EditIcon, SaveIcon, XIcon } from "lucide-react"

const Profile = () => {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || "",
    age: user?.age || "",
    phone: user?.phone || "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      const token = localStorage.getItem("token")
      const response = await fetch("http://localhost:5000/api/auth/update-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage("Profile updated successfully!")
        setIsEditing(false)
      } else {
        setMessage(data.message || "Update failed")
      }
    } catch (error) {
      setMessage("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setFormData({
      name: user?.name || "",
      age: user?.age || "",
      phone: user?.phone || "",
    })
    setIsEditing(false)
    setMessage("")
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">{user?.name?.charAt(0).toUpperCase()}</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
            <p className="text-blue-100">Manage your account information</p>
          </div>

          {/* Content */}
          <div className="p-8">
            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Age</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      min="1"
                      max="120"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={user?.email || ""}
                    disabled
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Email cannot be changed</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Member Since</label>
                <input
                  type="text"
                  value={new Date(user?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                />
              </div>

              {message && (
                <div
                  className={`px-4 py-3 rounded-lg text-sm ${
                    message.includes("success")
                      ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400"
                      : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
                  }`}
                >
                  {message}
                </div>
              )}

              <div className="flex justify-center space-x-4">
                {!isEditing ? (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    <EditIcon className="w-5 h-5 mr-2" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <XIcon className="w-5 h-5 mr-2" />
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {loading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Saving...
                        </div>
                      ) : (
                        <>
                          <SaveIcon className="w-5 h-5 mr-2" />
                          Save Changes
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
