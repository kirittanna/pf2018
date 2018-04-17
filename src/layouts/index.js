import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'

import 'grommet/grommet.min.css'
import styles from '../css/app.css'

import App from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Footer from 'grommet/components/Footer'
import Paragraph from 'grommet/components/Paragraph'
import Navi from '../components/Navi'

import SocialTwitter from 'grommet/components/icons/base/SocialTwitter'
import SocialFacebook from 'grommet/components/icons/base/SocialFacebook'
import SocialMedium from 'grommet/components/icons/base/SocialMedium'
import SocialGithub from 'grommet/components/icons/base/SocialGithub'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    if (location.pathname === rootPath) {
      header = null
    } else {
      header = null
    }
    return (
      <App centered={false}>
        <Navi title={siteMetadata.title} />
        <Box align="center">
          <Box pad="large" align="center" size={{ width: { max: 'xxlarge' } }}>
            {children()}
          </Box>
        </Box>
        <Footer
          align="center"
          colorIndex="grey-3"
          direction="row"
          justify="center"
          primary={true}
          responsive={true}
          size="medium"
        >
          <a
            className={styles.socialIcon}
            href="https://twitter.com/processingOrg"
            target="_blank"
          >
            <SocialTwitter />
          </a>
          <a
            className={styles.socialIcon}
            href="https://www.facebook.com/page.processing"
            target="_blank"
          >
            <SocialFacebook />
          </a>
          <a
            className={styles.socialIcon}
            href="https://medium.com/@ProcessingOrg"
            target="_blank"
          >
            <SocialMedium />
          </a>
          <a
            className={styles.socialIcon}
            href="https://github.com/processing"
            target="_blank"
          >
            <SocialGithub />
          </a>
        </Footer>
      </App>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
