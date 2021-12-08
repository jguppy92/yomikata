import { Link } from 'react-router-dom'
import React from 'react'


function Navbar() {
  return (
    <>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              🏠
            </Link>
            <p className="navbar-item">
              🍽 Categories
            </p>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar