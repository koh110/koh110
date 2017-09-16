import { combineReducers } from 'redux'
import social from './social'
import work from './work'

const appReducer = combineReducers({
  social, work
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
