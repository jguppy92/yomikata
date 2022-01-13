import { Link } from 'react-router-dom'
import React from 'react'


function Navbar() {
  return (
    <>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              読
            </Link>
            <Link to="joyo" className="navbar-item">
              Jōyō Kanji
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar