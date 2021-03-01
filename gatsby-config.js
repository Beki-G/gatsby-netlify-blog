// const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

// require("dotenv").config({
//   path: `.env.${activeEnv}`,
// })
require("dotenv").config()

module.exports = {
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'uploads',
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/static/assets`,
    //     name: 'assets',
    //   },
    // },
    {
      resolve:`gatsby-source-filesystem`,
      options: {
        name:`images`,
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          
          {
            resolve:`gatsby-remark-images`, 
            options: {
              maxWidth: 200,
            },
            
        },
        `gatsby-plugin-netlify-cms-paths`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-postcss`
  ],
}
