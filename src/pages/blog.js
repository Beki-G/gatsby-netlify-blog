import React from "react"

import BlogRoll from "../components/BlogRoll"

const BlogIndexPage = () => {
  return (
    <React.Fragment>
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
