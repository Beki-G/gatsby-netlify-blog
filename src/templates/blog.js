import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  console.log('markdownRemark: ', markdownRemark)
  return (
    <div>
      <Navbar />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 className="text-3xl text-center">{frontmatter.title}</h1>
          <h2 className="text-xl text-center">{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
