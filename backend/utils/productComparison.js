// // Mock product data scraper (replace with actual scraping logic)
// export const scrapeProductData = async (url) => {
//   try {
//     // This is a mock implementation
//     // In a real application, you would scrape the actual website

//     const mockProducts = {
//       "amazon.com": {
//         name: "Amazon Product Sample",
//         price: "$299.99",
//         rating: "4.5/5",
//         features: "High quality, Fast shipping, Good reviews",
//       },
//       "flipkart.com": {
//         name: "Flipkart Product Sample",
//         price: "₹24,999",
//         rating: "4.2/5",
//         features: "Good value, Local warranty, Easy returns",
//       },
//       "ebay.com": {
//         name: "eBay Product Sample",
//         price: "$279.99",
//         rating: "4.0/5",
//         features: "Competitive price, Auction option, Global shipping",
//       },
//     }

//     // Determine which mock data to return based on URL
//     const domain = new URL(url).hostname.toLowerCase()

//     if (domain.includes("amazon")) {
//       return mockProducts["amazon.com"]
//     } else if (domain.includes("flipkart")) {
//       return mockProducts["flipkart.com"]
//     } else if (domain.includes("ebay")) {
//       return mockProducts["ebay.com"]
//     } else {
//       // Generic mock data for other sites
//       return {
//         name: "Generic Product",
//         price: "$199.99",
//         rating: "4.0/5",
//         features: "Standard features, Good quality, Reliable seller",
//       }
//     }
//   } catch (error) {
//     console.error("Error scraping product data:", error)
//     throw new Error("Failed to scrape product data")
//   }
// }

// // Compare two products and provide recommendation
// export const compareProducts = (product1, product2) => {
//   try {
//     // Extract numeric values for comparison
//     const price1 = Number.parseFloat(product1.price.replace(/[^0-9.]/g, ""))
//     const price2 = Number.parseFloat(product2.price.replace(/[^0-9.]/g, ""))

//     const rating1 = Number.parseFloat(product1.rating.split("/")[0])
//     const rating2 = Number.parseFloat(product2.rating.split("/")[0])

//     let winner = ""
//     let reason = ""
//     let pros = []
//     let cons = []

//     // Simple comparison logic
//     if (rating1 > rating2 && price1 <= price2) {
//       winner = "Product 1"
//       reason = "Better rating with competitive or lower price"
//       pros = ["Higher customer rating", "Better value for money", "More satisfied customers"]
//       cons = ["May have limited availability", "Shipping might take longer"]
//     } else if (rating2 > rating1 && price2 <= price1) {
//       winner = "Product 2"
//       reason = "Better rating with competitive or lower price"
//       pros = ["Higher customer rating", "Better value for money", "More satisfied customers"]
//       cons = ["May have limited availability", "Shipping might take longer"]
//     } else if (price1 < price2) {
//       winner = "Product 1"
//       reason = "More affordable option with decent rating"
//       pros = ["Lower price", "Good value for budget-conscious buyers", "Cost-effective choice"]
//       cons = ["Slightly lower rating", "May compromise on some features"]
//     } else if (price2 < price1) {
//       winner = "Product 2"
//       reason = "More affordable option with decent rating"
//       pros = ["Lower price", "Good value for budget-conscious buyers", "Cost-effective choice"]
//       cons = ["Slightly lower rating", "May compromise on some features"]
//     } else if (rating1 > rating2) {
//       winner = "Product 1"
//       reason = "Higher customer satisfaction rating"
//       pros = ["Better customer reviews", "Higher quality expected", "More reliable choice"]
//       cons = ["Higher price point", "May be overkill for basic needs"]
//     } else {
//       winner = "Product 2"
//       reason = "Higher customer satisfaction rating"
//       pros = ["Better customer reviews", "Higher quality expected", "More reliable choice"]
//       cons = ["Higher price point", "May be overkill for basic needs"]
//     }

//     return {
//       winner,
//       reason,
//       pros,
//       cons,
//     }
//   } catch (error) {
//     console.error("Error comparing products:", error)
//     return {
//       winner: "Unable to determine",
//       reason: "Error occurred during comparison",
//       pros: ["Both products have their merits"],
//       cons: ["Unable to provide detailed comparison"],
//     }
//   }
// }






















