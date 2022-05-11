//When Mobile show the bottom button
import React, { Component } from 'react'
import Calculator from '../Calculator/Calculator'
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
      hideAll: hideAll,
      calculatorShow: false
    }
  }
  render() {
    return (
      <>
        <div className='bottom_button'>
          {this.state.calculatorShow ? null : (
            <div className='b_button' onClick={() => this.hideAll()}>
              <img src="img/hide.png" alt="" />
            </div>
          )}
          {this.state.hideAll ? null : (
            <>
              {this.state.calculatorShow ? null : (
                <div className='b_button' onClick={() => window.location.reload()}>
                  <img src="img/reload.png" alt="" />
                </div>
              )}
              <div className='b_button' onClick={() => this.useCalculator()}>
                <img src="img/calculator.png" alt="" />
              </div>
            </>
          )}
        </div>
        {this.state.calculatorShow ? <Calculator /> : null}
      </>
    )
  }
  /* A function that is called when the user clicks the hide button. It will hide all the buttons and
  save the state in localStorage. */
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
  /* A function that is called when the user clicks the calculator button. It will show the calculator
  and save the state in localStorage. */
  useCalculator() {
    this.setState({
      calculatorShow: !this.state.calculatorShow
    })
    this.props.useCalculator(!this.state.calculatorShow)
  }
}
