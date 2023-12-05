/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Big Profit`,
    description: `Big Profit`,
    author: `Negmat I`,
    phone: `8-800-511-81-77`,
    email: `bigprofit7788@gmail.com`,
    telegram: `#`,
    youtube: `#`,
    instagram: `#`,
    whatsapp: `#`
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Big Profit`,
        short_name: `Big Profit`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`,
        icons: [
          {
            src: `src/images/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Roboto Condensed`,
            file: `https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `e169cec3ff4b80932bb5d983e12901`,
        environment: `main`,
        previewMode: false,
        disableLiveReload: false,
        pageSize: 500,
      },
    },
  ],
}
