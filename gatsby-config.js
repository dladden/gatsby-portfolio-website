/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,

    // Strapi Plugin provided by Gatsby called: gatsby-source-strapi
    // apiURL must be pointed to where the strapi application is siting to alow the access to data
    //
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 100, // Defaults to 100
        collectionTypes: [`experiences`, `projects`],
        singleTypes: [`about-page`, `footer`],
        loginData: {
          identifiers: "",
          password: "",
        },
      },
    },
  ],
}
