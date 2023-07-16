// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onFirstNameClick = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  isFirstNameDisplay = () => {
    const {isFirstName, isLastName} = this.state
    if (isFirstName) {
      return (
        <div className="container-1">
          <p>Joe</p>
        </div>
      )
    }
    return ''
  }

  isLastNameDisplay = () => {
    const {isFirstName, isLastName} = this.state
    if (isLastName) {
      return (
        <div className="container-1">
          <p>Jonas</p>
        </div>
      )
    }
    return ''
  }

  onLastNameClick = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <button
            type="button"
            onClick={this.onFirstNameClick}
            className="button"
          >
            Show/Hide Firstname
          </button>

          <button
            type="button"
            onClick={this.onLastNameClick}
            className="button"
          >
            Show/Hide Lastname
          </button>
          <div className="name-container">
            {this.isFirstNameDisplay()}
            {this.isLastNameDisplay()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
