//import liraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons';
import Account from '../screens/Account';
import Favorite from '../screens/Favorite';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import { Text } from 'react-native';

// create a component
const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
        screenOptions={{
            activeTintColor:'#062743',
            inactiveTintColor:'#9ea9b3',
            tabBarStyle:{
                marginVertical:10,
                position:'absolute',
            },
            showLabel: false
        }}
        >
            <Tab.Screen
            name='Home'
            component={Home}
            // options={
            //     {
            //         tabBarIcon: ({size , color}) =>(
            //             <Icon name='home-sharp' size={size} color={color}/>
                    
            //         )
            //     }

            // }
            />
            <Tab.Screen
            name='Favorite'
            component={Favorite}
            // options={
            //     {
            //         tabBarIcon: ({size , color}) =>(
            //             <Icon name='heart-sharp' size={size} color={color}/>
            //         )
            //     }
            // }
            />
            <Tab.Screen
            name='Notification'
            component={Notification}
            // options={
            //     {
            //         tabBarIcon: ({size , color}) =>(
            //             <Icon name='notifications-sharp' size={size} color={color}/>
            //         )
            //     }
            // }
            />
            <Tab.Screen
            name='Account'
            component={Account}
            // options={
            //     {
            //         tabBarIcon: ({size , color}) =>(
            //             <Icon name='person-sharp' size={size} color={color}/>
            //         )
            //     }
            // }
            />
        </Tab.Navigator>
    );
};


export default Tabs;
