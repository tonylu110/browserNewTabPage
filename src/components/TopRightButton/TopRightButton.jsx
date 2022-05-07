import React, { Component } from 'react'
import Calculator from '../Calculator/Calculator'
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
      hideAll: hideAll,
      calculatorShow: false
    }
  }
  render() {
    return (
      <>
        <div className='top_right_button'>
          {this.state.calculatorShow ? null : (
            <div className='tr_button' onClick={() => this.hideAll()}>
              <img src="img/hide.png" alt="" />
            </div>
          )}
          {this.state.hideAll ? null : (
            <>
              {this.state.calculatorShow ? null : (
                <div className='tr_button' onClick={() => window.location.reload()}>
                  <img src="img/reload.png" alt="" />
                </div>
              )}
              <div className='tr_button' onClick={() => this.useCalculator()}>
                <img src="img/calculator.png" alt="" />
              </div>
            </>
          )}
        </div>
        {this.state.calculatorShow ? <Calculator /> : null}
      </>
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
  useCalculator() {
    this.setState({
      calculatorShow: !this.state.calculatorShow
    })
    this.props.useCalculator(!this.state.calculatorShow)
  }
}
