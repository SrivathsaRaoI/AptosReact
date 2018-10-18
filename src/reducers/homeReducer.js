import { HOME,HOMELOADING,HOMEERROR } from '../types';
const initState = {data:{
         data: {},
         Loading:false,
         Error:false                    
    }
}
export default (state = initState, action) => {
switch(action.type) {
    case HOMELOADING :
 return {...state, 
     data:{
         data: {},
         Loading:true,
         Error:false                    
    }
 }
 case HOME :
 return {...state, 
     data:{
         data: action.payload.response.data,
         Loading:false,
         Error:false                    
    }
 }
 
 case HOMEERROR :
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