// "use client"

// import { useState } from "react"
// import "./Compare.css"

// const Compare = () => {
//   const [urls, setUrls] = useState({ url1: "", url2: "" })
//   const [comparison, setComparison] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")

//   const handleInputChange = (e) => {
//     setUrls({
//       ...urls,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleCompare = async (e) => {
//     e.preventDefault()
//     setError("")
//     setLoading(true)

//     try {
//       const token = localStorage.getItem("token")
//       const response = await fetch("http://localhost:5000/api/compare", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(urls),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         setComparison(data)
//       } else {
//         setError(data.message || "Comparison failed")
//       }
//     } catch (error) {
//       setError("Network error. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="compare-container">
//       <div className="compare-header">
//         <h1>Product Comparison</h1>
//         <p>Enter two product URLs from any e-commerce website to compare them</p>
//       </div>

//       <form onSubmit={handleCompare} className="compare-form">
//         <div className="url-inputs">
//           <div className="input-group">
//             <label>Product 1 URL</label>
//             <input
//               type="url"
//               name="url1"
//               placeholder="https://example.com/product1"
//               value={urls.url1}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className="vs-divider">VS</div>

//           <div className="input-group">
//             <label>Product 2 URL</label>
//             <input
//               type="url"
//               name="url2"
//               placeholder="https://example.com/product2"
//               value={urls.url2}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//         </div>

//         {error && <div className="error-message">{error}</div>}

//         <button type="submit" className="compare-button" disabled={loading}>
//           {loading ? "Comparing..." : "Compare Products"}
//         </button>
//       </form>

//       {comparison && (
//         <div className="comparison-results">
//           <h2>Comparison Results</h2>

//           <div className="products-grid">
//             <div className="product-card">
//               <h3>Product 1</h3>
//               <div className="product-details">
//                 <p>
//                   <strong>Name:</strong> {comparison.product1.name}
//                 </p>
//                 <p>
//                   <strong>Price:</strong> {comparison.product1.price}
//                 </p>
//                 <p>
//                   <strong>Rating:</strong> {comparison.product1.rating}
//                 </p>
//                 <p>
//                   <strong>Features:</strong> {comparison.product1.features}
//                 </p>
//               </div>
//             </div>

//             <div className="product-card">
//               <h3>Product 2</h3>
//               <div className="product-details">
//                 <p>
//                   <strong>Name:</strong> {comparison.product2.name}
//                 </p>
//                 <p>
//                   <strong>Price:</strong> {comparison.product2.price}
//                 </p>
//                 <p>
//                   <strong>Rating:</strong> {comparison.product2.rating}
//                 </p>
//                 <p>
//                   <strong>Features:</strong> {comparison.product2.features}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="recommendation">
//             <h3>Our Recommendation</h3>
//             <div className="recommendation-content">
//               <p>
//                 <strong>Winner:</strong> {comparison.recommendation.winner}
//               </p>
//               <p>
//                 <strong>Reason:</strong> {comparison.recommendation.reason}
//               </p>
//               <div className="pros-cons">
//                 <div className="pros">
//                   <h4>Pros:</h4>
//                   <ul>
//                     {comparison.recommendation.pros.map((pro, index) => (
//                       <li key={index}>{pro}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="cons">
//                   <h4>Cons:</h4>
//                   <ul>
//                     {comparison.recommendation.cons.map((con, index) => (
//                       <li key={index}>{con}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Compare























// "use client"

// import { useState } from "react"
// import { LinkIcon, ContrastIcon as VersusIcon, TrendingUpIcon, CheckCircleIcon, XCircleIcon } from "lucide-react"

// const Compare = () => {
//   const [urls, setUrls] = useState({ url1: "", url2: "" })
//   const [comparison, setComparison] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")

//   const handleInputChange = (e) => {
//     setUrls({
//       ...urls,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleCompare = async (e) => {
//     e.preventDefault()
//     setError("")
//     setLoading(true)

//     try {
//       const token = localStorage.getItem("token")
//       const response = await fetch("http://localhost:5000/api/compare", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(urls),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         setComparison(data)
//       } else {
//         setError(data.message || "Comparison failed")
//       }
//     } catch (error) {
//       setError("Network error. Please check your connection and try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Product Comparison</h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300">
//             Enter two product URLs from any e-commerce website to compare them intelligently
//           </p>
//         </div>

