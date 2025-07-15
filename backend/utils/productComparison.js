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






















// // Enhanced mock product data scraper
// export const scrapeProductData = async (url) => {
//   try {
//     console.log(`🔍 Scraping product data from: ${url}`)

//     // Simulate network delay
//     await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

//     const domain = new URL(url).hostname.toLowerCase()

//     // Enhanced mock data based on different e-commerce sites
//     const mockProducts = {
//       "amazon.com": {
//         name: "Premium Wireless Headphones - Amazon",
//         price: "$299.99",
//         rating: "4.5/5",
//         features: "Active Noise Cancellation, 30-hour battery, Premium sound quality, Fast shipping with Prime",
//         reviews: 15420,
//         availability: "In Stock",
//         seller: "Amazon",
//       },
//       "amazon.in": {
//         name: "Premium Wireless Headphones - Amazon India",
//         price: "₹24,999",
//         rating: "4.3/5",
//         features: "Active Noise Cancellation, 28-hour battery, Good sound quality, Amazon Prime delivery",
//         reviews: 8750,
//         availability: "In Stock",
//         seller: "Amazon India",
//       },
//       "flipkart.com": {
//         name: "Wireless Headphones Pro - Flipkart",
//         price: "₹22,999",
//         rating: "4.2/5",
//         features: "Noise Cancellation, 25-hour battery, Local warranty, Easy returns, Flipkart Assured",
//         reviews: 6890,
//         availability: "Limited Stock",
//         seller: "Flipkart",
//       },
//       "ebay.com": {
//         name: "Wireless Headphones - eBay",
//         price: "$279.99",
//         rating: "4.0/5",
//         features: "Good sound quality, 24-hour battery, Competitive price, Global shipping, Auction available",
//         reviews: 3240,
//         availability: "Available",
//         seller: "eBay Seller",
//       },
//       "myntra.com": {
//         name: "Fashion Wireless Headphones - Myntra",
//         price: "₹19,999",
//         rating: "4.1/5",
//         features: "Stylish design, 20-hour battery, Fashion-forward, Easy returns, Myntra insider benefits",
//         reviews: 2150,
//         availability: "In Stock",
//         seller: "Myntra",
//       },
//       "snapdeal.com": {
//         name: "Budget Wireless Headphones - Snapdeal",
//         price: "₹15,999",
//         rating: "3.8/5",
//         features: "Affordable price, 18-hour battery, Basic features, Cash on delivery available",
//         reviews: 1890,
//         availability: "In Stock",
//         seller: "Snapdeal",
//       },
//     }

//     // Determine which mock data to return based on URL
//     let productData

//     if (domain.includes("amazon.com")) {
//       productData = mockProducts["amazon.com"]
//     } else if (domain.includes("amazon.in")) {
//       productData = mockProducts["amazon.in"]
//     } else if (domain.includes("flipkart")) {
//       productData = mockProducts["flipkart.com"]
//     } else if (domain.includes("ebay")) {
//       productData = mockProducts["ebay.com"]
//     } else if (domain.includes("myntra")) {
//       productData = mockProducts["myntra.com"]
//     } else if (domain.includes("snapdeal")) {
//       productData = mockProducts["snapdeal.com"]
//     } else {
//       // Generic mock data for other sites
//       productData = {
//         name: `Generic Product - ${domain}`,
//         price: "$199.99",
//         rating: "4.0/5",
//         features: "Standard features, Good quality, Reliable seller, Standard warranty",
//         reviews: 1500,
//         availability: "In Stock",
//         seller: "Generic Store",
//       }
//     }

//     console.log(`✅ Product data scraped successfully from ${domain}`)
//     return productData
//   } catch (error) {
//     console.error("❌ Error scraping product data:", error.message)
//     throw new Error(`Failed to scrape product data from ${url}`)
//   }
// }

// // Enhanced product comparison with more intelligent analysis
// export const compareProducts = (product1, product2) => {
//   try {
//     console.log("🤖 Analyzing products for comparison...")

//     // Extract numeric values for comparison
//     const price1 = Number.parseFloat(product1.price.replace(/[^0-9.]/g, ""))
//     const price2 = Number.parseFloat(product2.price.replace(/[^0-9.]/g, ""))

//     const rating1 = Number.parseFloat(product1.rating.split("/")[0])
//     const rating2 = Number.parseFloat(product2.rating.split("/")[0])

//     const reviews1 = product1.reviews || 0
//     const reviews2 = product2.reviews || 0

//     let winner = ""
//     let reason = ""
//     let pros = []
//     let cons = []
//     let score1 = 0
//     let score2 = 0

//     // Scoring algorithm
//     // Price score (lower is better, max 30 points)
//     const maxPrice = Math.max(price1, price2)
//     score1 += ((maxPrice - price1) / maxPrice) * 30
//     score2 += ((maxPrice - price2) / maxPrice) * 30

//     // Rating score (higher is better, max 25 points)
//     score1 += (rating1 / 5) * 25
//     score2 += (rating2 / 5) * 25

//     // Reviews count score (more reviews = more reliable, max 20 points)
//     const maxReviews = Math.max(reviews1, reviews2)
//     if (maxReviews > 0) {
//       score1 += (reviews1 / maxReviews) * 20
//       score2 += (reviews2 / maxReviews) * 20
//     }

