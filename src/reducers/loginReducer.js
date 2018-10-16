import { LOGIN,LOGINLOADING,LOGINERROR } from '../types';
const initState = {
}
export default (state = initState, action) => {
switch(action.type) {
    case LOGINLOADING :
 return {...state, 
     data:{
         data: {},
         Loading:true,
         Error:false                    
    }
 }
 case LOGIN :
 return {...state, 
     data:{
         data: action.payload,
         Loading:false,
         Error:false                    
    }
 }
 
 case LOGINERROR :
 return {...state, 
     data:{
         data: action.payload,
         Loading:false,
         Error:true                    
    }
 }
 default :
 return state
 }
}