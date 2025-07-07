import express from "express"
import { authenticateToken } from "../middleware/auth.js"
import { scrapeProductData, compareProducts } from "../utils/productComparison.js"

const router = express.Router()

// Compare products route
router.post("/", authenticateToken, async (req, res) => {
  try {
    const { url1, url2 } = req.body

    if (!url1 || !url2) {
      return res.status(400).json({ message: "Both product URLs are required" })
    }

    // Validate URLs
    try {
      new URL(url1)
      new URL(url2)
    } catch (error) {
      return res.status(400).json({ message: "Invalid URL format" })
    }

    // Scrape product data (mock implementation)
    const product1 = await scrapeProductData(url1)
    const product2 = await scrapeProductData(url2)

    // Compare products
    const comparison = compareProducts(product1, product2)

    res.json({
      product1,
      product2,
      recommendation: comparison,
    })
  } catch (error) {
    console.error("Product comparison error:", error)
    res.status(500).json({ message: "Server error during product comparison" })
  }
})

export default router