// Enhanced mock product data scraper
export const scrapeProductData = async (url) => {
  try {
    console.log(`🔍 Scraping product data from: ${url}`)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

    const domain = new URL(url).hostname.toLowerCase()

    // Enhanced mock data based on different e-commerce sites
    const mockProducts = {
      "amazon.com": {
        name: "Premium Wireless Headphones - Amazon",
        price: "$299.99",
        rating: "4.5/5",
        features: "Active Noise Cancellation, 30-hour battery, Premium sound quality, Fast shipping with Prime",
        reviews: 15420,
        availability: "In Stock",
        seller: "Amazon",
      },
      "amazon.in": {
        name: "Premium Wireless Headphones - Amazon India",
        price: "₹24,999",
        rating: "4.3/5",
        features: "Active Noise Cancellation, 28-hour battery, Good sound quality, Amazon Prime delivery",
        reviews: 8750,
        availability: "In Stock",
        seller: "Amazon India",
      },
      "flipkart.com": {
        name: "Wireless Headphones Pro - Flipkart",
        price: "₹22,999",
        rating: "4.2/5",
        features: "Noise Cancellation, 25-hour battery, Local warranty, Easy returns, Flipkart Assured",
        reviews: 6890,
        availability: "Limited Stock",
        seller: "Flipkart",
      },
      "ebay.com": {
        name: "Wireless Headphones - eBay",
        price: "$279.99",
        rating: "4.0/5",
        features: "Good sound quality, 24-hour battery, Competitive price, Global shipping, Auction available",
        reviews: 3240,
        availability: "Available",
        seller: "eBay Seller",
      },
      "myntra.com": {
        name: "Fashion Wireless Headphones - Myntra",
        price: "₹19,999",
        rating: "4.1/5",
        features: "Stylish design, 20-hour battery, Fashion-forward, Easy returns, Myntra insider benefits",
        reviews: 2150,
        availability: "In Stock",
        seller: "Myntra",
      },
      "snapdeal.com": {
        name: "Budget Wireless Headphones - Snapdeal",
        price: "₹15,999",
        rating: "3.8/5",
        features: "Affordable price, 18-hour battery, Basic features, Cash on delivery available",
        reviews: 1890,
        availability: "In Stock",
        seller: "Snapdeal",
      },
    }

    // Determine which mock data to return based on URL
    let productData

    if (domain.includes("amazon.com")) {
      productData = mockProducts["amazon.com"]
    } else if (domain.includes("amazon.in")) {
      productData = mockProducts["amazon.in"]
    } else if (domain.includes("flipkart")) {
      productData = mockProducts["flipkart.com"]
    } else if (domain.includes("ebay")) {
      productData = mockProducts["ebay.com"]
    } else if (domain.includes("myntra")) {
      productData = mockProducts["myntra.com"]
    } else if (domain.includes("snapdeal")) {
      productData = mockProducts["snapdeal.com"]
    } else {
      // Generic mock data for other sites
      productData = {
        name: `Generic Product - ${domain}`,
        price: "$199.99",
        rating: "4.0/5",
        features: "Standard features, Good quality, Reliable seller, Standard warranty",
        reviews: 1500,
        availability: "In Stock",
        seller: "Generic Store",
      }
    }

    console.log(`✅ Product data scraped successfully from ${domain}`)
    return productData
  } catch (error) {
    console.error("❌ Error scraping product data:", error.message)
    throw new Error(`Failed to scrape product data from ${url}`)
  }
}

