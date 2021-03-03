import React from "react"
import CardGrid from "../components/CardGrid.js"
import Footer from "../components/Footer.js"
import Hero from "../components/Hero/Hero.js"
import Profile from "../components/Profile.js"
// import { Link } from "gatsby"
// import Navbar from "../components/Navbar"

export default () => {
  return (
    <div className="bg-lgCyan">

      <Hero />
      <Profile />
      <CardGrid />
      <Footer />
    </div>
  )
}
