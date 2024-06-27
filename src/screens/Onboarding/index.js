//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {styles} from './styles';
import { connect } from 'react-redux';
import * as authAction from '../../redux/actions/authAction'
import PropTypes from 'prop-types';
// create a component
const Onboarding = ({...props}) => {

  const {updateOnboarding} = props;

    const navigation = useNavigation();
    const slides = [
        {
          key: 1,
          title: 'Welcome To News App ',
          text: 'Here you can read latest News updates after registation on application',
          image: require('../../assets/onboarding/frontal_home.png'),
          backgroundColor: '#59b2ab',
        },
        {
          key: 2,
          title: 'Read News',
          text: 'Read News at any place and anywhere just by connect to the internet ',
          image: require('../../assets/onboarding/doodle_reading.png'),
          backgroundColor: '#febe29',
        },
        {
          key: 3,
          title: 'Add To Favorite',
          text: 'Add to your Favorite read list and also you can add comments',
          image: require('../../assets/onboarding/stting_on_floor.png'),
          backgroundColor: '#22bcb5',
        }
      ];
       
      const _renderItem = ({ item }) => {
        return (
            <View style={styles().slide}>
                <View style={styles().titleContainer}>
                    <Text style={styles().title}>
                        {item.title}
                    </Text>
                </View>
                <View style={styles().imageContainer}>
                    <Image source={item.image} style={styles().image}/>
                </View>
                <View style={styles().textContainer}>
                    <Text style={styles().text}>
                        {item.text}
                    </Text>
                </View>
            </View>
        )
      }

      const _renderNextButton = () => {
        return (
            <View style={styles().buttonCircle}>
                <Icon name="arrow-forward-outline" color="rgba(255,255,255, .9)" size={24}/>
            </View>
        )
      }

      const _renderDoneButton = () => {
        return (
            <View style={styles().buttonCircle}>
                <Icon name="checkmark-sharp" color="rgba(255,255,255, .9)" size={24}/>
            </View>
        )
      }

      const _renderSkipButton = () => {
        return (
            <View style={styles().skipView}>
                {/* <Icon name="arrow-forward-outline" color="rgba(255,255,255, .9)" size={24}/> */}
                <Text tyle={styles().skipTextColor}>Skip</Text>
            </View>
        )
      }

      const _onEndReached = () => {
        updateOnboarding(true);
        navigation.navigate('Login');
      }

    return (
        <View style={{flex:1}}>
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
            showDoneButton={true}
            showSkipButton={true}
            />
        </View>
    );
};

Onboarding.PropTypes = {
  isOnboardingDisabled: PropTypes.bool.isRequired,
  updateOnboarding: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    isOnboardingDisabled: state.auth.isOnboardingDisabled
  }
}

const mapDispatchToProps = (dispatch) =>({
  updateOnboarding: (status) => dispatch(authAction.updateOnboarding(status))
})

//make this component available to the app
export default connect(mapStateToProps,mapDispatchToProps)(Onboarding);