// Enhanced product comparison with more intelligent analysis
export const compareProducts = (product1, product2) => {
  try {
    console.log("🤖 Analyzing products for comparison...")

    // Extract numeric values for comparison
    const price1 = Number.parseFloat(product1.price.replace(/[^0-9.]/g, ""))
    const price2 = Number.parseFloat(product2.price.replace(/[^0-9.]/g, ""))

    const rating1 = Number.parseFloat(product1.rating.split("/")[0])
    const rating2 = Number.parseFloat(product2.rating.split("/")[0])

    const reviews1 = product1.reviews || 0
    const reviews2 = product2.reviews || 0

    let winner = ""
    let reason = ""
    let pros = []
    let cons = []
    let score1 = 0
    let score2 = 0

    // Scoring algorithm
    // Price score (lower is better, max 30 points)
    const maxPrice = Math.max(price1, price2)
    score1 += ((maxPrice - price1) / maxPrice) * 30
    score2 += ((maxPrice - price2) / maxPrice) * 30

    // Rating score (higher is better, max 25 points)
    score1 += (rating1 / 5) * 25
    score2 += (rating2 / 5) * 25

    // Reviews count score (more reviews = more reliable, max 20 points)
    const maxReviews = Math.max(reviews1, reviews2)
    if (maxReviews > 0) {
      score1 += (reviews1 / maxReviews) * 20
      score2 += (reviews2 / maxReviews) * 20
    }

    // Feature analysis (basic keyword matching, max 25 points)
    const premiumKeywords = ["premium", "pro", "active noise", "cancellation", "prime", "assured"]
    const featureScore1 = premiumKeywords.filter((keyword) => product1.features.toLowerCase().includes(keyword)).length
    const featureScore2 = premiumKeywords.filter((keyword) => product2.features.toLowerCase().includes(keyword)).length

    score1 += (featureScore1 / premiumKeywords.length) * 25
    score2 += (featureScore2 / premiumKeywords.length) * 25

    // Determine winner based on scores
    if (score1 > score2) {
      winner = "Product 1"
      const priceDiff = (((price2 - price1) / price1) * 100).toFixed(1)
      const ratingDiff = (rating1 - rating2).toFixed(1)

      if (price1 < price2 && rating1 >= rating2) {
        reason = `Better value with ${priceDiff}% lower price and ${ratingDiff} higher rating`
      } else if (rating1 > rating2) {
        reason = `Higher customer satisfaction with ${ratingDiff} better rating`
      } else {
        reason = `Better overall value considering price, rating, and features`
      }

      pros = [
        price1 < price2 ? `${priceDiff}% cheaper than Product 2` : "Competitive pricing",
        rating1 > rating2 ? `Higher rating (${rating1}/5 vs ${rating2}/5)` : "Good customer rating",
        reviews1 > reviews2 ? `More customer reviews (${reviews1.toLocaleString()})` : "Reliable customer feedback",
        "Better feature set for the price",
      ]

      cons = [
        price1 > price2 ? "More expensive than Product 2" : "May have limited availability",
        rating1 < rating2 ? "Lower customer rating" : "Fewer premium features",
        "May not be the absolute cheapest option",
      ]
    } else {
      winner = "Product 2"
      const priceDiff = (((price1 - price2) / price2) * 100).toFixed(1)
      const ratingDiff = (rating2 - rating1).toFixed(1)

      if (price2 < price1 && rating2 >= rating1) {
        reason = `Better value with ${priceDiff}% lower price and ${ratingDiff} higher rating`
      } else if (rating2 > rating1) {
        reason = `Higher customer satisfaction with ${ratingDiff} better rating`
      } else {
        reason = `Better overall value considering price, rating, and features`
      }

      pros = [
        price2 < price1 ? `${priceDiff}% cheaper than Product 1` : "Competitive pricing",
        rating2 > rating1 ? `Higher rating (${rating2}/5 vs ${rating1}/5)` : "Good customer rating",
        reviews2 > reviews1 ? `More customer reviews (${reviews2.toLocaleString()})` : "Reliable customer feedback",
        "Better feature set for the price",
      ]

      cons = [
        price2 > price1 ? "More expensive than Product 1" : "May have limited availability",
        rating2 < rating1 ? "Lower customer rating" : "Fewer premium features",
        "May not be the absolute cheapest option",
      ]
    }

    const comparison = {
      winner,
      reason,
      pros: pros.slice(0, 4), // Limit to 4 pros
      cons: cons.slice(0, 3), // Limit to 3 cons
      scores: {
        product1: Math.round(score1),
        product2: Math.round(score2),
      },
    }

    console.log(`✅ Comparison analysis completed. Winner: ${winner}`)
    return comparison
  } catch (error) {
    console.error("❌ Error comparing products:", error.message)
    return {
      winner: "Unable to determine",
      reason: "Error occurred during comparison analysis",
      pros: ["Both products have their unique advantages"],
      cons: ["Unable to provide detailed comparison due to analysis error"],
      scores: { product1: 0, product2: 0 },
    }
  }
}
