//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/dist/Ionicons';

// create a component
const Onboarding = () => {
    const navigation = useNavigation();
    const slides = [
        {
          key: 1,
          title: 'Title 1',
          text: 'Description.\nSay something cool',
          image: require('../../assets/onboarding/frontal_home.png'),
          backgroundColor: '#59b2ab',
        },
        {
          key: 2,
          title: 'Title 2',
          text: 'Other cool stuff',
          image: require('../../assets/onboarding/doodle_reading.png'),
          backgroundColor: '#febe29',
        },
        {
          key: 3,
          title: 'Rocket guy',
          text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
          image: require('../../assets/onboarding/stting_on_floor.png'),
          backgroundColor: '#22bcb5',
        }
      ];
       
      const _renderItem = ({ item }) => {
        return (
            <View>
                <View>
                    <Text>
                        {item.title}
                    </Text>
                </View>
                <View>
                    <Image source={item.image}/>
                </View>
                <View>
                    <Text>
                        {item.text}
                    </Text>
                </View>
            </View>
        )
      }

      const _renderNextButton = () => {
        return (
            <View>
                <Icon name="arrow-forward-outline" color="rgba(255,255,255, .9)" size={24}/>
            </View>
        )
      }

      const _renderDoneButton = () => {
        return (
            <View>
                <Icon name="arrow-forward-outline" color="rgba(255,255,255, .9)" size={24}/>
            </View>
        )
      }

      const _renderSkipButton = () => {
        return (
            <View>
                <Icon name="arrow-forward-outline" color="rgba(255,255,255, .9)" size={24}/>
            </View>
        )
      }

      const _onEndReached = () => {
        navigation.navigate('Login');
      }

    return (
        <View >
            <AppIntroSlider 
            data={slides}
            renderItem={_renderItem}
            renderDoneButton={_renderDoneButton}
            renderNextButton={_renderNextButton}
            renderSkipButton={_renderSkipButton}
            onDone={_onEndReached}
            onSkip={_onEndReached}
            dotClickEnabled={true}
            showNextButton={true}
            />
        </View>
    );
};


//make this component available to the app
export default Onboarding;
