import { COMMON_API } from "../types";
const initState = {
 data: {}
}
export default (state = initState, action) => {
switch(action.type) {
 case COMMON_API :
 return {...state, data: action.payload.response.data}
 default :
 return state
 }
}