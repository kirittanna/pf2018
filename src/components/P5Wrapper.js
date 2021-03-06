import React, { Component } from 'react'

import styles from './P5Wrapper.css'

export default class P5Wrapper extends Component {
  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper)
    if (this.canvas.redrawHandler) {
      this.canvas.redrawHandler(this.props)
    }
  }

  componentWillReceiveProps(newprops) {
    if (this.props.sketch !== newprops.sketch) {
      this.wrapper.removeChild(this.wrapper.childNodes[0])
      this.canvas = new p5(newprops.sketch, this.wrapper)
    }
    if (this.canvas.redrawHandler) {
      this.canvas.redrawHandler(newprops)
    }
  }

  componentWillUnmount() {
    this.canvas.remove()
  }

  render() {
    return (
      <div
        ref={wrapper => (this.wrapper = wrapper)}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      />
    )
  }
}
