// import mongoose from "mongoose"
// import bcrypt from "bcryptjs"
// import crypto from "crypto"

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },
//     age: {
//       type: Number,
//       required: true,
//       min: 1,
//       max: 120,
//     },
//     phone: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       minlength: 6,
//     },
//     otp: {
//       type: String,
//       default: null,
//     },
//     otpExpires: {
//       type: Date,
//       default: null,
//     },
//     isVerified: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   },
// )

// // Hash password before saving
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next()

//   try {
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
//   } catch (error) {
//     next(error)
//   }
// })

// // Compare password method
// userSchema.methods.comparePassword = async function (candidatePassword) {
//   return await bcrypt.compare(candidatePassword, this.password)
// }

// // Generate OTP method
// userSchema.methods.generateOTP = function () {
//   const otp = Math.floor(100000 + Math.random() * 900000).toString()
//   this.otp = otp
//   this.otpExpires = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
//   return otp
// }

// // Verify OTP method
// userSchema.methods.verifyOTP = function (candidateOTP) {
//   if (!this.otp || !this.otpExpires) return false
//   if (this.otpExpires < new Date()) return false
//   return this.otp === candidateOTP
// }

// const User = mongoose.models.User || mongoose.model("User", userSchema)
// export default User

















import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [1, "Age must be at least 1"],
      max: [120, "Age cannot exceed 120"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      minlength: [10, "Phone number must be at least 10 digits"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    otp: {
      type: String,
      default: null,
    },
    otpExpires: {
      type: Date,
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()

  try {
    const salt = await bcrypt.genSalt(12)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error) {
    next(error)
  }
})

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password)
  } catch (error) {
    throw new Error("Password comparison failed")
  }
}

// Generate OTP method
userSchema.methods.generateOTP = function () {
  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  this.otp = otp
  this.otpExpires = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
  return otp
}

// Verify OTP method
userSchema.methods.verifyOTP = function (candidateOTP) {
  if (!this.otp || !this.otpExpires) return false
  if (this.otpExpires < new Date()) return false
  return this.otp === candidateOTP
}

// Clear OTP method
userSchema.methods.clearOTP = function () {
  this.otp = null
  this.otpExpires = null
}

export default mongoose.model("User", userSchema)
