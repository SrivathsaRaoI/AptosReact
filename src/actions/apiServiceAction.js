import { COMMON_API } from '../types';
import axios from 'axios';
const baseURL= 'http://localhost:3000/data.json'

export const getCommonApiAction = () => {
  return dispatch => {
    axios.get(baseURL)
      .then((response)=> {
        dispatch({
          type: COMMON_API,
          payload: {
            response
          }
        })
      })
      .catch((error)=> {
        console.log(error);
      });
    
  }
}