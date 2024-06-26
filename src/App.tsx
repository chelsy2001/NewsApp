// App.js
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from './Navigation';
import reduxStore from './redux/index';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const reduxPersistStore = persistStore(reduxStore);

const App = () => {

    useEffect(()=>{
        EStyleSheet.build();
    },[]);
    
    return (
        <Provider store={reduxStore}>
            <PersistGate loading={null} persistor={reduxPersistStore}>
                <RootNavigation />
            </PersistGate>
        </Provider>
        // <View>
        //     <Text>solve ho ja </Text>
        // </View>
    );
}

export default App;
