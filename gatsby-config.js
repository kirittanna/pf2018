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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      /*options: {
        // One convention is to place your Netlify CMS customization code in a
        // `src/cms` directory.
        modulePath: `${__dirname}/src/cms/cms.js`,
      },*/
    },
  ],
}
