import React, { Component } from 'react';
import { Animated, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';

import brandColors from '../../assets/styling/colors';
import brandFonts from '../../assets/styling/fonts';

export default class PlaceHolderRandomizerView extends Component {
    state = {
        loadedImage :'',
        loadedText: '',
        fadeAnim: new Animated.Value(0),
        componentReady: false,
    };

    async componentDidMount() {
        this.randomizeLoadedImage();

        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
              toValue: 1,                   // Animate to opacity: 1 (opaque)
              duration: 600,              // Make it take a while
            }
          ).start();

        this.setState({ componentReady: true });
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
        let { fadeAnim } = this.state;
        
        return (
            this.state.componentReady ? (
                <View style={this.styles.emptyListContainer}>
                    <Animated.View                 // Special animatable View
                            style={{
                            ...this.styles.emptyListContainer,
                            opacity: fadeAnim,         // Bind opacity to animated value
                            }}
                        >
                        <LinearGradient
                            colors={brandColors.fourStepGradient}
                            style={{ alignItems: 'center', flex:1 }}>
                            <Image
                                style={this.styles.emptyListImage}
                                source={this.state.loadedImage}
                            />
                            <View>
                                <Text style={this.styles.emptyListDescription}>
                                    {this.state.loadedText}
                                </Text>
                            </View>
                        </LinearGradient>
                    </Animated.View>
                </View>
            ) : null
        )
    }

    //styles must be self contained due to spread operator
    styles = {
        emptyListContainer: {
            flex:1,
            alignSelf: 'stretch',
            backgroundColor: brandColors.primaryColor,
          },
          emptyListImage: {
            flex: 0.7 ,
            width:'90%',
            resizeMode: 'contain',
            marginTop: 50,
            marginBottom: 50,
          },
          emptyListDescription: {
            fontFamily: brandFonts.displayFont,
            fontSize: 30,
            fontWeight: '400',
            justifyContent: 'center',
            textAlign: 'center',
            marginLeft: 15,
            marginRight: 15,
            color: '#fff',
        },
    };

}