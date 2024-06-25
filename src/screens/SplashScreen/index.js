//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const SplashScreen = () => {
    const [isVisible , setIsVisible] = useState(true)
    const navigation = useNavigation();
    
    const hideSplashScreen = () => {
        setIsVisible(false);
    }

    useEffect(() => {
        setTimeout(() => {
            hideSplashScreen();
            navigation.navigate("onboarding");
        },10000);
    }, []);

    const renderSplash = () => {
        return (
            <View>
                <View>
                    <Image  source={require('../../assets/splash_icon_dark.png')} style={{width:150,height:150,resizeMode:'contain'}}/>
                </View>
            </View>
        )
    }

    return (
        <View >
            {isVisible === true ? renderSplash() : null}
        </View>
    );
};


//make this component available to the app
export default SplashScreen;
