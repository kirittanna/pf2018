import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'

import MenuIcon from 'grommet/components/icons/base/Menu'
import CloseIcon from 'grommet/components/icons/base/Close'

import { navActivate } from '../../state/actions'

class NavControl extends Component {
  render() {
    const {
      nav: { active },
    } = this.props

    return (
      <Button
        icon={active ? <CloseIcon /> : <MenuIcon />}
        onClick={() => this.props.dispatch(navActivate(!active))}
        plain={false}
      />
    )
  }
}

NavControl.propTypes = {
  nav: PropTypes.object,
}

const mapStateToProps = ({ nav }) => ({
  nav,
})

export default connect(mapStateToProps)(NavControl)