//     // Feature analysis (basic keyword matching, max 25 points)
//     const premiumKeywords = ["premium", "pro", "active noise", "cancellation", "prime", "assured"]
//     const featureScore1 = premiumKeywords.filter((keyword) => product1.features.toLowerCase().includes(keyword)).length
//     const featureScore2 = premiumKeywords.filter((keyword) => product2.features.toLowerCase().includes(keyword)).length

//     score1 += (featureScore1 / premiumKeywords.length) * 25
//     score2 += (featureScore2 / premiumKeywords.length) * 25

//     // Determine winner based on scores
//     if (score1 > score2) {
//       winner = "Product 1"
//       const priceDiff = (((price2 - price1) / price1) * 100).toFixed(1)
//       const ratingDiff = (rating1 - rating2).toFixed(1)

//       if (price1 < price2 && rating1 >= rating2) {
//         reason = `Better value with ${priceDiff}% lower price and ${ratingDiff} higher rating`
//       } else if (rating1 > rating2) {
//         reason = `Higher customer satisfaction with ${ratingDiff} better rating`
//       } else {
//         reason = `Better overall value considering price, rating, and features`
//       }

//       pros = [
//         price1 < price2 ? `${priceDiff}% cheaper than Product 2` : "Competitive pricing",
//         rating1 > rating2 ? `Higher rating (${rating1}/5 vs ${rating2}/5)` : "Good customer rating",
//         reviews1 > reviews2 ? `More customer reviews (${reviews1.toLocaleString()})` : "Reliable customer feedback",
//         "Better feature set for the price",
//       ]

//       cons = [
//         price1 > price2 ? "More expensive than Product 2" : "May have limited availability",
//         rating1 < rating2 ? "Lower customer rating" : "Fewer premium features",
//         "May not be the absolute cheapest option",
//       ]
//     } else {
//       winner = "Product 2"
//       const priceDiff = (((price1 - price2) / price2) * 100).toFixed(1)
//       const ratingDiff = (rating2 - rating1).toFixed(1)

//       if (price2 < price1 && rating2 >= rating1) {
//         reason = `Better value with ${priceDiff}% lower price and ${ratingDiff} higher rating`
//       } else if (rating2 > rating1) {
//         reason = `Higher customer satisfaction with ${ratingDiff} better rating`
//       } else {
//         reason = `Better overall value considering price, rating, and features`
//       }

//       pros = [
//         price2 < price1 ? `${priceDiff}% cheaper than Product 1` : "Competitive pricing",
//         rating2 > rating1 ? `Higher rating (${rating2}/5 vs ${rating1}/5)` : "Good customer rating",
//         reviews2 > reviews1 ? `More customer reviews (${reviews2.toLocaleString()})` : "Reliable customer feedback",
//         "Better feature set for the price",
//       ]

//       cons = [
//         price2 > price1 ? "More expensive than Product 1" : "May have limited availability",
//         rating2 < rating1 ? "Lower customer rating" : "Fewer premium features",
//         "May not be the absolute cheapest option",
//       ]
//     }

//     const comparison = {
//       winner,
//       reason,
//       pros: pros.slice(0, 4), // Limit to 4 pros
//       cons: cons.slice(0, 3), // Limit to 3 cons
//       scores: {
//         product1: Math.round(score1),
//         product2: Math.round(score2),
//       },
//     }

//     console.log(`✅ Comparison analysis completed. Winner: ${winner}`)
//     return comparison
//   } catch (error) {
//     console.error("❌ Error comparing products:", error.message)
//     return {
//       winner: "Unable to determine",
//       reason: "Error occurred during comparison analysis",
//       pros: ["Both products have their unique advantages"],
//       cons: ["Unable to provide detailed comparison due to analysis error"],
//       scores: { product1: 0, product2: 0 },
//     }
//   }
// }



























// // utils/productComparison.js

// // Enhanced mock product data scraper
// export const scrapeProductData = async (url) => {
//   try {
//     console.log(`🔍 Scraping product data from: ${url}`);

//     // Simulate network delay
//     await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1500)); // Slightly faster delay

//     const domain = new URL(url).hostname.toLowerCase();
//     const path = new URL(url).pathname.toLowerCase();

