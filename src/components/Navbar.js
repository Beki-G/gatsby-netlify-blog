import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [navBg, setNavBg] = useState({bg: "transparent"})

  useEffect(() => {
    const url = typeof window !== 'undefined' ? window.location.href: ""

    if(url.includes("blog") || url.includes("projects")) setNavBg({bg:"transparent"})
    else setNavBg({bg:"white"})

  }, [])

  return (
    <div className="contianer mx-auto p-5 ">
      <nav className="flex justify-end">
        <Link className={`px-2 mx-1 text-lg font-medium rounded-md bg-${navBg.bg}`} to="/">Home</Link>
        <Link className={`px-2 mx-1 text-lg font-medium rounded-md bg-${navBg.bg}`} to="/projects">Projects</Link>
        <Link className={`px-2 mx-1 text-lg font-medium rounded-md bg-${navBg.bg}`} to="/blog">Blog</Link>
      </nav>
    </div>
  )
}

export default Navbar
