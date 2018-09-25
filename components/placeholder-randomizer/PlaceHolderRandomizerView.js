import React, { Component } from 'react';
import {View, Text, Image } from 'react-native';
import { Font } from 'expo';

import  brandColors from '../../assets/styling/colors';

export default class PlaceHolderRandomizerView extends Component {
    state = {
        fontLoaded: false,
        loadedImage :'',
        loadedText: '',
    };

    async componentDidMount() {
        this.randomizeLoadedImage();

        await Font.loadAsync({
            'Pacifico Regular': require('../../assets/fonts/Pacifico.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    randomizeLoadedImage() {
        //Randomize a number between 1 and 3 to be used to randomize the image picked
        switch(Math.floor(Math.random() * 3) + 1){
            case 1:
                this.setState({ loadedImage: require('../../assets/illustrations/muffin-tasting.png')});
                this.setState({ loadedText:'The perfect muffin...\nstarts with a trip to the store.' });
                break;
            case 2:
                this.setState({ loadedImage: require('../../assets/illustrations/eating-together.png')});
                this.setState({ loadedText:'What nicer thing can you do for somebody...\nthan making them breakfast?' });
                break;
            case 3:
                this.setState({ loadedImage: require('../../assets/illustrations/todo-list.png')});
                this.setState({ loadedText:'Listen to your gut...\nand then write down its wishlist.' });
                break;
        }
    }

    render() {
        return (
            this.state.fontLoaded ? (
                <View style={this.styles.emptyListContainer}>
                    <Image
                        style={this.styles.emptyListImage}
                        source={this.state.loadedImage}
                    />
                    <View>
                        <Text style={this.styles.emptyListDescription}>
                            {this.state.loadedText}
                        </Text>
                    </View>
                </View>
            ) : null
        )
    }

    styles = {
        emptyListContainer: {
            flex:1,
            alignSelf: 'stretch',
            backgroundColor: brandColors.primaryColor,
          },
          emptyListImage: {
            flex: 0.7 ,
            width: null,
            height: null,
            resizeMode: 'contain',
            marginTop: 50,
            marginBottom: 50,
          },
          emptyListDescription: {
            fontFamily: 'Pacifico Regular',
            fontSize: 30,
            fontWeight: '400',
            justifyContent: 'center',
            textAlign: 'center',
            marginLeft: 15,
            marginRight: 15,
            color: '#fff',
          },
    }
}