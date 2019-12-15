import React, { Component } from "react";
import {
    View, ImageBackground, Image, SafeAreaView,
    FlatList,
    TouchableOpacity, Text, ScrollView,
    TouchableHighlight, Dimensions, NetIfo
} from "react-native";
import Styles from './styles';
import WS_ImageList from '../../Webservices/WS_ImageList';
import { Spinner } from '../../components/Spinner';
import {
    productDetailImageCountBackground,
    seperatorLineColor, appcolor
} from '../../constant/config';
import ImageSlider from 'react-native-image-slider';
import ImageS from 'react-native-image-progress';
import { connect } from 'react-redux';


var SampleArray = [];

class ImageList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            tempWidth: 0,
            tempHeight: 0,
            cartList: [
                {
                    title: '199 Postpaid',
                    imagePath: require('../../img/ic_image_sim.png'),
                    ratingVal: 4,
                    description: 'This package is specially designed with great value that suite all...',
                    is_compare: true,
                    is_quickview: false,
                    is_wishlist: false,
                    is_addToCart: false
                },
                {
                    title: '299 Postpaid',
                    imagePath: require('../../img/ic_image_sim.png'),
                    ratingVal: 4,
                    description: 'This package is specially designed with great value that suite all...',
                    is_compare: true,
                    is_quickview: false,
                    is_wishlist: false,
                    is_addToCart: false
                },
                {
                    title: '399 Postpaid',
                    imagePath: require('../../img/ic_image_sim.png'),
                    ratingVal: 2,
                    description: 'This package is specially designed with great value that suite all...',
                    is_compare: true,
                    is_quickview: false,
                    is_wishlist: false,
                    is_addToCart: false
                },
                {
                    title: '499 Postpaid',
                    imagePath: require('../../img/ic_image_sim.png'),
                    ratingVal: 5,
                    description: 'This package is specially designed with great value that suite all...',
                    is_compare: true,
                    is_quickview: false,
                    is_wishlist: false,
                    is_addToCart: false
                },
                {
                    title: '599 Postpaid',
                    imagePath: require('../../img/ic_image_sim.png'),
                    ratingVal: 1,
                    description: 'This package is specially designed with great value that suite all...',
                    is_compare: true,
                    is_quickview: false,
                    is_wishlist: false,
                    is_addToCart: false
                },
                {
                    title: '699 Postpaid',
                    imagePath: require('../../img/ic_image_sim.png'),
                    ratingVal: 3,
                    description: 'This package is specially designed with great value that suite all...',
                    is_compare: true,
                    is_quickview: false,
                    is_wishlist: false,
                    is_addToCart: false
                },
            ],
        };
    }


    componentWillMount() {

        //console.log("*********componentWillMount********");
        this.setState({
            tempWidth: Dimensions.get('window').width,
            tempHeight: Dimensions.get('window').height,
            //loading: true,
        })

        this.ParseData();
    }
    async ParseData() {

        let imageListArray = await WS_ImageList.imageList();
        if (imageListArray != null) {

            //console.log("imageListArray null SOVAN: " + JSON.stringify(imageListArray))
            console.log("imageListArray null SOVAN: " + JSON.stringify(imageListArray))
            this.setState({
                loading: false,
                cartList: imageListArray
            });

            // {this.state.cartList.map((value, index) => {
            //     SampleArray.push( {title: value.title, urlStr: 'https://picsum.photos/200/300?image='+value.id} )
            //   })}
            //   this.setState({
            //     loading: false,
            //     cartList: SampleArray
            // });

            //SampleArray.push( this.state.Holder.toString() )

        } else {
            console.log("imageListArray null: ")
            this.setState({
                loading: false,
                cartList: []
            });
        }

    }

    componentDidMount() {
        //console.log("*********componentDidMount********");
    }

    componentWillUnmount() {
        //console.log("*********componentWillUnmount********");
    }


    render() {
        const { currentImages } = this.props;
        // this.setState({
        //     //loading: false,
        //     cartList: currentImages
        // });
        console.log("SOVAN DAS MAITY:" + JSON.stringify(currentImages.currentImages));

        return (
            <View style={Styles.backGroundStyle}>
                <SafeAreaView style={{
                    flex: 0,
                    backgroundColor: appcolor
                }} />

                <SafeAreaView style={Styles.backGroundStyle}>

                    <ImageSlider
                        //style={{ backgroundColor: 'white' }}
                        loopBothSides
                        autoPlayWithInterval={10000}
                        images={this.state.cartList}
                        customSlide={({ index, item }) => (
                            // It's important to put style here because it's got offset inside
                            this.renderCartHistory(item, index)
                        )}
                    />

                </SafeAreaView>
                {this.state.loading && (<View
                    style={{ alignItems: "center" }}>
                    <Spinner />
                </View>)}
            </View>
        );
    }


    renderCartHistory(item, index) {

        return (
            <TouchableOpacity onPress={() => this._selectCellon(item, index)} style={{ alignItems: 'center' }}>

                <ImageS source={{ uri: 'https://picsum.photos/200/300?image=' + item.id }} style={{
                    marginTop: 0,
                    width: this.state.tempWidth,
                    height: this.state.tempHeight - 100,
                    resizeMode: 'cover'
                }}
                >
                </ImageS>
                <Text style={{ position: 'absolute', top: 20, color: 'red' }}>{item.author}</Text>
            </TouchableOpacity>
        );
    }

    _selectCellon(item, index) {
        //alert(index)
    }

}

const mapStateToProps = ({ imagesListActions }) => ({
    // currentUser: logins.currentUser.currentUser
    currentImages: imagesListActions


});
export default connect(mapStateToProps)(ImageList);