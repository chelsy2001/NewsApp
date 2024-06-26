import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Onboarding from '../screens/Onboarding';
import NewsDetails from '../screens/NewsDetails';
import CategoryList from '../screens/CategoryList';
import About from '../screens/About';

// create a component
const AuthStack = () => {

    const Stack = createNativeStackNavigator();


    return (
     <Stack.Navigator
     screenOptions={{
        headerShown : false
     }}
     initialRouteName='Splash'
     >
      <Stack.Screen name='Splash' component={SplashScreen}  />
       <Stack.Screen name='Tab' component={Tabs} />
        <Stack.Screen  name='Login' component={Login} />
        <Stack.Screen  name='Register' component={Register} />
        <Stack.Screen name='Onboarding' component={Onboarding}  />
        <Stack.Screen name='NewsDetails' component={NewsDetails}  />
        <Stack.Screen name='CategoryList' component={CategoryList}  />
        <Stack.Screen name='About' component={About}  />
     </Stack.Navigator>
    );
};

export default AuthStack;
