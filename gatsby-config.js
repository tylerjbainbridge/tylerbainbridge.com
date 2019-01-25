module.exports = {
  siteMetadata: {
    title: 'Tyler Bainbridge',
    description: 'Portfolio',
    author: 'Tyler Bainbridge',
  },
  plugins: [
    {
      resolve: `gatsby-remark-prettier`,
      options: {
        // Look for local .prettierrc file.
        // The same as `prettier.resolveConfig(process.cwd())`
        usePrettierrc: true,
        // Overwrite prettier options, check out https://prettier.io/docs/en/options.html
        prettierOptions: {
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 90,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/me_1.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Aleo', 'IBM Plex Mono', 'Staatliches'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
