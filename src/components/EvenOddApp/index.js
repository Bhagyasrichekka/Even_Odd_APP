// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, oe: 'Even'}

  check = () => {
    const {count} = this.state
    const randomNum = Math.ceil(Math.random() * 100)
    if ((count + randomNum) % 2 === 0) {
      this.setState(() => ({oe: 'Even'}))
      this.setState(prevState => ({count: prevState.count + randomNum}))
      return
    }
    this.setState(() => ({oe: 'Odd'}))
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count, oe} = this.state
    return (
      <div className="bg">
        <h1>Count {count}</h1>
        <p>Count is {oe}</p>
        <button type="button" className="btn" onClick={this.check}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
