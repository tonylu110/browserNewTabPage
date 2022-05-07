import React, { Component } from 'react'
import './Calculator.css'

export default class Calculator extends Component {
  state = {
    value: ''
  }
  render() {
    return (
      <div className="main_cal">
        <div className="card" action=''>
          <input type="text" className="value" id="txt" readOnly="readonly" value={this.state.value} />
          <span className="clear" onClick={() => this.setState({value: ''})} style={{ marginLeft: '10px' }}>c</span>
          <span className="num" onClick={() => this.onNumberClick('/')} >/</span>
          <span className="num" onClick={() => this.onNumberClick('*')} style={{ marginRight: '10px' }}>*</span>
          <span className="num" onClick={() => this.onNumberClick('7')} style={{ marginLeft: '10px' }}>7</span>
          <span className="num" onClick={() => this.onNumberClick('8')} >8</span>
          <span className="num" onClick={() => this.onNumberClick('9')} >9</span>
          <span className="num" onClick={() => this.onNumberClick('-')} >-</span>
          <span className="num" onClick={() => this.onNumberClick('4')} style={{ marginLeft: '10px' }}>4</span>
          <span className="num" onClick={() => this.onNumberClick('5')} >5</span>
          <span className="num" onClick={() => this.onNumberClick('6')} >6</span>
          <span className="num" onClick={() => this.onNumberClick('+')} >+</span>
          <span className="num" onClick={() => this.onNumberClick('1')} style={{ marginLeft: '10px' }}>1</span>
          <span className="num" onClick={() => this.onNumberClick('2')} >2</span>
          <span className="num" onClick={() => this.onNumberClick('3')} >3</span>
          <span className="num" onClick={() => this.onNumberClick('0')} >0</span>
          <span className="num" onClick={() => this.onNumberClick('00')} style={{ marginLeft: '10px' }}>00</span>
          <span className="num" onClick={() => this.onNumberClick('.')} >.</span>
          <span className="result" onClick={() => this.result()}>=</span>
        </div>
      </div>
    )
  }
  onNumberClick(number) {
    this.setState({
      value: this.state.value + number
    })
  }
  result() {

  }
}
