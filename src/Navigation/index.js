//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import constants from '../constants';


const {MyDarkTheme,MyLightTheme} = constants

// create a component
const RootNavigation = () => {

    return (
       <NavigationContainer theme={MyLightTheme}>
        <AuthStack/>
       </NavigationContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default RootNavigation;
