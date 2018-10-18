import { HOME,HOMELOADING,HOMEERROR } from '../types';
import axios from 'axios';
import {baseURL} from '../baseConfig';

export const homeAction = (userId) => {
  return dispatch => {
   
      dispatch({
          type: HOMELOADING
        }) 

    axios.post(baseURL+"/find", 
                { user_id: userId }
                ).then( (response)=> {
                        dispatch({
                            type: HOME,
                            payload: {
                                response
                            }
                            })
                }).catch((error)=> {
                    dispatch({
                        type: HOMEERROR,
                        payload: {
                            error
                        }
                        }) 
                });  
  }
}