//     // Enhanced mock data based on different e-commerce sites and product types
//     const mockProducts = {
//       // Headphones
//       "headphones": {
//         name: "Premium Wireless Headphones - Model X",
//         category: "Audio",
//         price: "$299.99",
//         rating: "4.5/5",
//         features: "Active Noise Cancellation, 30-hour battery, Hi-Res Audio, Bluetooth 5.2, Comfortable Over-Ear Design",
//         reviews: 15420,
//         availability: "In Stock",
//         seller: "TechGiant Store",
//         image: "/images/headphones1.jpg" // Placeholder for potential image
//       },
//       "headphones_budget": {
//         name: "Wireless Headphones - Model Y",
//         category: "Audio",
//         price: "$149.99",
//         rating: "4.0/5",
//         features: "Passive Noise Isolation, 20-hour battery, Good Bass, Bluetooth 5.0, On-Ear Design",
//         reviews: 8750,
//         availability: "In Stock",
//         seller: "BudgetGadget Store",
//         image: "/images/headphones2.jpg"
//       },
//       // Smartphones
//       "smartphone_premium": {
//         name: "Flagship Smartphone - Pro Max",
//         category: "Electronics",
//         price: "$999.00",
//         rating: "4.7/5",
//         features: "6.7-inch OLED, Triple Camera (108MP), 12GB RAM, 256GB Storage, 5G Connectivity, Fast Charging",
//         reviews: 22100,
//         availability: "In Stock",
//         seller: "MobileWorld Inc.",
//         image: "/images/smartphone1.jpg"
//       },
//       "smartphone_midrange": {
//         name: "Mid-Range Smartphone - Lite Edition",
//         category: "Electronics",
//         price: "$499.00",
//         rating: "4.2/5",
//         features: "6.5-inch LCD, Dual Camera (48MP), 6GB RAM, 128GB Storage, 4G LTE, All-Day Battery",
//         reviews: 9500,
//         availability: "Limited Stock",
//         seller: "GadgetHub",
//         image: "/images/smartphone2.jpg"
//       },
//       // Laptops
//       "laptop_ultrabook": {
//         name: "Ultra Thin Laptop - AirPro",
//         category: "Computers",
//         price: "$1299.00",
//         rating: "4.6/5",
//         features: "13-inch Retina Display, M2 Chip, 16GB RAM, 512GB SSD, 18-hour battery, macOS",
//         reviews: 11200,
//         availability: "In Stock",
//         seller: "Apple Store",
//         image: "/images/laptop1.jpg"
//       },
//       "laptop_gaming": {
//         name: "Gaming Laptop - Beast Edition",
//         category: "Computers",
//         price: "$1899.00",
//         rating: "4.4/5",
//         features: "15.6-inch 144Hz Display, Intel i9, RTX 3070, 32GB RAM, 1TB SSD, RGB Keyboard, Windows 11",
//         reviews: 7800,
//         availability: "Limited Stock",
//         seller: "GamingGear Pro",
//         image: "/images/laptop2.jpg"
//       },
//       // Televisions
//       "tv_oled": {
//         name: "55-inch OLED TV - VisionMaster",
//         category: "Home Entertainment",
//         price: "$1499.00",
//         rating: "4.8/5",
//         features: "4K UHD OLED, Dolby Vision/Atmos, Smart TV (WebOS), HDMI 2.1, Slim Design",
//         reviews: 6500,
//         availability: "In Stock",
//         seller: "Electronics Superstore",
//         image: "/images/tv1.jpg"
//       },
//       "tv_led": {
//         name: "50-inch LED Smart TV - BrightView",
//         category: "Home Entertainment",
//         price: "$699.00",
//         rating: "4.1/5",
//         features: "4K UHD LED, HDR10, Smart TV (Android TV), Multiple HDMI ports, Energy Efficient",
//         reviews: 4200,
//         availability: "In Stock",
//         seller: "BudgetElectronics",
//         image: "/images/tv2.jpg"
//       },
//     };

//     // Determine which mock data to return based on URL (simulating intelligent scraping)
//     let productData;

//     if (path.includes("headphones") || path.includes("audio")) {
//       productData = url.includes("premium") ? mockProducts["headphones"] : mockProducts["headphones_budget"];
//     } else if (path.includes("smartphone") || path.includes("mobile")) {
//       productData = url.includes("flagship") ? mockProducts["smartphone_premium"] : mockProducts["smartphone_midrange"];
//     } else if (path.includes("laptop") || path.includes("computer")) {
//       productData = url.includes("gaming") ? mockProducts["laptop_gaming"] : mockProducts["laptop_ultrabook"];
//     } else if (path.includes("tv") || path.includes("television")) {
//       productData = url.includes("oled") ? mockProducts["tv_oled"] : mockProducts["tv_led"];
//     } else {
//       // Default generic product if category cannot be inferred
//       productData = {
//         name: `Generic Product - ${domain}`,
//         category: "Miscellaneous", // Assign a default category
//         price: "$199.99",
//         rating: "4.0/5",
//         features: "Standard features, Good quality, Reliable seller, Standard warranty",
//         reviews: 1500,
//         availability: "In Stock",
//         seller: "Generic Store",
//         image: "/images/generic.jpg"
//       };
//     }

//     // Add a unique ID for each product for better tracking if needed
//     productData.id = Math.random().toString(36).substring(2, 9);
//     productData.url = url; // Include original URL

//     console.log(`✅ Product data scraped successfully from ${domain} for category: ${productData.category}`);
//     return productData;
//   } catch (error) {
//     console.error("❌ Error scraping product data:", error.message);
//     throw new Error(`Failed to scrape product data from ${url}`);
//   }
// };

// // Define category-specific comparison criteria
// const categoryCriteria = {
//   "Audio": {
//     features: ["noise cancellation", "battery", "bluetooth", "sound quality", "bass", "hi-res"],
//     featureWeights: { "noise cancellation": 1.5, "battery": 1.2, "hi-res": 1.3 },
//     description: "audio devices like headphones, earbuds, and speakers"
//   },
//   "Electronics": {
//     features: ["display", "camera", "ram", "storage", "processor", "battery", "5g", "fast charging"],
//     featureWeights: { "camera": 1.5, "display": 1.3, "ram": 1.2, "storage": 1.2 },
//     description: "smartphones, tablets, and other portable electronics"
//   },
//   "Computers": {
//     features: ["processor", "ram", "ssd", "gpu", "display", "battery", "operating system"],
//     featureWeights: { "processor": 1.5, "ram": 1.3, "gpu": 1.4, "ssd": 1.2 },
//     description: "laptops, desktops, and computer components"
//   },
//   "Home Entertainment": {    features: ["4k", "oled", "led", "hdr", "smart tv", "dolby", "hdmi"],
//     featureWeights: { "oled": 1.8, "4k": 1.2, "dolby": 1.1, "hdmi": 1.0 },
//     description: "televisions, soundbars, and home theater systems"
//   },
//   "Miscellaneous": { // Generic fallback
//     features: ["quality", "warranty", "features", "design"],
//     featureWeights: {},
//     description: "general products where specific features are less defined"
//   }
// };

