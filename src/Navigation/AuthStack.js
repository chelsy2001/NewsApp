import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import About from '../screens/About';
import CategoryList from '../screens/CategoryList';
import Login from '../screens/Login';
import NewsDetails from '../screens/NewsDetails';
import Onboarding from '../screens/Onboarding';
import Register from '../screens/Register';
import SplashScreen from '../screens/SplashScreen';
import Tabs from './Tabs';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// create a component
const AuthStack = ({...props}) => {
   console.log("onboarding status", props.isOnboardingDisabled);

   const {isOnboardingDisabled} = props;

    const Stack = createNativeStackNavigator();


    return (
     <Stack.Navigator
     screenOptions={{
        headerShown : false
     }}
     initialRouteName={isOnboardingDisabled ? 'Splash' : 'Onboarding'}
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

AuthStack.propTypes = {
   isOnboardingDisabled: PropTypes.bool.isRequired
};


const mapStateToProps = (state) => {
   return {
      isOnboardingDisabled: state.auth.isOnboardingDisabled
   }
}

export default connect(mapStateToProps)(AuthStack);
