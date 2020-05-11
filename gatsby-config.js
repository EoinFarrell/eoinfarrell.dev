require('dotenv').config();

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
      resolve: `@piducancore/gatsby-source-cloudinary-metadata`,
      options: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        max_results: 500, // optional, default: 10s
        prefix: `Europe Cycle 2019`, // optional
        resourceType: `image`,
        type: `upload`,
      },
    },
    'react-image-gallery'
    // 'gatsby-source-strava'
    // {
    //   resolve: "gatsby-source-strava-activities",
    //   options: {
    //     // This is the "Access Token" from:
    //     // https://www.strava.com/settings/api
    //     authToken: process.env.GATSBY_SOURCE_STRAVA_TOKEN
    //   }
    // }
  ],
}