// // Enhanced product comparison with more intelligent analysis and similarity check
// export const compareProducts = (product1, product2) => {
//   try {
//     console.log("🤖 Analyzing products for comparison...");

//     // --- Step 1: Similarity Check ---
//     if (!product1 || !product2) {
//       return {
//         comparisonStatus: "ERROR",
//         message: "One or both product data missing.",
//         product1: product1,
//         product2: product2,
//       };
//     }

//     if (product1.category !== product2.category) {
//       console.log(`❌ Products are not similar: ${product1.category} vs ${product2.category}`);
//       return {
//         comparisonStatus: "NOT_SIMILAR",
//         message: `These products are from different categories (${product1.category} vs ${product2.category}). Please compare similar items.`,
//         product1: product1,
//         product2: product2,
//       };
//     }

//     // Retrieve category-specific criteria
//     const category = product1.category;
//     const criteria = categoryCriteria[category] || categoryCriteria["Miscellaneous"];
//     const relevantFeatures = criteria.features;    const featureWeights = criteria.featureWeights;

//     // --- Step 2: Extract numeric values for comparison ---
//     const price1 = Number.parseFloat(product1.price.replace(/[^0-9.]/g, "")) || 0;
//     const price2 = Number.parseFloat(product2.price.replace(/[^0-9.]/g, "")) || 0;

//     const rating1 = Number.parseFloat(product1.rating.split("/")[0]) || 0;
//     const rating2 = Number.parseFloat(product2.rating.split("/")[0]) || 0;

//     const reviews1 = product1.reviews || 0;
//     const reviews2 = product2.reviews || 0;

//     let winner = "";
//     let reason = "";
//     let pros = [];
//     let cons = [];
//     let score1 = 0;
//     let score2 = 0;

//     // --- Step 3: Scoring algorithm ---
//     // Max points: Price (25), Rating (25), Reviews (20), Features (30) = 100 total

//     // Price score (lower is better, max 25 points)
//     if (price1 > 0 && price2 > 0) {
//       const maxPrice = Math.max(price1, price2);
//       score1 += ((maxPrice - price1) / maxPrice) * 25;
//       score2 += ((maxPrice - price2) / maxPrice) * 25;
//     } else if (price1 > 0) { // Only product 1 has price
//       score1 += 12.5; // Give some points if only one has a price
//     } else if (price2 > 0) { // Only product 2 has price
//       score2 += 12.5;
//     }


//     // Rating score (higher is better, max 25 points)
//     score1 += (rating1 / 5) * 25;
//     score2 += (rating2 / 5) * 25;

//     // Reviews count score (more reviews = more reliable, max 20 points)
//     const maxReviews = Math.max(reviews1, reviews2);
//     if (maxReviews > 0) {
//       score1 += (reviews1 / maxReviews) * 20;
//       score2 += (reviews2 / maxReviews) * 20;
//     }

//     // Feature analysis (category-specific keyword matching, max 30 points)
//     let rawFeatureScore1 = 0;
//     let rawFeatureScore2 = 0;
//     let maxPossibleFeatureScore = 0;

//     relevantFeatures.forEach((keyword) => {
//       const weight = featureWeights[keyword] || 1.0; // Default weight is 1
//       maxPossibleFeatureScore += weight; // Sum of all weights for normalization

//       if (product1.features.toLowerCase().includes(keyword)) {
//         rawFeatureScore1 += weight;
//       }
//       if (product2.features.toLowerCase().includes(keyword)) {
//         rawFeatureScore2 += weight;
//       }
//     });

//     if (maxPossibleFeatureScore > 0) {
//       score1 += (rawFeatureScore1 / maxPossibleFeatureScore) * 30;
//       score2 += (rawFeatureScore2 / maxPossibleFeatureScore) * 30;
//     }


//     // --- Step 4: Determine winner and generate detailed comparison points ---
//     const scoreDifference = score1 - score2;    const significantDifferenceThreshold = 5; // Points difference to declare a clear winner

//     if (Math.abs(scoreDifference) < significantDifferenceThreshold) {
//       winner = "It's a Tie!";
//       reason = "Both products are very similar in overall value and features. Your choice may come down to minor personal preferences or specific deals.";
//       pros = ["Both are strong contenders in their category."];
//       cons = ["No clear superior option, requiring personal decision."];
//     } else if (score1 > score2) {
//       winner = "Product 1";
//       const priceDiffPercent = price2 > 0 ? (((price2 - price1) / price2) * 100).toFixed(1) : "N/A";
//       const ratingDiff = (rating1 - rating2).toFixed(1);

