"use client"

import { useState } from "react"
import "./Compare.css"

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
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="compare-container">
      <div className="compare-header">
        <h1>Product Comparison</h1>
        <p>Enter two product URLs from any e-commerce website to compare them</p>
      </div>

      <form onSubmit={handleCompare} className="compare-form">
        <div className="url-inputs">
          <div className="input-group">
            <label>Product 1 URL</label>
            <input
              type="url"
              name="url1"
              placeholder="https://example.com/product1"
              value={urls.url1}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="vs-divider">VS</div>

          <div className="input-group">
            <label>Product 2 URL</label>
            <input
              type="url"
              name="url2"
              placeholder="https://example.com/product2"
              value={urls.url2}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="compare-button" disabled={loading}>
          {loading ? "Comparing..." : "Compare Products"}
        </button>
      </form>

      {comparison && (
        <div className="comparison-results">
          <h2>Comparison Results</h2>

          <div className="products-grid">
            <div className="product-card">
              <h3>Product 1</h3>
              <div className="product-details">
                <p>
                  <strong>Name:</strong> {comparison.product1.name}
                </p>
                <p>
                  <strong>Price:</strong> {comparison.product1.price}
                </p>
                <p>
                  <strong>Rating:</strong> {comparison.product1.rating}
                </p>
                <p>
                  <strong>Features:</strong> {comparison.product1.features}
                </p>
              </div>
            </div>

            <div className="product-card">
              <h3>Product 2</h3>
              <div className="product-details">
                <p>
                  <strong>Name:</strong> {comparison.product2.name}
                </p>
                <p>
                  <strong>Price:</strong> {comparison.product2.price}
                </p>
                <p>
                  <strong>Rating:</strong> {comparison.product2.rating}
                </p>
                <p>
                  <strong>Features:</strong> {comparison.product2.features}
                </p>
              </div>
            </div>
          </div>

          <div className="recommendation">
            <h3>Our Recommendation</h3>
            <div className="recommendation-content">
              <p>
                <strong>Winner:</strong> {comparison.recommendation.winner}
              </p>
              <p>
                <strong>Reason:</strong> {comparison.recommendation.reason}
              </p>
              <div className="pros-cons">
                <div className="pros">
                  <h4>Pros:</h4>
                  <ul>
                    {comparison.recommendation.pros.map((pro, index) => (
                      <li key={index}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="cons">
                  <h4>Cons:</h4>
                  <ul>
                    {comparison.recommendation.cons.map((con, index) => (
                      <li key={index}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Compare
