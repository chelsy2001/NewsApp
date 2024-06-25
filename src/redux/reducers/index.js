import {persistCombineReducers} from 'redux-persist';
import Constants from '../../constants/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import exampleReducer from './exampleReducer';

const config = {
    key: Constants.AsyncStorageKey,
    storage: AsyncStorage,
    blacklist: []
}



const appReducer = persistCombineReducers(config, {
    example: exampleReducer,
});


const rootReducer = (state, action) => {
    return appReducer(state, action);
}



export default rootReducer;
