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
      resolve: `gatsby-source-twitter`,
      options: {
        q: `@processingOrg`,
        count: 5,
        credentials: {
          consumer_key: 'cOZsubLVAMN59HXtzAhpgLvHO',
          consumer_secret: 'jC6dpuZ84dJLHFqtVY4aoqVuNG9gdbNYouqlUiJFnp3cRG1ZHg',
          bearer_token:
            'AAAAAAAAAAAAAAAAAAAAAAf26AAAAAAA8HB4M75us%2FysAYucOonFiZbOJeQ%3DJB90KfZLEb72stffB0CeqO31tshjw4dXOOP5MeFZmG3UPMVPOb',
        },
        tweet_mode: 'compat',
      },
    },
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer 6df0f9dec940f0a06d6aa37f98046eea1c06f6d3`,
        },
        queries: [
          `{
            repository(owner: "kirittanna", name: "pf2018") {
              issues(last: 5, states: OPEN) {
                edges {
                  node {
                    id
                    author {
                      url
                    }
                    title
                    url
                  }
                }
              }
            }
          }`,
        ],
      },
    },
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
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
            },
          },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `code`,
        path: `${__dirname}/public/code/`,
      },
    },
    {
      resolve: `gatsby-transformer-code`,
      options: {
        name: `code`,
        extensions: ['pde', 'js'],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-twitter`,
    {
      resolve: `@andrew-codes/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: ['title', 'path', 'body'],
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            path: node => node.frontmatter.path,
            body: node => node.html,
          },
        },
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
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
