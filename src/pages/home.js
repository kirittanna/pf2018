import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="" />
        {Object.keys(this.props).join(', ')}
      </div>
    )
  }
}

export default Home
