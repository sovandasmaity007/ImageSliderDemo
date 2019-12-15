/*
 *
 * sensor reducer
 *
 */

import {
  USER_LOGIN
} from './actionTypes';

export const initialState = {
  loading: false,
  currentUser: ''
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case `${USER_LOGIN}_PENDING`:
      console.log("*********_PENDING********");
      return { ...state, loading: true };
    
      case `${USER_LOGIN}_FULFILLED`:
      console.log("*********_FULFILLED********");
      return { ...state, loading: false, currentUser: payload };
    
      case `${USER_LOGIN}_REJECTED`:
      console.log("*********_REJECTED********");
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export default userReducer;
