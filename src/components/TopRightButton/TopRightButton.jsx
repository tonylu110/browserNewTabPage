import React, { Component } from 'react'
import './TopRightButton.css'

export default class TopRightButton extends Component {
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
      <div className='top_right_button'>
        <div className='tr_button' onClick={() => this.hideAll()}>
          <img src="img/hide.png" alt="" />
        </div>
        {this.state.hideAll ? null : (
          <div className='tr_button' onClick={() => window.location.reload()}>
            <img src="img/reload.png" alt="" />
          </div>
        )}
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
