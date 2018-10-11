import { createStore, combineReducers, applyMiddleware } from 'redux'
import apiServiceReducer from './reducers/apiServiceReducer'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    apiServiceReducer
})
const store = createStore(
 reducer,
 applyMiddleware(thunk)
)
export default store;