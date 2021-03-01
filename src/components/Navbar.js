import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="contianer mx-auto bg-purple-300 p-5">
      <nav className="flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/blog">View Blog</Link>
      </nav>
    </div>
  )
}

export default Navbar
