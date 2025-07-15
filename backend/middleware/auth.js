import jwt from "jsonwebtoken"

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "Access token required" })
  }

  jwt.verify(token, process.env.JWT_SECRET || "your-secret-key", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" })
    }
    req.user = user
    next()
  })
}














// // index.js (with "type": "module" in package.json)

// import express from "express";
// import cors from "cors";
// import jwt from "jsonwebtoken";

// const app = express();

// // ✅ Middleware: CORS configuration
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   credentials: true,
// }));

// app.options("*", cors());
// app.use(express.json());

// // ✅ JWT Middleware: authenticateToken
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Access token required" });
//   }

//   jwt.verify(token, process.env.JWT_SECRET || "your-secret-key", (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: "Invalid or expired token" });
//     }
//     req.user = user;
//     next();
//   });
// };

// // ✅ Public route
// app.post("/api/auth/signup", (req, res) => {
//   res.json({ message: "Signup success" });
// });

// // ✅ Protected route example
// app.get("/api/profile", authenticateToken, (req, res) => {
//   res.json({ message: `Welcome, ${req.user.name || "user"}!`, user: req.user });
// });

// // ✅ Start server
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
