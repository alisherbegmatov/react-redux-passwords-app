import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPassword } from './components/actions'
import zxcvbn from 'zxcvbn'

const letters = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 'Z', 'Y', 'X',
  'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P',
  'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H',
  'G', 'F', 'E', 'D', 'C', 'B', 'A'
]

const random = (n) => {
  return Math.floor(Math.random() * n)
}

class Password extends Component {
  constructor (props) {
    super(props)
    this.state = {
      password: 'Password',
      name: 'Username'
    }
  }

  generatePassword () {
    let password = ''
    for (let i = 0; i < 3; i++) {
      password += letters[random(letters.length)]
    }
    password += '-'
    for (let i = 0; i < 3; i++) {
      password += letters[random(letters.length)]
    }
    password += '-'
    for (let i = 0; i < 3; i++) {
      password += letters[random(letters.length)]
    }
    this.setState({ password })
    console.log(zxcvbn(password))
  }

  render () {
    return (
      <div className='password'>
        <div className='password-inputs'>
          <input
            type='text' className='password-input' placeholder='Name' value={this.state.name} onChange={(e) => {
              this.setState({ name: e.target.value })
            }}
          />
          <input
            type='text' className='password-input' value={this.state.password} onChange={(e) => {
              this.setState({ password: e.target.value })
            }}
          />
        </div>
        <div className='password-buttons'>
          <button
            className='password-saveButton password-button' onClick={(e) => {
              this.props.addPassword(this.state.name, this.state.password)
            }}
          >Save
          </button>
          <button
            className='password-generateButton password-button' onClick={(e) => {
              this.generatePassword()
            }}
          >Generate password
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = () => {
  return {
    addPassword
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Password)
