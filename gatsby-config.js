module.exports = {
  siteMetadata: {
    title: 'tyler bainbridge',
    description:
      'full stack software engineer living in boston (soon to be nyc)',
    url: 'https://www.tylerbainbridge.com',
    image: '/src/images/smiley.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@tjbainbridge',
    author: 'tyler bainbridge',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-exclude',
      options: { paths: ['/old/**'] },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        isResettingCSS: true,
        isUsingColorMode: false,
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
        name: `Tyler Bainbridge`,
        start_url: `/`,
        background_color: `#fff`,
        icon: 'src/images/smiley.jpg',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-68674418-2',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