//       if (price1 < price2 && rating1 >= rating2) {
//         reason = `Offers better value with a ${priceDiffPercent}% lower price and ${ratingDiff} higher rating.`;
//       } else if (rating1 > rating2 && rawFeatureScore1 >= rawFeatureScore2) {
//         reason = `Higher customer satisfaction and a stronger feature set.`;
//       } else {
//         reason = `Slightly better overall value considering price, rating, and features.`;
//       }

//       pros = [];
//       if (price1 < price2) pros.push(`Generally more affordable (approx. ${product1.price})`);
//       if (rating1 > rating2) pros.push(`Higher average customer rating (${rating1}/5)`);
//       if (reviews1 > reviews2) pros.push(`More customer reviews (${reviews1.toLocaleString()}), indicating broader acceptance.`);
//       if (rawFeatureScore1 > rawFeatureScore2) pros.push(`Richer feature set for the category.`);
//       if (product1.availability === "In Stock" && product2.availability !== "In Stock") pros.push("Better availability.");
//       if (pros.length === 0) pros.push("Strong overall performance in key metrics.");

//       cons = [];
//       if (price1 > price2) cons.push(`Potentially more expensive (${product1.price})`);
//       if (rating1 < rating2) cons.push(`Slightly lower customer rating (${rating1}/5)`);
//       if (reviews1 < reviews2) cons.push(`Fewer customer reviews.`);
//       if (rawFeatureScore1 < rawFeatureScore2) cons.push(`May lack some features found in Product 2.`);
//       if (product1.availability !== "In Stock" && product2.availability === "In Stock") cons.push("Limited or inconsistent availability.");
//       if (cons.length === 0) cons.push("No significant drawbacks compared to Product 2.");

//     } else { // score2 > score1
//       winner = "Product 2";
//       const priceDiffPercent = price1 > 0 ? (((price1 - price2) / price1) * 100).toFixed(1) : "N/A";
//       const ratingDiff = (rating2 - rating1).toFixed(1);

//       if (price2 < price1 && rating2 >= rating1) {
//         reason = `Offers better value with a ${priceDiffPercent}% lower price and ${ratingDiff} higher rating.`;
//       } else if (rating2 > rating1 && rawFeatureScore2 >= rawFeatureScore1) {
//         reason = `Higher customer satisfaction and a stronger feature set.`;
//       } else {
//         reason = `Slightly better overall value considering price, rating, and features.`;
//       }

//       pros = [];
//       if (price2 < price1) pros.push(`Generally more affordable (approx. ${product2.price})`);
//       if (rating2 > rating1) pros.push(`Higher average customer rating (${rating2}/5)`);
//       if (reviews2 > reviews1) pros.push(`More customer reviews (${reviews2.toLocaleString()}), indicating broader acceptance.`);
//       if (rawFeatureScore2 > rawFeatureScore1) pros.push(`Richer feature set for the category.`);
//       if (product2.availability === "In Stock" && product1.availability !== "In Stock") pros.push("Better availability.");
//       if (pros.length === 0) pros.push("Strong overall performance in key metrics.");

//       cons = [];
//       if (price2 > price1) cons.push(`Potentially more expensive (${product2.price})`);
//       if (rating2 < rating1) cons.push(`Slightly lower customer rating (${rating2}/5)`);
//       if (reviews2 < reviews1) cons.push(`Fewer customer reviews.`);
//       if (rawFeatureScore2 < rawFeatureScore1) cons.push(`May lack some features found in Product 1.`);
//       if (product2.availability !== "In Stock" && product1.availability === "In Stock") cons.push("Limited or inconsistent availability.");
//       if (cons.length === 0) cons.push("No significant drawbacks compared to Product 1.");
//     }

//     const comparison = {
//       comparisonStatus: "SUCCESS", // Indicate successful comparison
//       product1: product1, // Include full product data
//       product2: product2, // Include full product data
//       recommendation: {
//         winner,
//         reason,
//         pros: pros.slice(0, 4), // Limit to 4 pros
//         cons: cons.slice(0, 3), // Limit to 3 cons
//       },
//       scores: {
//         product1: Math.round(score1),
//         product2: Math.round(score2),
//         category: category,
//       },
//     };

//     console.log(`✅ Comparison analysis completed for ${category}. Winner: ${winner}`);
//     return comparison;
//   } catch (error) {
//     console.error("❌ Error comparing products:", error.message);
//     return {
//       comparisonStatus: "ERROR",      message: "An unexpected error occurred during comparison analysis.",
//       product1: product1,
//       product2: product2,
//       recommendation: {
//         winner: "Unable to determine",
//         reason: "Error occurred during comparison analysis",
//         pros: ["Both products have their unique advantages"],
//         cons: ["Unable to provide detailed comparison due to analysis error"],
//       },
//       scores: { product1: 0, product2: 0 },
//     };
//   }
// };




















