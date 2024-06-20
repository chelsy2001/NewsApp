import {persistCombineReducers} from 'redux-persist';
import constants from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
    key: constants.AsyncStorageKey,
    storage:AsyncStorage,
    blacklist: []
}

const appReducer = persistCombineReducers(config,{

});

const rootReducer = (state,action) => {
    return appReducer(state,action);
}

export default rootReducer;