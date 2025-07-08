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























"use client"

import { useState } from "react"
import { LinkIcon, ContrastIcon as VersusIcon, TrendingUpIcon, CheckCircleIcon, XCircleIcon } from "lucide-react"

const Compare = () => {
  const [urls, setUrls] = useState({ url1: "", url2: "" })
  const [comparison, setComparison] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e) => {
    setUrls({
      ...urls,
      [e.target.name]: e.target.value,
    })
  }

  const handleCompare = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const token = localStorage.getItem("token")
      const response = await fetch("http://localhost:5000/api/compare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(urls),
      })

      const data = await response.json()

      if (response.ok) {
        setComparison(data)
      } else {
        setError(data.message || "Comparison failed")
      }
    } catch (error) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Product Comparison</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Enter two product URLs from any e-commerce website to compare them intelligently
          </p>
        </div>

        {/* Comparison Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleCompare} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-end">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product 1 URL</label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="url"
                    name="url1"
                    placeholder="https://example.com/product1"
                    value={urls.url1}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="hidden md:flex justify-center items-center pb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full">
                  <VersusIcon className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product 2 URL</label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="url"
                    name="url2"
                    placeholder="https://example.com/product2"
                    value={urls.url2}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">
                {error}
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
            {/* Products Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">Product 1</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Name:</span>
                    <span className="text-gray-900 dark:text-white font-semibold">{comparison.product1.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Price:</span>
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                      {comparison.product1.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Rating:</span>
                    <span className="text-yellow-500 font-semibold">{comparison.product1.rating}</span>
                  </div>
                  <div className="py-3">
                    <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Features:</span>
                    <p className="text-gray-600 dark:text-gray-400">{comparison.product1.features}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6 text-center">Product 2</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Name:</span>
                    <span className="text-gray-900 dark:text-white font-semibold">{comparison.product2.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Price:</span>
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                      {comparison.product2.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Rating:</span>
                    <span className="text-yellow-500 font-semibold">{comparison.product2.rating}</span>
                  </div>
                  <div className="py-3">
                    <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">Features:</span>
                    <p className="text-gray-600 dark:text-gray-400">{comparison.product2.features}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendation */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Our Recommendation</h3>
                <div className="bg-white/20 rounded-xl p-6">
                  <p className="text-2xl font-bold mb-2">Winner: {comparison.recommendation.winner}</p>
                  <p className="text-lg opacity-90">{comparison.recommendation.reason}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircleIcon className="w-6 h-6 mr-2" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {comparison.recommendation.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-300" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <XCircleIcon className="w-6 h-6 mr-2" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {comparison.recommendation.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <XCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-red-300" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Compare