// Enhanced product categories and detection
const PRODUCT_CATEGORIES = {
  smartphones: {
    keywords: [
      "iphone",
      "samsung galaxy",
      "oneplus",
      "pixel",
      "xiaomi",
      "oppo",
      "vivo",
      "realme",
      "mobile",
      "smartphone",
      "phone",
    ],
    specs: ["storage", "ram", "camera", "battery", "processor", "display", "os"],
    name: "Smartphones",
  },
  laptops: {
    keywords: ["laptop", "macbook", "thinkpad", "inspiron", "pavilion", "zenbook", "surface", "chromebook"],
    specs: ["processor", "ram", "storage", "graphics", "display", "battery", "os"],
    name: "Laptops",
  },
  headphones: {
    keywords: ["headphones", "earphones", "earbuds", "airpods", "beats", "sony", "bose", "audio"],
    specs: ["driver", "frequency", "impedance", "battery", "noise cancellation", "wireless"],
    name: "Headphones & Audio",
  },
  televisions: {
    keywords: ["tv", "television", "smart tv", "led", "oled", "qled", "android tv"],
    specs: ["screen size", "resolution", "hdr", "refresh rate", "smart features", "connectivity"],
    name: "Televisions",
  },
  airconditioners: {
    keywords: ["air conditioner", "ac", "split ac", "window ac", "inverter ac", "cooling"],
    specs: ["tonnage", "energy rating", "cooling capacity", "inverter", "filter", "warranty"],
    name: "Air Conditioners",
  },
  refrigerators: {
    keywords: ["refrigerator", "fridge", "double door", "single door", "side by side", "freezer"],
    specs: ["capacity", "energy rating", "cooling technology", "warranty", "frost free"],
    name: "Refrigerators",
  },
  washingmachines: {
    keywords: ["washing machine", "washer", "front load", "top load", "semi automatic", "fully automatic"],
    specs: ["capacity", "energy rating", "wash programs", "spin speed", "warranty"],
    name: "Washing Machines",
  },
  cameras: {
    keywords: ["camera", "dslr", "mirrorless", "canon", "nikon", "sony alpha", "gopro"],
    specs: ["megapixels", "sensor", "lens", "video recording", "battery", "connectivity"],
    name: "Cameras",
  },
}

// Enhanced product data scraper with category detection
export const scrapeProductData = async (url) => {
  try {
    console.log(`🔍 Scraping product data from: ${url}`)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500 + Math.random() * 2000))

    const domain = new URL(url).hostname.toLowerCase()

    // Detect product category from URL
    const category = detectProductCategory(url)

    if (!category) {
      throw new Error("Unable to detect product category from URL")
    }

    // Generate realistic mock data based on category and domain
    const productData = generateProductData(domain, category, url)

    console.log(`✅ Product data scraped successfully from ${domain} - Category: ${category.name}`)
    return productData
  } catch (error) {
    console.error("❌ Error scraping product data:", error.message)
    throw new Error(`Failed to scrape product data: ${error.message}`)
  }
}

// Detect product category from URL and content
const detectProductCategory = (url) => {
  const urlLower = url.toLowerCase()

  for (const [key, category] of Object.entries(PRODUCT_CATEGORIES)) {
    if (category.keywords.some((keyword) => urlLower.includes(keyword))) {
      return { ...category, id: key }
    }
  }

  return null
}

