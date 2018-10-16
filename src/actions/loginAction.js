import { LOGIN,LOGINLOADING,LOGINERROR } from '../types';
import axios from 'axios';
import {baseURL} from '../baseConfig';

export const loginAction = (userName,password) => {
  return dispatch => {
   
      dispatch({
          type: LOGINLOADING
        }) 
      axios.post(baseURL+"/authenticate", 
      { username: userName,
        password: password
      }
      ).then( (response)=> {
        dispatch({
          type: LOGIN,
          payload: {
            response
          }
        })
            
      }).catch((error)=> {
          dispatch({
          type: LOGINERROR,
          payload: {
            error
          }
        }) 
          
      });
    
  }
}