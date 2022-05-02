import React, { Component } from 'react'
import './One.css'

export default class One extends Component {
  constructor(props) {
    var screenwidth = window.innerWidth
    var oneButtonWidth = ''
    if (screenwidth < 768) {
      oneButtonWidth = '280px'
    }
    super(props)
    this.state = {
      oneMain: {},
      oneButtonHeight: '',
      oneButtonWidth: oneButtonWidth
    }
  }
  render() {
    return (
      <div className='one_button' style={{marginBottom: this.state.oneButtonHeight, maxWidth: this.state.oneButtonWidth}}>
          <span style={{maxWidth: this.state.oneButtonWidth}}>{this.state.oneMain.hitokoto}</span>
      </div>
    )
  }
  static getDerivedStateFromProps(props) {
    var screenwidth = window.innerWidth
    var oneButtonTopHeight = '20px'
    if (screenwidth < 768) {
      oneButtonTopHeight = '20vh'
    }
    if (props.oneMain !== null && props.oneMain.hitokoto !== undefined) {
      return {
        oneMain: props.oneMain,
        oneButtonHeight: oneButtonTopHeight
      }
    }
    return null;
  }
}
