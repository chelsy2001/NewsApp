// import React from 'react';
// import { Provider } from 'react-redux';
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import RootNavigation from './Navigation';
// import reduxStore from './redux';

// export const reduxPersistStore = persistStore(reduxStore);

// const App = () => {
// return (
//     // <SafeAreaView style={{flex:1}}>
//     //  <RootNavigation />
//     // </SafeAreaView>
//     <Provider store={reduxStore}>
//       <PersistGate loading={null} persistor={reduxPersistStore}>
//         <RootNavigation></RootNavigation>
//       </PersistGate>
//   </Provider>

//   );
// }

// export default App;

// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from './Navigation';
import reduxStore from './redux/index';

const reduxPersistStore = persistStore(reduxStore);

const App = () => {
    return (
        <Provider store={reduxStore}>
            <PersistGate loading={null} persistor={reduxPersistStore}>
                <RootNavigation />
            </PersistGate>
        </Provider>
    );
}

export default App;
