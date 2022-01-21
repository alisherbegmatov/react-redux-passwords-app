import { ADD_PASSWORD, DELETE_PASSWORD, EDIT_PASSWORD } from '../actions'

const passwordReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PASSWORD:
      const { name, password } = action.payload
      return [...state, { name, password }]

    case DELETE_PASSWORD:
      const { index } = action.payload
      state.splice(index, 1)
      return [...state]

    case EDIT_PASSWORD:
      return state.map((item, index) => {
        if (index !== action.payload.index) {
          return item
        }
        return { ...item, ...action.payload }
      })

    default:
      return state
  }
}

export default passwordReducer
