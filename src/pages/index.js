import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class Home extends React.Component {
  render() {
    const siteMetadata = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <div>
        <Helmet title="" />
        {Object.keys(this.props).join(', ')}
      </div>
    )
  }
}

Home.propTypes = {
  route: React.PropTypes.object,
}

export default Home

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
        description
        title
        twitter
        url
      }
    }
  }
`
