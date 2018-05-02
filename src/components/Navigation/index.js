import React, { Component } from 'react'
import get from 'lodash/get'
import { connect } from 'react-redux'
import MetisMenu from 'react-metismenu'

import Animate from 'grommet/components/Animate'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Search from 'grommet/components/Search'
import Sidebar from 'grommet/components/Sidebar'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'

import SocialTwitter from 'grommet/components/icons/base/SocialTwitter'
import SocialFacebook from 'grommet/components/icons/base/SocialFacebook'
import SocialMedium from 'grommet/components/icons/base/SocialMedium'
import SocialGithub from 'grommet/components/icons/base/SocialGithub'
import CloseIcon from 'grommet/components/icons/base/Close'

import Logo from '../Logo'
import { navActivate } from '../../state/actions'

class Navigation extends Component {
  _onClose = () => {
    this.props.dispatch(navActivate(false))
  }

  render() {
    const {
      nav: { items },
    } = this.props
    var links = items.map(page => {
      return <Anchor key={page.label} path={page.path} label={page.label} />
    })

    return (
      <Animate
        enter={{ animation: 'slide-right', duration: 300, delay: 0 }}
        leave={{ animation: 'slide-left', duration: 300, delay: 0 }}
        visible={true}
      >
        <Sidebar colorIndex="neutral-1" fixed={true}>
          <Header size="large" justify="between" pad={{ horizontal: 'medium' }}>
            <Title onClick={this._onClose} a11yTitle="Close Menu">
              <Logo colorIndex="light-1" />
            </Title>
            <Button
              icon={<CloseIcon />}
              onClick={this._onClose}
              plain={true}
              a11yTitle="Close Menu"
            />
          </Header>
          <Menu fill={true} primary={true}>
            {links}
          </Menu>
          <Footer pad={{ horizontal: 'medium', vertical: 'small' }}>
            <Box pad="small">
              <Anchor
                href="https://twitter.com/processingOrg"
                target="_blank"
                icon={<SocialTwitter />}
              />
            </Box>
            <Box pad="small">
              <Anchor
                href="https://medium.com/@ProcessingOrg"
                target="_blank"
                icon={<SocialMedium />}
              />
            </Box>
            <Box pad="small">
              <Anchor
                href="https://www.facebook.com/page.processing"
                target="_blank"
                icon={<SocialFacebook />}
              />
            </Box>
            <Box pad="small">
              <Anchor
                href="https://github.com/processing"
                target="_blank"
                icon={<SocialGithub />}
              />
            </Box>
          </Footer>
        </Sidebar>
      </Animate>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
})

const mapStateToProps = ({ nav }) => ({
  nav,
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
