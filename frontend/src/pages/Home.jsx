// "use client"
// import { Link } from "react-router-dom"
// import { useAuth } from "../context/AuthContext"
// import "./Home.css"

// const Home = () => {
//   const { user } = useAuth()

//   return (
//     <div className="home-container">
//       <div className="hero-section">
//         <h1>Welcome to Ucompare, {user?.name}!</h1>
//         <p className="hero-subtitle">Compare products from different e-commerce websites and make informed decisions</p>

//         <div className="feature-cards">
//           <div className="feature-card">
//             <div className="feature-icon">🔍</div>
//             <h3>Smart Comparison</h3>
//             <p>Compare products from any e-commerce website with our intelligent analysis</p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">💡</div>
//             <h3>Expert Recommendations</h3>
//             <p>Get personalized recommendations based on price, features, and reviews</p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">⚡</div>
//             <h3>Quick Results</h3>
//             <p>Get instant comparison results and make decisions faster</p>
//           </div>
//         </div>

//         <Link to="/compare" className="cta-button">
//           Start Comparing Products
//         </Link>
//       </div>

//       <div className="stats-section">
//         <div className="stat-item">
//           <h3>10,000+</h3>
//           <p>Products Compared</p>
//         </div>
//         <div className="stat-item">
//           <h3>5,000+</h3>
//           <p>Happy Users</p>
//         </div>
//         <div className="stat-item">
//           <h3>50+</h3>
//           <p>E-commerce Sites</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home






















// "use client"

// import { Link } from "react-router-dom"
// import { useAuth } from "../context/AuthContext"
// import { SearchIcon, TrendingUpIcon, ZapIcon, UsersIcon, ShoppingCartIcon, StarIcon } from "lucide-react"

// const Home = () => {
//   const { user } = useAuth()

//   const features = [
//     {
//       icon: <SearchIcon className="w-8 h-8" />,
//       title: "Smart Comparison",
//       description: "Compare products from any e-commerce website with our intelligent analysis system",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: <TrendingUpIcon className="w-8 h-8" />,
//       title: "Expert Recommendations",
//       description: "Get personalized recommendations based on price, features, and customer reviews",
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: <ZapIcon className="w-8 h-8" />,
//       title: "Quick Results",
//       description: "Get instant comparison results and make informed purchasing decisions faster",
//       color: "from-green-500 to-emerald-500",
//     },
//   ]

//   const stats = [
//     { icon: <ShoppingCartIcon className="w-8 h-8" />, number: "10,000+", label: "Products Compared" },
//     { icon: <UsersIcon className="w-8 h-8" />, number: "5,000+", label: "Happy Users" },
//     { icon: <StarIcon className="w-8 h-8" />, number: "50+", label: "E-commerce Sites" },
//   ]

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="text-center">
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//               Welcome back,{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 {user?.name}!
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
//               Compare products from different e-commerce websites and make informed decisions with our intelligent
//               analysis platform
//             </p>
//             <Link
//               to="/compare"
//               className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
//             >
//               <SearchIcon className="w-6 h-6 mr-2" />
//               Start Comparing Products
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-20 bg-white dark:bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Ucompare?</h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300">
//               Powerful features to help you make the best purchasing decisions
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600"
//               >
//                 <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center text-white">
//                 <div className="inline-flex p-4 rounded-full bg-white/20 mb-4">{stat.icon}</div>
//                 <div className="text-4xl font-bold mb-2">{stat.number}</div>
//                 <div className="text-xl opacity-90">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="py-20 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Start Comparing?</h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
//             Join thousands of smart shoppers who use Ucompare to make better purchasing decisions
//           </p>
//           <Link
//             to="/compare"
//             className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
//           >
//             Compare Products Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home
















"use client"

import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { SearchIcon, TrendingUpIcon, ZapIcon, UsersIcon, ShoppingCartIcon, StarIcon } from "lucide-react"

const Home = () => {
  const { user } = useAuth()

  const features = [
    {
      icon: <SearchIcon className="w-8 h-8" />,
      title: "Smart Comparison",
      description: "Compare products from any e-commerce website with our intelligent analysis system",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUpIcon className="w-8 h-8" />,
      title: "Expert Recommendations",
      description: "Get personalized recommendations based on price, features, and customer reviews",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <ZapIcon className="w-8 h-8" />,
      title: "Quick Results",
      description: "Get instant comparison results and make informed purchasing decisions faster",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const stats = [
    { icon: <ShoppingCartIcon className="w-8 h-8" />, number: "10,000+", label: "Products Compared" },
    { icon: <UsersIcon className="w-8 h-8" />, number: "5,000+", label: "Happy Users" },
    { icon: <StarIcon className="w-8 h-8" />, number: "50+", label: "E-commerce Sites" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome back,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {user?.name}!
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Compare products from different e-commerce websites and make informed decisions with our intelligent
              analysis platform
            </p>
            <Link
              to="/compare"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <SearchIcon className="w-6 h-6 mr-2" />
              Start Comparing Products
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Ucompare?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Powerful features to help you make the best purchasing decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="inline-flex p-4 rounded-full bg-white/20 mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Start Comparing?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Compare 2-5 similar products intelligently and make better purchasing decisions
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Supported Categories:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-gray-600 dark:text-gray-400">📱 Smartphones</div>
              <div className="text-gray-600 dark:text-gray-400">💻 Laptops</div>
              <div className="text-gray-600 dark:text-gray-400">🎧 Headphones</div>
              <div className="text-gray-600 dark:text-gray-400">📺 Televisions</div>
              <div className="text-gray-600 dark:text-gray-400">❄️ Air Conditioners</div>
              <div className="text-gray-600 dark:text-gray-400">🧊 Refrigerators</div>
              <div className="text-gray-600 dark:text-gray-400">🧺 Washing Machines</div>
              <div className="text-gray-600 dark:text-gray-400">📷 Cameras</div>
            </div>
          </div>
          <Link
            to="/compare"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Compare Products Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
