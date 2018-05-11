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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-snippet',
            options: {
              classPrefix: 'language-',
              // Example code links are relative to this dir.
              directory: `${__dirname}/public/assets/`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              aliases: {
                pde: 'processing',
              },
            },
          },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/public/assets/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // {
    //   resolve: `gatsby-source-twitter`,
    //   options: {
    //     q: `@kirittanna`,
    //     credentials: {
    //       consumer_key: 'ZDJtw9tgvNWwzx83Y9aw',
    //       consumer_secret: 'iEVPPpNvZoG0go69EFl8lc1MAFyNVOPHqtNjCJJfM',
    //       bearer_token: '16705401-V7iE7FXYuX2FimXjQ1X5STlDZvEdy9Vlzo5CsSKU4',
    //     },
    //     tweet_mode: 'extended',
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
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
