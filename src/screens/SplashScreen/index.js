//import liraries
import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import {styles} from './styles';

// create a component
const SplashScreen = () => {
    const [isVisible , setIsVisible] = useState(true)
    const navigation = useNavigation();

    const theme = useTheme();
    console.log(theme)

    const {background,dark} = theme;
    
    const hideSplashScreen = () => {
        setIsVisible(false);
    }

    useEffect(() => {
        setTimeout(() => {
            hideSplashScreen();
            navigation.navigate("Tab");
        },1000);
    }, []);

    const renderSplash = () => {
        return (
            <View style={styles().SplashScreen_RootView}>
                <View style={styles().SplashScreen_ChildView}>
                    <Image  source={ dark ? require('../../assets/splash_icon_dark.png') :require('../../assets/splash_icon_light.png')  } style={{width:150,height:150,resizeMode:'contain'}}/>
                </View>
            </View>
        )
    }

    return (
        <View style={styles(background).MainContainer}>
            {isVisible === true ? renderSplash() : null}
        </View>
    );
};


//make this component available to the app
export default SplashScreen;
