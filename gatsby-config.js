module.exports = {
  siteMetadata: {
    title: `eoinfarrell.dev`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    keywords: ["tech", "blog", "boop"],
    author: `@eoinfarrell`,
    siteUrl: 'https://eoinfarrell.dev/',
    siteImage: 'name-of-open-graphy-image.jpg', // pop an image in the static folder to use it as og:image
    config: {
      twitter: 'eoinfarrell', // no need to include the @
      github: 'eoinfarrell239',
      linkedin: 'eoinfarrell'
    },
  },
  plugins: [
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve:`gatsby-source-cloudinary`,
      options:{
        cloudName: 'eoinfarrell',
        apiKey: '482726426563678',
        apiSecret: 'SO6Ujg7pVh2eIi0kKb00DUo-OII',
        // resourceType: `image`,
        // type: `type Value`,
        maxResults: `500`,
        tags:`2019`
        // prefix: ``
      },
    },
    'react-image-gallery'
  ],
}
