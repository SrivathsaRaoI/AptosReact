import { LOGIN } from "../types";
const initState = {
 data: {}
}
export default (state = initState, action) => {
switch(action.type) {
 case LOGIN :
 return {...state, data: action.payload.response.data}
 default :
 return state
 }
}