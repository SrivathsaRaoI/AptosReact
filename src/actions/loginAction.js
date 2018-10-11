import { LOGIN } from '../types';
import axios from 'axios';
const baseURL= 'http://localhost:3000/data.json'

export const loginAction = () => {
  return dispatch => {
    axios.get(baseURL)
      .then((response)=> {
        dispatch({
          type: LOGIN,
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