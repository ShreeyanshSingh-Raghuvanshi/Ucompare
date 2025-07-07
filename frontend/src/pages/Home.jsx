"use client"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "./Home.css"

const Home = () => {
  const { user } = useAuth()

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Ucompare, {user?.name}!</h1>
        <p className="hero-subtitle">Compare products from different e-commerce websites and make informed decisions</p>

        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Smart Comparison</h3>
            <p>Compare products from any e-commerce website with our intelligent analysis</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Expert Recommendations</h3>
            <p>Get personalized recommendations based on price, features, and reviews</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Quick Results</h3>
            <p>Get instant comparison results and make decisions faster</p>
          </div>
        </div>

        <Link to="/compare" className="cta-button">
          Start Comparing Products
        </Link>
      </div>

      <div className="stats-section">
        <div className="stat-item">
          <h3>10,000+</h3>
          <p>Products Compared</p>
        </div>
        <div className="stat-item">
          <h3>5,000+</h3>
          <p>Happy Users</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>E-commerce Sites</p>
        </div>
      </div>
    </div>
  )
}

export default Home
