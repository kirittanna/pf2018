import React from 'react'
import get from 'lodash/get'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Search from 'grommet/components/Search'

class Navi extends React.Component {
  render() {
    const title = get(this, 'props.title')

    return (
      <Header
        fixed={true}
        justify="center"
        colorIndex="grey-1"
        size={{ height: { min: 0 } }}
      >
        <Box
          align="center"
          direction="row"
          flex="grow"
          justify="start"
          pad={{ horizontal: 'medium', vertical: 'none' }}
          responsive={false}
          size={{ width: { max: 'xxlarge' } }}
        >
          <Title>{title}</Title>
          <Box direction="row" flex="grow" size="large">
            <Search
              inline={true}
              placeHolder="Search"
              responsive={true}
              full="horizontal"
              size="small"
            />
          </Box>
          <Menu label="Sites" direction="row" flex="grow">
            <Anchor href="#">Processing Foundation</Anchor>
            <Anchor href="#">P5.js</Anchor>
            <Anchor href="#">Processing.py</Anchor>
            <Anchor href="#">Processing for Android</Anchor>
          </Menu>
        </Box>
        <Box />
      </Header>
    )
  }
}

export default Navi
