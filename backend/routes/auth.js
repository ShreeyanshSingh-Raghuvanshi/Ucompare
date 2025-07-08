// import express from "express"
// import jwt from "jsonwebtoken"
// import User from "../models/user.js"
// import { sendOTPEmail } from "../utils/emailService.js"
// import { authenticateToken } from "../middleware/auth.js"

// const router = express.Router()

// // Signup route
// router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, age, phone, password } = req.body

//     // Check if user already exists
//     const existingUser = await User.findOne({ email })
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists with this email" })
//     }

//     // Create new user
//     const user = new User({
//       name,
//       email,
//       age,
//       phone,
//       password,
//     })

//     console.error("Signup error:", error)

//     // Generate and save OTP
//     const otp = user.generateOTP()
//     await user.save()

//     // Send OTP email
//     await sendOTPEmail(email, otp, name)

//     res.status(201).json({
//       message: "User created successfully. Please verify your email with the OTP sent.",
//       email: email,
//     })
//   } catch (error) {
//     console.error("Signup error:", error)
//     res.status(500).json({ message: "Server error during signup" })
//   }
// })

// // Verify OTP route
// router.post("/verify-otp", async (req, res) => {
//   try {
//     const { email, otp } = req.body

//     const user = await User.findOne({ email })
//     if (!user) {
//       return res.status(404).json({ message: "User not found" })
//     }

//     if (user.isVerified) {
//       return res.status(400).json({ message: "User is already verified" })
//     }

//     if (!user.verifyOTP(otp)) {
//       return res.status(400).json({ message: "Invalid or expired OTP" })
//     }

//     // Mark user as verified and clear OTP
//     user.isVerified = true
//     user.otp = null
//     user.otpExpires = null
//     await user.save()

//     // Generate JWT token
//     const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET || "your-secret-key", {
//       expiresIn: "7d",
//     })

//     res.json({
//       message: "Email verified successfully",
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         age: user.age,
//         phone: user.phone,
//         createdAt: user.createdAt,
//       },
//     })
//   } catch (error) {
//     console.error("OTP verification error:", error)
//     res.status(500).json({ message: "Server error during OTP verification" })
//   }
// })

// // Resend OTP route
// router.post("/resend-otp", async (req, res) => {
//   try {
//     const { email } = req.body

//     const user = await User.findOne({ email })
//     if (!user) {
//       return res.status(404).json({ message: "User not found" })
//     }

//     if (user.isVerified) {
//       return res.status(400).json({ message: "User is already verified" })
//     }

//     // Generate new OTP
//     const otp = user.generateOTP()
//     await user.save()

//     // Send OTP email
//     await sendOTPEmail(email, otp, user.name)

//     res.json({ message: "OTP sent successfully" })
//   } catch (error) {
//     console.error("Resend OTP error:", error)
//     res.status(500).json({ message: "Server error during OTP resend" })
//   }
// })

// // Login route
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body

//     // Find user
//     const user = await User.findOne({ email })
//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password" })
//     }

//     // Check if user is verified
//     if (!user.isVerified) {
//       return res.status(401).json({ message: "Please verify your email first" })
//     }

