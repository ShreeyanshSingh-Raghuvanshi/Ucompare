// import express from "express"
// import { authenticateToken } from "../middleware/auth.js"
// import { scrapeProductData, compareProducts } from "../utils/productComparison.js"

// const router = express.Router()

// // Compare products route
// router.post("/", authenticateToken, async (req, res) => {
//   try {
//     const { url1, url2 } = req.body

//     if (!url1 || !url2) {
//       return res.status(400).json({ message: "Both product URLs are required" })
//     }

//     // Validate URLs
//     try {
//       new URL(url1)
//       new URL(url2)
//     } catch (error) {
//       return res.status(400).json({ message: "Invalid URL format" })
//     }

//     // Scrape product data (mock implementation)
//     const product1 = await scrapeProductData(url1)
//     const product2 = await scrapeProductData(url2)

//     // Compare products
//     const comparison = compareProducts(product1, product2)

//     res.json({
//       product1,
//       product2,
//       recommendation: comparison,
//     })
//   } catch (error) {
//     console.error("Product comparison error:", error)
//     res.status(500).json({ message: "Server error during product comparison" })
//   }
// })

// export default router



















import express from "express"
import { authenticateToken } from "../middleware/auth.js"
import { scrapeProductData, compareProducts, validateProductsForComparison } from "../utils/productComparison.js"

const router = express.Router()

// Compare multiple products route (1-5 products)
router.post("/", authenticateToken, async (req, res) => {
  try {
    const { urls } = req.body

    // Validate input
    if (!urls || !Array.isArray(urls)) {
      return res.status(400).json({
        message: "URLs array is required",
      })
    }

    if (urls.length < 2 || urls.length > 5) {
      return res.status(400).json({
        message: "Please provide 2-5 product URLs for comparison",
      })
    }

    // Validate URLs format
    const invalidUrls = []
    urls.forEach((url, index) => {
      try {
        new URL(url)
      } catch (error) {
        invalidUrls.push(`URL ${index + 1}: ${url}`)
      }
    })

    if (invalidUrls.length > 0) {
      return res.status(400).json({
        message: `Invalid URLs detected: ${invalidUrls.join(", ")}`,
      })
    }

    // Check for duplicate URLs
    const uniqueUrls = [...new Set(urls)]
    if (uniqueUrls.length !== urls.length) {
      return res.status(400).json({
        message: "Please provide unique URLs for each product",
      })
    }

    console.log(`🔍 Comparing ${urls.length} products:`, urls)

    // Scrape product data
    const scrapingResults = await Promise.allSettled(
      urls.map(async (url, index) => {
        try {
          console.log(`📦 Scraping product ${index + 1}: ${url}`)
          return await scrapeProductData(url)
        } catch (error) {
          console.error(`❌ Failed to scrape product ${index + 1}:`, error.message)
          throw new Error(`Product ${index + 1}: ${error.message}`)
        }
      }),
    )

    // Check for scraping failures
    const failedScrapes = scrapingResults
      .map((result, index) => ({ result, index }))
      .filter(({ result }) => result.status === "rejected")

    if (failedScrapes.length > 0) {
      const errors = failedScrapes.map(({ result, index }) => `Product ${index + 1}: ${result.reason.message}`)
      return res.status(400).json({
        message: "Failed to scrape some products",
        errors: errors,
      })
    }

    // Extract successfully scraped products
    const products = scrapingResults.map((result) => result.value)

    // Validate products can be compared (same category)
    try {
      validateProductsForComparison(products)
    } catch (error) {
      return res.status(400).json({
        message: error.message,
        suggestion: "Please ensure all products are from the same category (e.g., all smartphones, all laptops, etc.)",
      })
    }

    // Perform comparison
    const comparisonResult = compareProducts(products)

    console.log(`✅ Comparison completed successfully for ${products.length} products`)

    res.json({
      success: true,
      comparison: comparisonResult,
      productsAnalyzed: products.length,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Product comparison error:", error)
    res.status(500).json({
      message: "Server error during product comparison",
      error: process.env.NODE_ENV === "development" ? error.message : "Internal server error",
    })
  }
})

// Get supported product categories
router.get("/categories", authenticateToken, (req, res) => {
  try {
    const categories = {
      smartphones: "Smartphones & Mobile Devices",
      laptops: "Laptops & Computers",
      headphones: "Headphones & Audio",
      televisions: "Televisions & Displays",
      airconditioners: "Air Conditioners",
      refrigerators: "Refrigerators",
      washingmachines: "Washing Machines",
      cameras: "Cameras & Photography",
    }

    res.json({
      success: true,
      categories: categories,
      message: "Supported product categories for comparison",
    })
  } catch (error) {
    console.error("Categories fetch error:", error)
    res.status(500).json({
      message: "Server error fetching categories",
    })
  }
})

export default router