// Generate realistic product data based on category
const generateProductData = (domain, category, url) => {
  const mockData = {
    smartphones: {
      "amazon.com": {
        name: "iPhone 15 Pro Max 256GB",
        price: "$1,199.99",
        rating: "4.6/5",
        features: 'A17 Pro chip, 48MP camera system, 6.7" Super Retina XDR, Titanium design, Action Button',
        specifications: {
          Storage: "256GB",
          RAM: "8GB",
          Camera: "48MP Triple Camera",
          Battery: "4441 mAh",
          Display: '6.7" Super Retina XDR',
          Processor: "A17 Pro",
        },
        reviews: 15420,
        availability: "In Stock",
        seller: "Amazon",
        category: category.id,
      },
      "flipkart.com": {
        name: "Samsung Galaxy S24 Ultra 512GB",
        price: "₹1,29,999",
        rating: "4.4/5",
        features: 'Snapdragon 8 Gen 3, 200MP camera, 6.8" Dynamic AMOLED, S Pen included, AI features',
        specifications: {
          Storage: "512GB",
          RAM: "12GB",
          Camera: "200MP Quad Camera",
          Battery: "5000 mAh",
          Display: '6.8" Dynamic AMOLED',
          Processor: "Snapdragon 8 Gen 3",
        },
        reviews: 8750,
        availability: "In Stock",
        seller: "Flipkart",
        category: category.id,
      },
    },

    laptops: {
      "amazon.com": {
        name: 'MacBook Pro 14" M3 Pro',
        price: "$1,999.99",
        rating: "4.7/5",
        features: 'M3 Pro chip, 14" Liquid Retina XDR, 18GB RAM, 512GB SSD, 18-hour battery',
        specifications: {
          Processor: "Apple M3 Pro",
          RAM: "18GB",
          Storage: "512GB SSD",
          Display: '14" Liquid Retina XDR',
          Graphics: "Integrated GPU",
          Battery: "Up to 18 hours",
        },
        reviews: 12300,
        availability: "In Stock",
        seller: "Amazon",
        category: category.id,
      },
      "dell.com": {
        name: "Dell XPS 13 Plus",
        price: "$1,299.99",
        rating: "4.3/5",
        features: 'Intel Core i7-13700H, 13.4" OLED touch, 16GB RAM, 1TB SSD, Windows 11',
        specifications: {
          Processor: "Intel Core i7-13700H",
          RAM: "16GB",
          Storage: "1TB SSD",
          Display: '13.4" OLED Touch',
          Graphics: "Intel Iris Xe",
          Battery: "Up to 12 hours",
        },
        reviews: 6890,
        availability: "In Stock",
        seller: "Dell",
        category: category.id,
      },
    },

    headphones: {
      "amazon.com": {
        name: "Sony WH-1000XM5 Wireless",
        price: "$399.99",
        rating: "4.5/5",
        features: "Industry-leading noise canceling, 30-hour battery, V1 processor, Multipoint connection",
        specifications: {
          Driver: "30mm",
          Frequency: "4Hz-40kHz",
          Battery: "30 hours",
          "Noise Cancellation": "Active",
          Wireless: "Bluetooth 5.2",
          Weight: "250g",
        },
        reviews: 18500,
        availability: "In Stock",
        seller: "Amazon",
        category: category.id,
      },
      "apple.com": {
        name: "AirPods Pro (2nd gen)",
        price: "$249.99",
        rating: "4.4/5",
        features: "Active Noise Cancellation, Transparency mode, Spatial Audio, MagSafe charging",
        specifications: {
          Driver: "Custom",
          Battery: "6 hours + 24 with case",
          "Noise Cancellation": "Active",
          Wireless: "Bluetooth 5.3",
          "Water Resistance": "IPX4",
          Weight: "5.3g each",
        },
        reviews: 25600,
        availability: "In Stock",
        seller: "Apple",
        category: category.id,
      },
    },

    airconditioners: {
      "amazon.in": {
        name: "LG 1.5 Ton 5 Star Inverter AC",
        price: "₹45,999",
        rating: "4.3/5",
        features: "Dual Inverter, Copper condenser, 5-star energy rating, Wi-Fi enabled, Anti-viral protection",
        specifications: {
          Tonnage: "1.5 Ton",
          "Energy Rating": "5 Star",
          "Cooling Capacity": "5250W",
          Inverter: "Dual Inverter",
          Filter: "HD Filter with Anti-Virus",
          Warranty: "10 years on compressor",
        },
        reviews: 5420,
        availability: "In Stock",
        seller: "LG India",
        category: category.id,
      },
      "flipkart.com": {
        name: "Daikin 1.5 Ton 3 Star Inverter AC",
        price: "₹42,999",
        rating: "4.2/5",
        features: "Inverter technology, Copper coil, 3-star energy rating, Intelligent eye sensor",
        specifications: {
          Tonnage: "1.5 Ton",
          "Energy Rating": "3 Star",
          "Cooling Capacity": "5100W",
          Inverter: "Yes",
          Filter: "PM 2.5 Filter",
          Warranty: "5 years on compressor",
        },
        reviews: 3890,
        availability: "Limited Stock",
        seller: "Daikin",
        category: category.id,
      },
    },
  }

  // Get appropriate mock data based on category and domain
  const categoryData = mockData[category.id]
  if (!categoryData) {
    throw new Error(`No mock data available for category: ${category.name}`)
  }

  // Find best matching domain data
  let productData = null
  for (const [domain_key, data] of Object.entries(categoryData)) {
    if (domain.includes(domain_key.split(".")[0])) {
      productData = data
      break
    }
  }

  // If no specific domain match, use first available
  if (!productData) {
    productData = Object.values(categoryData)[0]
  }

  return {
    ...productData,
    url: url,
    scrapedAt: new Date().toISOString(),
  }
}

// Enhanced product comparison with category validation
export const compareProducts = (products) => {
  try {
    console.log(`🤖 Analyzing ${products.length} products for comparison...`)

    // Validate that all products are in the same category
    const categories = [...new Set(products.map((p) => p.category))]
    if (categories.length > 1) {
      throw new Error(
        `Cannot compare products from different categories: ${categories.map((c) => PRODUCT_CATEGORIES[c]?.name).join(", ")}`,
      )
    }

    const category = categories[0]
    const categoryInfo = PRODUCT_CATEGORIES[category]

    if (!categoryInfo) {
      throw new Error("Unknown product category")
    }

    // Calculate scores for each product
    const scoredProducts = products.map((product, index) => {
      const score = calculateProductScore(product, products, categoryInfo)
      return {
        ...product,
        index: index + 1,
        score: score,
        normalizedScore: Math.round(score),
      }
    })

    // Sort by score (highest first)
    scoredProducts.sort((a, b) => b.score - a.score)

    const winner = scoredProducts[0]
    const runners = scoredProducts.slice(1)

    // Generate comparison insights
    const comparison = generateComparisonInsights(winner, runners, categoryInfo)

    console.log(`✅ Comparison analysis completed. Winner: Product ${winner.index}`)
    return {
      category: categoryInfo.name,
      winner: winner,
      products: scoredProducts,
      insights: comparison,
      analysisDate: new Date().toISOString(),
    }
  } catch (error) {
    console.error("❌ Error comparing products:", error.message)
    throw error
  }
}

