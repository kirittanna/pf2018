import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import IconMenu from 'grommet/components/icons/base/Menu'

import { navActivate } from '../../state/actions'
import Logo from '../Logo'

class NavControl extends Component {
  render() {
    const {
      nav: { active },
    } = this.props

    let result
    if (!active) {
      result = (
        <Box direction="row" responsive={false}>
          <Button
            icon={<IconMenu />}
            onClick={() => this.props.dispatch(navActivate(true))}
            plain={false}
          />
          <Logo />
        </Box>
      )
    } else {
      result = null
    }
    return result
  }
}

NavControl.propTypes = {
  nav: PropTypes.object,
}

const mapStateToProps = ({ nav }) => ({
  nav,
})

export default connect(mapStateToProps)(NavControl)
