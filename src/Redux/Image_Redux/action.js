import WS_ImageList from '../../Webservices/WS_ImageList';
import {IMAGE_LIST} from './actionTypes';

export const imagesListAction = () => ({
    type: IMAGE_LIST,
    async payload() {
      try {
        // console.log("Response...", data);
  
        // console.log("Response...", data.emailText);
  
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
  
        let response_imageList = await WS_ImageList.imageList();
  
        console.log("Response..userinfo.", response_imageList);
  
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
        return response_imageList;
  
      } catch (error) {
        console.error('error', error);
      }
    }
  });
  