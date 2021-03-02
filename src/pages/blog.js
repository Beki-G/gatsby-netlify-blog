import React from "react"

import BlogRoll from "../components/BlogRoll"
import Navbar from "../components/Navbar"

const BlogIndexPage = () => {
  return (
    
    <React.Fragment >
      <Navbar />
      <h1 className="mx-auto w-3/5 text-3xl tracking-wide font-semibold py-4">Latest Posts</h1>
      <section className="w-3/5 mx-auto">
        <div className="content">
          <BlogRoll />
        </div>
      </section>
    </React.Fragment>
  )
}

export default BlogIndexPage
