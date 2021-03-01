// const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

// require("dotenv").config({
//   path: `.env.${activeEnv}`,
// })
require('dotenv').config();

module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`
  ],
}
