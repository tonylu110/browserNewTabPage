import React, { Component } from 'react'
import TopRightButton from '../TopRightButton/TopRightButton'
import './FeaButton.css'

export default class FeaButton extends Component {
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
      <>
        <TopRightButton hideAll={(e) => this.hideAll(e)} />
      </>
    )
  }
  hideAll(e) {
    this.setState({
      hideAll: e
    })
    this.props.hideAll(e)
  }
}