//         {/* Comparison Form */}
//         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
//           <form onSubmit={handleCompare} className="space-y-8">
//             <div className="grid md:grid-cols-2 gap-8 items-end">
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product 1 URL</label>
//                 <div className="relative">
//                   <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="url"
//                     name="url1"
//                     placeholder="https://example.com/product1"
//                     value={urls.url1}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full pl-10 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
//                   />
//                 </div>
//               </div>

//               <div className="hidden md:flex justify-center items-center pb-4">
//                 <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full">
//                   <VersusIcon className="w-6 h-6" />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product 2 URL</label>
//                 <div className="relative">
//                   <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="url"
//                     name="url2"
//                     placeholder="https://example.com/product2"
//                     value={urls.url2}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full pl-10 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
//                   />
//                 </div>
//               </div>
//             </div>

//             {error && (
//               <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">
//                 {error}
//               </div>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
//             >
//               {loading ? (
//                 <div className="flex items-center">
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
//                   Analyzing Products...
//                 </div>
//               ) : (
//                 <div className="flex items-center">
//                   <TrendingUpIcon className="w-5 h-5 mr-2" />
//                   Compare Products
//                 </div>
//               )}
//             </button>
//           </form>
//         </div>

//         {/* Comparison Results */}
//         {comparison && (
//           <div className="space-y-8">
//             {/* Products Grid */}
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
//                 <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">Product 1</h3>
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
//                     <span className="font-medium text-gray-700 dark:text-gray-300">Name:</span>
//                     <span className="text-gray-900 dark:text-white font-semibold">{comparison.product1.name}</span>
//                   </div>
//                   <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
//                     <span className="font-medium text-gray-700 dark:text-gray-300">Price:</span>
//                     <span className="text-green-600 dark:text-green-400 font-bold text-lg">
//                       {comparison.product1.price}
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
//                     <span className="font-medium text-gray-700 dark:text-gray-300">Rating:</span>
//                     <span className="text-yellow-500 font-semibold">{comparison.product1.rating}</span>
//                   </div>
//                   <div className="py-3">
//                     <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Features:</span>
//                     <p className="text-gray-600 dark:text-gray-400">{comparison.product1.features}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
//                 <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6 text-center">Product 2</h3>
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
//                     <span className="font-medium text-gray-700 dark:text-gray-300">Name:</span>
//                     <span className="text-gray-900 dark:text-white font-semibold">{comparison.product2.name}</span>
//                   </div>
//                   <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
//                     <span className="font-medium text-gray-700 dark:text-gray-300">Price:</span>
//                     <span className="text-green-600 dark:text-green-400 font-bold text-lg">
//                       {comparison.product2.price}
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
//                     <span className="font-medium text-gray-700 dark:text-gray-300">Rating:</span>
//                     <span className="text-yellow-500 font-semibold">{comparison.product2.rating}</span>
//                   </div>
//                   <div className="py-3">
//                     <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Features:</span>
//                     <p className="text-gray-600 dark:text-gray-400">{comparison.product2.features}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Recommendation */}
//             <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
//               <div className="text-center mb-8">
//                 <h3 className="text-3xl font-bold mb-4">Our Recommendation</h3>
//                 <div className="bg-white/20 rounded-xl p-6">
//                   <p className="text-2xl font-bold mb-2">Winner: {comparison.recommendation.winner}</p>
//                   <p className="text-lg opacity-90">{comparison.recommendation.reason}</p>
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8">
//                 <div className="bg-white/10 rounded-xl p-6">
//                   <h4 className="text-xl font-bold mb-4 flex items-center">
//                     <CheckCircleIcon className="w-6 h-6 mr-2" />
//                     Pros
//                   </h4>
//                   <ul className="space-y-2">
//                     {comparison.recommendation.pros.map((pro, index) => (
//                       <li key={index} className="flex items-start">
//                         <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-300" />
//                         <span>{pro}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="bg-white/10 rounded-xl p-6">
//                   <h4 className="text-xl font-bold mb-4 flex items-center">
//                     <XCircleIcon className="w-6 h-6 mr-2" />
//                     Cons
//                   </h4>
//                   <ul className="space-y-2">
//                     {comparison.recommendation.cons.map((con, index) => (
//                       <li key={index} className="flex items-start">
//                         <XCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-red-300" />
//                         <span>{con}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Compare



















// // pages/compare.jsx

// "use client";

// import { useState } from "react";
// import { LinkIcon, ContrastIcon as VersusIcon, TrendingUpIcon, CheckCircleIcon, XCircleIcon, InfoIcon } from "lucide-react";