//     // Check password
//     const isPasswordValid = await user.comparePassword(password)
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid email or password" })
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET || "your-secret-key", {
//       expiresIn: "7d",
//     })

//     res.json({
//       message: "Login successful",
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         age: user.age,
//         phone: user.phone,
//         createdAt: user.createdAt,
//       },
//     })
//   } catch (error) {
//     console.error("Login error:", error)
//     res.status(500).json({ message: "Server error during login" })
//   }
// })

// // Get user profile route
// router.get("/profile", authenticateToken, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.userId).select("-password -otp -otpExpires")
//     if (!user) {
//       return res.status(404).json({ message: "User not found" })
//     }

//     res.json({
//       id: user._id,
//       name: user.name,
//       email: user.email,
//       age: user.age,
//       phone: user.phone,
//       createdAt: user.createdAt,
//     })
//   } catch (error) {
//     console.error("Profile fetch error:", error)
//     res.status(500).json({ message: "Server error fetching profile" })
//   }
// })

// // Update user profile route
// router.put("/update-profile", authenticateToken, async (req, res) => {
//   try {
//     const { name, age, phone } = req.body

//     const user = await User.findById(req.user.userId)
//     if (!user) {
//       return res.status(404).json({ message: "User not found" })
//     }

//     // Update user fields
//     user.name = name || user.name
//     user.age = age || user.age
//     user.phone = phone || user.phone

//     await user.save()

//     res.json({
//       message: "Profile updated successfully",
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         age: user.age,
//         phone: user.phone,
//         createdAt: user.createdAt,
//       },
//     })
//   } catch (error) {
//     console.error("Profile update error:", error)
//     res.status(500).json({ message: "Server error updating profile" })
//   }
// })

// export default router





















import express from "express"
import jwt from "jsonwebtoken"
import User from "../models/user.js"
import { sendOTPEmail } from "../utils/emailService.js"
import { authenticateToken } from "../middleware/auth.js"

const router = express.Router()

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, age, phone, password } = req.body

    // Validation
    if (!name || !email || !age || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" })
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" })
    }

    // Create new user
    const user = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      age: Number.parseInt(age),
      phone: phone.trim(),
      password,
    })

    // Generate and save OTP
    const otp = user.generateOTP()
    await user.save()

    // Send OTP email (with error handling)
    try {
      await sendOTPEmail(email, otp, name)
      console.log(`✅ OTP sent successfully to ${email}`)
    } catch (emailError) {
      console.error("❌ Email sending failed:", emailError.message)
      // Don't fail the signup if email fails, but log it
      console.log("⚠️  User created but email notification failed")
    }

    res.status(201).json({
      message: "User created successfully. Please verify your email with the OTP sent.",
      email: email,
    })
  } catch (error) {
    console.error("Signup error:", error)

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message)
      return res.status(400).json({ message: messages[0] })
    }

    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" })
    }

    res.status(500).json({ message: "Server error during signup. Please try again." })
  }
})

// Verify OTP route
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" })
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() })
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "User is already verified" })
    }

    if (!user.verifyOTP(otp.trim())) {
      return res.status(400).json({ message: "Invalid or expired OTP" })
    }

    // Mark user as verified and clear OTP
    user.isVerified = true
    user.clearOTP()
    await user.save()

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "your-secret-key-change-this-in-production",
      { expiresIn: "7d" },
    )

    res.json({
      message: "Email verified successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        age: user.age,
        phone: user.phone,
        createdAt: user.createdAt,
      },
    })
  } catch (error) {
    console.error("OTP verification error:", error)
    res.status(500).json({ message: "Server error during OTP verification" })
  }
})

// Resend OTP route
router.post("/resend-otp", async (req, res) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ message: "Email is required" })
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() })
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "User is already verified" })
    }

    // Generate new OTP
    const otp = user.generateOTP()
    await user.save()

    // Send OTP email
    try {
      await sendOTPEmail(email, otp, user.name)
      console.log(`✅ OTP resent successfully to ${email}`)
    } catch (emailError) {
      console.error("❌ Email resend failed:", emailError.message)
      return res.status(500).json({ message: "Failed to send OTP email" })
    }

    res.json({ message: "OTP sent successfully" })
  } catch (error) {
    console.error("Resend OTP error:", error)
    res.status(500).json({ message: "Server error during OTP resend" })
  }
})

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" })
    }

    // Find user
    const user = await User.findOne({ email: email.toLowerCase().trim() })
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    // Check if user is verified
    if (!user.isVerified) {
      return res.status(401).json({ message: "Please verify your email first" })
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "your-secret-key-change-this-in-production",
      { expiresIn: "7d" },
    )

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        age: user.age,
        phone: user.phone,
        createdAt: user.createdAt,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error during login" })
  }
})

// Get user profile route
router.get("/profile", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password -otp -otpExpires")
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      phone: user.phone,
      createdAt: user.createdAt,
    })
  } catch (error) {
    console.error("Profile fetch error:", error)
    res.status(500).json({ message: "Server error fetching profile" })
  }
})

// Update user profile route
router.put("/update-profile", authenticateToken, async (req, res) => {
  try {
    const { name, age, phone } = req.body

    if (!name || !age || !phone) {
      return res.status(400).json({ message: "Name, age, and phone are required" })
    }

    const user = await User.findById(req.user.userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Update user fields
    user.name = name.trim()
    user.age = Number.parseInt(age)
    user.phone = phone.trim()

    await user.save()

    res.json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        age: user.age,
        phone: user.phone,
        createdAt: user.createdAt,
      },
    })
  } catch (error) {
    console.error("Profile update error:", error)

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message)
      return res.status(400).json({ message: messages[0] })
    }

    res.status(500).json({ message: "Server error updating profile" })
  }
})

export default router
