/*
 *
 * user actions
 *
 */

import WS_Login from '../../Webservices/WS_Login';
//Keys
import {
  USER_LOGIN
} from './actionTypes';





export const login = (data) => ({
  type: USER_LOGIN,
  async payload() {
    try {
      console.log("Response...", data);

      console.log("Response...", data.emailText);

      // let response = {
      //   loginCustomer:{
      //     success:1,
      //     message:"login",
      //     user:{
      //       currentUser:
      //       {
      //       "name" : "Avijit",
      //       "text" : "Hello, this is a text",
      //     }}}};

      let response_userinfo = await WS_Login.userInfo(data.emailText,data.passwordText);

      console.log("Response..userinfo.", response_userinfo);

      // const {
      //   currentUser
      // } = response;
      // if (response_userinfo.StatusCode!=200) {

      //   let message=response_userinfo.ErrorList;
      //   alert(message)
      //   return Promise.reject({ message });
      // }

      // // console.log("Response..user.", user);
      //  return response.loginCustomer.user;
      return response_userinfo;

    } catch (error) {
      console.error('error', error);
    }
  }
});


