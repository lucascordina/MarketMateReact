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

    render() {

        return (
        <View style={this.styles.emptyListContainer}>
            <Image
                style={this.styles.emptyListImage}
                source={require('../../assets/illustrations/muffin-tasting.png')}
            />
            <View>
                {
                this.state.fontLoaded ? (
                    <Text style={this.styles.emptyListDescription}>
                    The perfect muffin...{"\n"}
                    starts with a trip to the store.
                    </Text>
                ) : null
                }
          </View>
        </View>
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