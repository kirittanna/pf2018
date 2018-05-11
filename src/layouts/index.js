import React from 'react'
import Link from 'gatsby-link'
import { connect } from 'react-redux'
import { navResponsive } from '../state/actions'
import { siteMetadata } from '../../gatsby-config'

// import 'grommet/grommet.min.css'
import '../../theme/dist/grommet.css'
import styles from '../css/app.css'
require('prismjs/themes/prism-solarizedlight.css')

import App from 'grommet/components/App'
import Anchor from 'grommet/components/Anchor'
import Article from 'grommet/components/Article'
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Footer from 'grommet/components/Footer'
import Menu from 'grommet/components/Menu'
import Paragraph from 'grommet/components/Paragraph'
import Header from 'grommet/components/Header'
import Search from 'grommet/components/Search'
import Split from 'grommet/components/Split'

import DownloadIcon from 'grommet/components/icons/base/Download'
import MoneyIcon from 'grommet/components/icons/base/Money'

import Navigation from '../components/Navigation'
import NavControl from '../components/Navigation/NavControl'

class Template extends React.Component {
  _onSearchChange = event => {
    this.props.dispatch(searchSuggestions(event.target.value))
  }

  _onSearchSelect = pseudoEvent => {
    const suggestion = pseudoEvent.suggestion.suggestion
    this.props.dispatch(selectIndex('/' + suggestion.category, suggestion.uri))
  }

  _onResponsive = responsive => {
    this.props.dispatch(navResponsive(responsive))
  }

  render() {
    const {
      location,
      children,
      nav: { active: navActive, enabled: navEnabled, responsive },
    } = this.props

    let header
    const includeNav = navActive && navEnabled
    const priority = includeNav && 'single' === responsive ? 'left' : 'right'

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
        <Split
          priority={priority}
          flex="right"
          onResponsive={this._onResponsive}
        >
          {includeNav && <Navigation />}
          <Article pad={{ vertical: 'none' }}>
            <Header
              direction="row"
              justify="between"
              size="large"
              pad={{ horizontal: 'medium', between: 'small' }}
            >
              <NavControl showTitle={true} title="Processing.org" />
              <Search
                ref="search"
                inline={true}
                responsive={false}
                fill={true}
                size="medium"
                placeHolder="Search"
                defaultValue="Search..."
                onDOMChange={this._onSearchChange}
                onSelect={this._onSearchSelect}
                suggestions={null}
              />
              <Button
                path="/downloads"
                label="Download"
                icon={<DownloadIcon />}
                accent={true}
              />
              <Button
                path="/donate"
                label="Donate"
                icon={<MoneyIcon />}
                accent={true}
              />
              <Menu
                label="Other Sites"
                size="small"
                dropAlign={{ right: 'right', top: 'bottom' }}
              >
                <Anchor
                  href="https://processingfoundation.org/"
                  target="_blank"
                >
                  Processing Foundation
                </Anchor>
                <Anchor href="https://p5js.org/" target="_blank">
                  p5js
                </Anchor>
                <Anchor href="https://processing.py/" target="_blank">
                  Processing.py
                </Anchor>
                <Anchor href="http://android.processing.org/" target="_blank">
                  Processing for Android
                </Anchor>
              </Menu>
            </Header>

            <Box
              pad="medium"
              size="full"
              margin={{ horizontal: 'small', vertical: 'none' }}
            >
              {children()}
            </Box>
            <Footer
              align="center"
              colorIndex="grey-3"
              direction="row"
              pad="small"
              primary={true}
              responsive={true}
              size="medium"
            >
              Processing was initiated by Ben Fry and Casey Reas. It is
              developed by a small team of volunteers. © Info
            </Footer>
          </Article>
        </Split>
      </App>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
})

const mapStateToProps = ({ nav }) => ({
  nav,
})

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
  nav: React.PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(Template)
