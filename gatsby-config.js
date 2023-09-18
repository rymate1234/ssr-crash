/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const adapter = require("gatsby-adapter-netlify")

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: true,
  }),
}