// const Compare = () => {
//   const [urls, setUrls] = useState({ url1: "", url2: "" });
//   const [comparisonResult, setComparisonResult] = useState(null); // Renamed to avoid conflict with `comparison` object structure
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     setUrls({
//       ...urls,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleCompare = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     setComparisonResult(null); // Clear previous results

//     try {
//       // In a real app, you'd fetch the token securely. Mocking it here for example.
//       const token = localStorage.getItem("token"); 
      
//       // Make sure your backend route is set up to handle POST to /api/compare
//       // Example backend (Node.js/Express):
//       // app.post('/api/compare', async (req, res) => {
//       //   const { url1, url2 } = req.body;
//       //   try {
//       //     const product1 = await scrapeProductData(url1);
//       //     const product2 = await scrapeProductData(url2);
//       //     const result = compareProducts(product1, product2);
//       //     res.json(result);
//       //   } catch (error) {
//       //     res.status(500).json({ message: error.message });
//       //   }
//       // });

//       const response = await fetch("http://localhost:5000/api/compare", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // If authentication is required
//         },
//         body: JSON.stringify(urls),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setComparisonResult(data);
//         if (data.comparisonStatus === "NOT_SIMILAR" || data.comparisonStatus === "ERROR") {
//           setError(data.message);
//         }
//       } else {
//         setError(data.message || "Comparison failed: An unknown error occurred on the server.");
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//       setError("Network error. Please check your connection or the server status and try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 dark:text-blue-400 mb-4">Product Comparison Engine</h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300">
//             Enter two product URLs from any e-commerce website to get an intelligent, feature-based comparison.
//           </p>
//         </div>

//         {/* Comparison Form */}
//         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
//           <form onSubmit={handleCompare} className="space-y-8">
//             <div className="grid md:grid-cols-2 gap-8 items-end">
//               <div className="space-y-2">
//                 <label htmlFor="url1" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product 1 URL</label>
//                 <div className="relative">
//                   <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="url"
//                     id="url1"
//                     name="url1"
//                     placeholder="e.g., https://example.com/headphones-premium"
//                     value={urls.url1}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full pl-10 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-base"
//                   />
//                 </div>
//               </div>

//               <div className="hidden md:flex justify-center items-center pb-4">
//                 <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full">
//                   <VersusIcon className="w-6 h-6" />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="url2" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product 2 URL</label>
//                 <div className="relative">
//                   <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="url"
//                     id="url2"
//                     name="url2"
//                     placeholder="e.g., https://example.com/headphones-budget"
//                     value={urls.url2}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full pl-10 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-base"
//                   />
//                 </div>
//               </div>
//             </div>

//             {error && (
//               <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg flex items-center">
//                 <InfoIcon className="w-5 h-5 mr-2" />
//                 {error}
//               </div>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
//             >
//               {loading ? (
//                 <div className="flex items-center">
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
//                   Analyzing Products...
//                 </div>
//               ) : (
//                 <div className="flex items-center">
//                   <TrendingUpIcon className="w-5 h-5 mr-2" />
//                   Compare Products
//                 </div>
//               )}
//             </button>
//           </form>
//         </div>

//         {/* Comparison Results */}        {comparisonResult && comparisonResult.comparisonStatus === "SUCCESS" && (
//           <div className="space-y-8">
//             {/* Products Grid */}
//             <div className="grid md:grid-cols-2 gap-8">
//               <ProductCard product={comparisonResult.product1} title="Product 1" color="blue" />
//               <ProductCard product={comparisonResult.product2} title="Product 2" color="purple" />
//             </div>

//             {/* Recommendation */}
//             <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
//               <div className="text-center mb-8">
//                 <h3 className="text-3xl font-bold mb-4">Our Recommendation</h3>
//                 <div className="bg-white/20 rounded-xl p-6">
//                   <p className="text-2xl font-bold mb-2">Winner: {comparisonResult.recommendation.winner}</p>
//                   <p className="text-lg opacity-90">{comparisonResult.recommendation.reason}</p>
//                   {comparisonResult.scores && (
//                     <p className="text-sm mt-2 opacity-80">
//                       Overall Scores: {comparisonResult.product1.name}: {comparisonResult.scores.product1} | {comparisonResult.product2.name}: {comparisonResult.scores.product2}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8">
//                 <div className="bg-white/10 rounded-xl p-6">
//                   <h4 className="text-xl font-bold mb-4 flex items-center">
//                     <CheckCircleIcon className="w-6 h-6 mr-2" />
//                     Pros
//                   </h4>
//                   <ul className="space-y-2">
//                     {comparisonResult.recommendation.pros.map((pro, index) => (
//                       <li key={index} className="flex items-start">
//                         <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-300" />
//                         <span>{pro}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="bg-white/10 rounded-xl p-6">
//                   <h4 className="text-xl font-bold mb-4 flex items-center">
//                     <XCircleIcon className="w-6 h-6 mr-2" />
//                     Cons
//                   </h4>
//                   <ul className="space-y-2">
//                     {comparisonResult.recommendation.cons.map((con, index) => (
//                       <li key={index} className="flex items-start">
//                         <XCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-red-300" />
//                         <span>{con}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Reusable Product Card Component
// const ProductCard = ({ product, title, color }) => {
//   if (!product) return null; // Handle case where product data might be missing

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
//       <h3 className={`text-2xl font-bold text-${color}-600 dark:text-${color}-400 mb-6 text-center`}>{title}</h3>      <div className="space-y-4">
//         {product.image && (
//             <div className="flex justify-center mb-4">
//                 {/* In a real app, ensure image paths are correct or use a CDN */}
//                 <img src={product.image} alt={product.name} className="w-32 h-32 object-contain rounded-lg" />
//             </div>
//         )}
//         <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
//           <span className="font-medium text-gray-700 dark:text-gray-300">Name:</span>
//           <span className="text-gray-900 dark:text-white font-semibold text-right">{product.name}</span>
//         </div>
//         <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
//           <span className="font-medium text-gray-700 dark:text-gray-300">Category:</span>
//           <span className="text-gray-900 dark:text-white font-semibold">{product.category}</span>
//         </div>
//         <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
//           <span className="font-medium text-gray-700 dark:text-gray-300">Price:</span>
//           <span className="text-green-600 dark:text-green-400 font-bold text-lg">{product.price}</span>
//         </div>
//         <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
//           <span className="font-medium text-gray-700 dark:text-gray-300">Rating:</span>
//           <span className="text-yellow-500 font-semibold">{product.rating}</span>
//         </div>
//         <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
//           <span className="font-medium text-gray-700 dark:text-gray-300">Reviews:</span>
//           <span className="text-gray-900 dark:text-white">{product.reviews.toLocaleString()}</span>
//         </div>
//         <div className="py-3">
//           <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Features:</span>
//           <p className="text-gray-600 dark:text-gray-400 text-sm">{product.features}</p>
//         </div>
//         <div className="py-3">
//           <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Source:</span>
//           <a href={product.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm truncate block">{product.url}</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Compare;




















"use client"

import { useState } from "react"
import {
  LinkIcon,
  TrendingUpIcon,
  CheckCircleIcon,
  PlusIcon,
  MinusIcon,
  StarIcon,
  DollarSignIcon,
  AlertTriangleIcon,
  InfoIcon,
  TrophyIcon,
  TargetIcon,
} from "lucide-react"

const Compare = () => {
  const [urls, setUrls] = useState(["", ""])
  const [comparison, setComparison] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (index, value) => {
    const newUrls = [...urls]
    newUrls[index] = value
    setUrls(newUrls)
  }

  const addUrlField = () => {
    if (urls.length < 5) {
      setUrls([...urls, ""])
    }
  }

  const removeUrlField = (index) => {
    if (urls.length > 2) {
      const newUrls = urls.filter((_, i) => i !== index)
      setUrls(newUrls)
    }
  }

  const handleCompare = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const validUrls = urls.filter((url) => url.trim() !== "")

      if (validUrls.length < 2) {
        setError("Please provide at least 2 product URLs")
        return
      }

      const token = localStorage.getItem("token")
      const response = await fetch("http://localhost:5000/api/compare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ urls: validUrls }),
      })

      const data = await response.json()

      if (response.ok) {
        setComparison(data.comparison)
      } else {
        setError(data.message || "Comparison failed")
      }
    } catch (error) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600 dark:text-green-400"
    if (score >= 60) return "text-yellow-600 dark:text-yellow-400"
    return "text-red-600 dark:text-red-400"
  }

  const getScoreBgColor = (score) => {
    if (score >= 80) return "bg-green-100 dark:bg-green-900/20"
    if (score >= 60) return "bg-yellow-100 dark:bg-yellow-900/20"
    return "bg-red-100 dark:bg-red-900/20"
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Smart Product Comparison
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Compare 2-5 similar products from any e-commerce website intelligently
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-start space-x-2">
              <InfoIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Note:</strong> Only products from the same category can be compared (e.g., smartphones with
                smartphones, laptops with laptops)
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleCompare} className="space-y-8">
            <div className="space-y-6">
              {urls.map((url, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Product {index + 1} URL
                    </label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="url"
                        placeholder={`https://example.com/product${index + 1}`}
                        value={url}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        required={index < 2}
                        className="w-full pl-10 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {index >= 2 && (
                    <button
                      type="button"
                      onClick={() => removeUrlField(index)}
                      className="mt-8 p-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <MinusIcon className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}

              {urls.length < 5 && (
                <button
                  type="button"
                  onClick={addUrlField}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  <PlusIcon className="w-5 h-5" />
                  <span>Add another product (max 5)</span>
                </button>
              )}
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg flex items-start space-x-2">
                <AlertTriangleIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Comparison Failed</p>
                  <p className="text-sm mt-1">{error}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Analyzing Products...
                </div>
              ) : (
                <div className="flex items-center">
                  <TrendingUpIcon className="w-5 h-5 mr-2" />
                  Compare Products
                </div>
              )}
            </button>
          </form>
        </div>

        {/* Comparison Results */}
        {comparison && (
          <div className="space-y-8">
            {/* Winner Banner */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <TrophyIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Winner</h2>
                <p className="text-xl opacity-90">{comparison.insights.recommendation.winner}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <TargetIcon className="w-5 h-5 mr-2" />
                    Why This Product Wins
                  </h3>
                  <p className="text-white/90">{comparison.insights.recommendation.reason}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <span className="text-sm opacity-75">Confidence Level:</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {comparison.insights.recommendation.confidence}
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Key Strengths</h3>
                  <ul className="space-y-2">
                    {comparison.insights.strengths.map((strength, index) => (
                      <li key={index} className="flex items-center text-white/90">
                        <CheckCircleIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Category Info */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Category: {comparison.category}
              </h3>
              {comparison.insights.categorySpecific.length > 0 && (
                <div className="text-blue-800 dark:text-blue-200">
                  <p className="text-sm mb-2">Category-specific insights:</p>
                  <ul className="text-sm space-y-1">
                    {comparison.insights.categorySpecific.map((insight, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Products Comparison Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {comparison.products.map((product, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 transition-all duration-300 ${
                    index === 0 ? "border-green-500 shadow-green-500/20" : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {/* Product Header */}
                  <div className={`p-6 ${index === 0 ? "bg-green-50 dark:bg-green-900/20" : ""} rounded-t-2xl`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">Product {product.index}</span>
                      {index === 0 && (
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Winner</div>
                      )}
                    </div>

                    {/* Score */}
                    <div className={`${getScoreBgColor(product.normalizedScore)} rounded-xl p-4 mb-4`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Score</span>
                        <span className={`text-2xl font-bold ${getScoreColor(product.normalizedScore)}`}>
                          {product.normalizedScore}/100
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <DollarSignIcon className="w-5 h-5 text-green-600 mx-auto mb-1" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">Price</p>
                        <p className="font-bold text-green-600 dark:text-green-400">{product.price}</p>
                      </div>
                      <div className="text-center">
                        <StarIcon className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">Rating</p>
                        <p className="font-bold text-yellow-600 dark:text-yellow-400">{product.rating}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Features</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{product.features}</p>
                    </div>

                    {/* Specifications */}
                    {product.specifications && Object.keys(product.specifications).length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Specifications</p>
                        <div className="space-y-1">
                          {Object.entries(product.specifications)
                            .slice(0, 4)
                            .map(([key, value]) => (
                              <div key={key} className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">{key}:</span>
                                <span className="text-gray-900 dark:text-white font-medium">{value}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-center text-sm pt-4 border-t border-gray-200 dark:border-gray-600">
                      <span className="text-gray-600 dark:text-gray-400">
                        {product.reviews?.toLocaleString()} reviews
                      </span>
                      <span
                        className={`font-medium ${
                          product.availability === "In Stock"
                            ? "text-green-600 dark:text-green-400"
                            : "text-orange-600 dark:text-orange-400"
                        }`}
                      >
                        {product.availability}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Insights */}
            {comparison.insights.considerations.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Other Considerations</h3>
                <div className="space-y-2">
                  {comparison.insights.considerations.map((consideration, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <InfoIcon className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{consideration}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Compare
