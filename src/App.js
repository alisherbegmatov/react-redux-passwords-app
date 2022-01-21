import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './components/reducers'
import './App.css'
import Password from './Password'
import PasswordList from './PasswordList'

const PASSWORDS_STATE = 'PASSWORDS_STATE'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(PASSWORDS_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(PASSWORDS_STATE, serializedState)
  } catch (err) {
    console.log('Error saving data:' + err)
  }
}

const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(() => {
  saveState(store.getState())
})

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className='App'>
          <PasswordList />
          <Password />

        </div>
      </Provider>
    )
  }
}

export default App
