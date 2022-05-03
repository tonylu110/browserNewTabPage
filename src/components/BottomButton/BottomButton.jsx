import React, { Component } from 'react'
import './BottomButton.css'

export default class BottomButton extends Component {
  constructor(props) {
    super(props)
    var hideAll = localStorage.getItem('hideAll')
    if (hideAll === null) {
      hideAll = false
    } else if (hideAll === 'true') {
      hideAll = true
    } else {
      hideAll = false
    }
    this.state = {
      hideAll: hideAll
    }
  }
  render() {
    return (
      <div className='bottom_button'>
        <div className='b_button' onClick={() => this.hideAll()}>
          <img src="img/hide.png" alt="" />
        </div>
        <div className='b_button' onClick={() => window.location.reload()}>
          <img src="img/reload.png" alt="" />
        </div>
      </div>
    )
  }
  hideAll() {
    if (!this.state.hideAll) {
      this.props.hideAll(true)
      this.setState({
        hideAll: true
      })
      localStorage.setItem('hideAll', true)
    } else {
      this.props.hideAll(false)
      this.setState({
        hideAll: false
      })
      localStorage.setItem('hideAll', false)
    }
  }
}
