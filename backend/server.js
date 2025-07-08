// import express from "express"
// import mongoose from "mongoose"
// import cors from "cors"
// import dotenv from "dotenv"
// import authRoutes from "./routes/auth.js"
// import compareRoutes from "./routes/compare.js"

// dotenv.config()

// const app = express()
// const PORT = process.env.PORT || 5000

// // Middleware
// app.use(cors())
// app.use(express.json())

// // Routes
// app.use("/api/auth", authRoutes)
// app.use("/api/compare", compareRoutes)

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ucompare", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB")
//   })
//   .catch((error) => {
//     console.error("MongoDB connection error:", error)
//   })

// // Basic route
// app.get("/", (req, res) => {
//   res.json({ message: "Ucompare API is running!" })
// })

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })












import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import compareRoutes from "./routes/compare.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
)
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err)
  res.status(500).json({
    message: "Internal server error",
    error: process.env.NODE_ENV === "development" ? err.message : "Something went wrong",
  })
})

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/compare", compareRoutes)

// MongoDB Connection with better error handling
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/ucompare"

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("✅ Connected to MongoDB successfully")
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message)

    // If MongoDB connection fails, still start the server but log the issue
    console.log("⚠️  Server will start without database connection")
    console.log("📝 Please check your MongoDB connection string and ensure MongoDB is running")
  }
}

// Connect to database
connectDB()

// Basic route
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Ucompare API is running!",
    version: "1.0.0",
    status: "active",
  })
})

// Health check route
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  })
})

// Handle 404 routes
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" })
})

app.listen(PORT, () => {
  console.log(`🌟 Server is running on port ${PORT}`)
  console.log(`🔗 API URL: http://localhost:${PORT}`)
  console.log(`📊 Health Check: http://localhost:${PORT}/health`)
})
