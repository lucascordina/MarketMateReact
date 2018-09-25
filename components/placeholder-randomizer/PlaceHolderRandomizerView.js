import React, { Component } from 'react';
import {View, Text, Image } from 'react-native';
import { Font } from 'expo';

import  brandColors from '../../assets/styling/colors';

export default class PlaceHolderRandomizerView extends Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Pacifico Regular': require('../../assets/fonts/Pacifico.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    renderRandomImage() {
        //Randomize a number between 1 and 3 to be used to randomize the image picked
        //Must be increased with each image added.
        //TODO: find less maintenance prone way of doing this using length of choices.
        switch(Math.floor(Math.random() * 3) + 1){
            case 1:
                return (
                    <View style={this.styles.emptyListContainer}>
                        <Image
                                style={this.styles.emptyListImage}
                                source={require('../../assets/illustrations/muffin-tasting.png')}
                        />
                        <View>
                            <Text style={this.styles.emptyListDescription}>
                                The perfect muffin...{"\n"}
                                starts with a trip to the store.
                            </Text>
                        </View>
                    </View>
                );
            default:
                return (
                    <View style={this.styles.emptyListContainer}>
                        <Image
                                style={this.styles.emptyListImage}
                                source={require('../../assets/illustrations/muffin-tasting.png')}
                        />
                        <View>
                            <Text style={this.styles.emptyListDescription}>
                                The perfect muffin...{"\n"}
                                starts with a trip to the store.
                            </Text>
                        </View>
                    </View>
                );
        }
    }

    render() {
        return (
            this.state.fontLoaded ? (this.renderRandomImage()) : null
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