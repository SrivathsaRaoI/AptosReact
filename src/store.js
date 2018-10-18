import { createStore, combineReducers, applyMiddleware } from 'redux'
import loginReducer from './reducers/loginReducer'
import homeReducer from './reducers/homeReducer'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    loginReducer,
    homeReducer
})
const store = createStore(
 reducer,
 applyMiddleware(thunk)
)
export default store;