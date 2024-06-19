//import liraries
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Tabs from './Tabs';
import SplashScreen from '../screens/SplashScreen';
import Onboarding from '../screens/Onboarding';
import NewsDetails from '../screens/NewsDetails';
import CategoryList from '../screens/CategoryList';
import About from '../screens/About';


// create a component
const MainStack = () => {

    const Stack = createStackNavigator();

    return (
     <Stack.Navigator
     screenOptions={{
        headerShown : false
     }}
       initialRouteName = 'Splash'
     >
        <Stack.Screen name='Tab' component={Tabs} />
        <Stack.Screen name='Splash' component={SplashScreen}  />
        <Stack.Screen name='Onboarding' component={Onboarding}  />
        <Stack.Screen name='NewsDetails' component={NewsDetails}  />
        <Stack.Screen name='CategoryList' component={CategoryList}  />
        <Stack.Screen name='About' component={About}  />
     </Stack.Navigator>
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
export default MainStack;
