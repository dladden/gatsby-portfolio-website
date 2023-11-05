/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Providing sites meta data that describes the site and its tittle for better engine search */
  /* Additionaly adding a prop which displays the page name first with the titleTemplate and more set up for the card*/
  siteMetadata: {
    title: `Denys Ladden Portfolio`,
    description: `Denys Ladden. Web Developer. This is my Portfolio Website developed with Gatsby and Strapi architecture. `,
    titleTemplate: `%s | Denys`,
    url: `https://portfolio-temp-deni.netlify.app`,
    twitterUsername: `denysladden`,
    image: `/cover.png`,
  },

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
    //Gatsby react helmet works in a build cycle and build the meta tags
    `gatsby-plugin-react-helmet`,

    // Strapi Plugin provided by Gatsby called: gatsby-source-strapi
    // apiURL must be pointed to where the strapi application is siting to alow the access to data
    //
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://127.0.0.1:1337`,
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