// Calculate comprehensive product score
const calculateProductScore = (product, allProducts, categoryInfo) => {
  let score = 0

  // Extract numeric values
  const price = Number.parseFloat(product.price.replace(/[^0-9.]/g, ""))
  const rating = Number.parseFloat(product.rating.split("/")[0])
  const reviews = product.reviews || 0

  // Price score (30 points) - lower price is better
  const prices = allProducts.map((p) => Number.parseFloat(p.price.replace(/[^0-9.]/g, "")))
  const maxPrice = Math.max(...prices)
  const minPrice = Math.min(...prices)
  if (maxPrice > minPrice) {
    score += ((maxPrice - price) / (maxPrice - minPrice)) * 30
  } else {
    score += 15 // If all prices are same
  }

  // Rating score (25 points)
  score += (rating / 5) * 25

  // Reviews credibility score (15 points)
  const maxReviews = Math.max(...allProducts.map((p) => p.reviews || 0))
  if (maxReviews > 0) {
    score += Math.min((reviews / maxReviews) * 15, 15)
  }

  // Feature richness score (20 points)
  const featureKeywords = ["pro", "max", "ultra", "premium", "advanced", "intelligent", "smart", "ai"]
  const featureCount = featureKeywords.filter((keyword) => product.features.toLowerCase().includes(keyword)).length
  score += Math.min((featureCount / featureKeywords.length) * 20, 20)

  // Specification completeness score (10 points)
  const specCount = Object.keys(product.specifications || {}).length
  const maxSpecs = Math.max(...allProducts.map((p) => Object.keys(p.specifications || {}).length))
  if (maxSpecs > 0) {
    score += (specCount / maxSpecs) * 10
  }

  return score
}

// Generate detailed comparison insights
const generateComparisonInsights = (winner, runners, categoryInfo) => {
  const insights = {
    recommendation: {
      winner: `Product ${winner.index}: ${winner.name}`,
      reason: generateWinnerReason(winner, runners),
      confidence: calculateConfidence(winner, runners),
    },
    strengths: generateStrengths(winner),
    considerations: generateConsiderations(runners),
    categorySpecific: generateCategorySpecificInsights(winner, runners, categoryInfo),
  }

  return insights
}

// Generate winner reason
const generateWinnerReason = (winner, runners) => {
  const reasons = []

  if (runners.length > 0) {
    const scoreDiff = winner.score - runners[0].score
    if (scoreDiff > 20) {
      reasons.push("significantly outperforms competitors")
    } else if (scoreDiff > 10) {
      reasons.push("clearly superior overall value")
    } else {
      reasons.push("slight edge in overall value")
    }
  }

  const rating = Number.parseFloat(winner.rating.split("/")[0])
  if (rating >= 4.5) {
    reasons.push("excellent customer satisfaction")
  } else if (rating >= 4.0) {
    reasons.push("good customer reviews")
  }

  return `This product offers ${reasons.join(" with ")}.`
}

// Calculate confidence level
const calculateConfidence = (winner, runners) => {
  if (runners.length === 0) return "N/A"

  const scoreDiff = winner.score - runners[0].score
  if (scoreDiff > 25) return "Very High"
  if (scoreDiff > 15) return "High"
  if (scoreDiff > 8) return "Medium"
  return "Low"
}

// Generate product strengths
const generateStrengths = (product) => {
  const strengths = []
  const rating = Number.parseFloat(product.rating.split("/")[0])
  const price = Number.parseFloat(product.price.replace(/[^0-9.]/g, ""))

  if (rating >= 4.5) strengths.push("Excellent customer rating")
  if (product.reviews > 10000) strengths.push("Highly reviewed and trusted")
  if (product.features.toLowerCase().includes("warranty")) strengths.push("Good warranty coverage")
  if (product.availability === "In Stock") strengths.push("Readily available")

  return strengths.slice(0, 4)
}

// Generate considerations for other products
const generateConsiderations = (runners) => {
  const considerations = []

  runners.forEach((product, index) => {
    const price = Number.parseFloat(product.price.replace(/[^0-9.]/g, ""))
    considerations.push(`Product ${product.index} offers alternative features at different price point`)
  })

  return considerations.slice(0, 3)
}

// Generate category-specific insights
const generateCategorySpecificInsights = (winner, runners, categoryInfo) => {
  const specs = winner.specifications || {}
  const insights = []

  // Category-specific analysis
  switch (categoryInfo.name) {
    case "Smartphones":
      if (specs.Camera) insights.push(`Superior camera: ${specs.Camera}`)
      if (specs.Battery) insights.push(`Battery life: ${specs.Battery}`)
      break
    case "Laptops":
      if (specs.Processor) insights.push(`Powerful processor: ${specs.Processor}`)
      if (specs.RAM) insights.push(`Memory: ${specs.RAM}`)
      break
    case "Headphones & Audio":
      if (specs["Noise Cancellation"]) insights.push(`Noise cancellation: ${specs["Noise Cancellation"]}`)
      if (specs.Battery) insights.push(`Battery life: ${specs.Battery}`)
      break
    case "Air Conditioners":
      if (specs["Energy Rating"]) insights.push(`Energy efficient: ${specs["Energy Rating"]}`)
      if (specs.Tonnage) insights.push(`Cooling capacity: ${specs.Tonnage}`)
      break
  }

  return insights
}

// Validate products can be compared
export const validateProductsForComparison = (products) => {
  if (products.length < 2) {
    throw new Error("At least 2 products are required for comparison")
  }

  if (products.length > 5) {
    throw new Error("Maximum 5 products can be compared at once")
  }

  const categories = [...new Set(products.map((p) => p.category))]
  if (categories.length > 1) {
    const categoryNames = categories.map((c) => PRODUCT_CATEGORIES[c]?.name || c)
    throw new Error(`Cannot compare products from different categories: ${categoryNames.join(", ")}`)
  }

  return true
}
