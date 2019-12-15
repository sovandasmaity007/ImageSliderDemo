import React, { Component } from "react";
import { View, ImageBackground, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import Styles from './styles';
import { connect } from 'react-redux';
import {imagesListAction} from '../../Redux/Image_Redux/action';
import { Spinner } from '../../components/Spinner';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        tempWidth: 0,
        tempHeight: 0,
        cartList: []
    };
}



  componentWillMount() {

    console.log("*********componentWillMount********");
    // this.setState({
    //   loading: true
    // });
    //this.ParseData();
    setTimeout(() => {
      this.navigateToNext();
    }, 3000);
  }
 
  navigateToNext() {
    this.props.navigation.replace('ImageList');
  }

  componentDidMount() {
    console.log("*********componentDidMount********");
  }

  componentWillUnmount() {
    console.log("*********componentWillUnmount********");
  }

  async ParseData(){
  let currentImage = await imagesListAction();

  this.setState({
    loading: false
  });

  if (currentImages != null) {
    console.log("Response..currentUser1SOVAN200..." + currentImage)
    //let message = currentImages.ErrorList;
    //alert(message)
    setTimeout(() => {
      this.navigateToNext();
    }, 3000);
  }else{
    console.log("Response..currentUser1SOVAN...",currentImage)
    
  }
}
  render() {

    return (
      <View style={{ flex: 1, backgroundColor: '#3db6ad' }}>
        {this.state.loading && (<View
          style={{ alignItems: "center" }}>
          <Spinner />
        </View>)}
      </View>
    );
  }

  

}
const mapStateToProps = ({ imagesListActions }) => ({
  // currentUser: logins.currentUser.currentUser
  currentImages: imagesListActions.currentImages
});

const mapDispatchToProps = dispatch => ({
  imagesListAction: () => dispatch(imagesListAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);


