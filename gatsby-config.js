module.exports = {
  siteMetadata: {
    author: '',
    description: '',
    title: 'Processing',
    twitter: 'processingOrg',
    facebook: 'processingOrg',
    github: 'processingOrg',
    medium: 'processingOrg',
    url: '',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      /*options: {
        // One convention is to place your Netlify CMS customization code in a
        // `src/cms` directory.
        modulePath: `${__dirname}/src/cms/cms.js`,
      },*/
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-embed-video',
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
