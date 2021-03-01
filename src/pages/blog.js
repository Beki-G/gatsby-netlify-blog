import React from "react"

import BlogRoll from "../components/BlogRoll"
import Navbar from "../components/Navbar"

const BlogIndexPage = () => {
  return (
    
    <React.Fragment>
      <Navbar />
      <h1>Latest Posts</h1>
      <section>
        <div className="content">
          <BlogRoll />
        </div>
      </section>
    </React.Fragment>
  )
}

export default BlogIndexPage
