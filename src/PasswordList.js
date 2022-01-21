import React, { Component } from 'react'
import { connect } from 'react-redux'

class PasswordList extends Component {
  getList () {
    return this.props.passwords.map((pass, index) => {
      return (
        <tr key={index}>
          <td>{pass.name}</td>
          <td className='password-text'>{pass.password}</td>
        </tr>
      )
    })
  }

  render () {
    return (
      <div className='password-table'>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          {this.getList()}
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    passwords: state.passwords
  }
}

export default connect(mapStateToProps)(PasswordList)
