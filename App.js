import React from 'react';
import {View, Text} from 'react-native';

import {
  AuthNavigation,
  StackNavigation,
} from './src/navigation/Stack/MainStack';
import store, {persistor} from './src/store';

import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  const userType = useSelector(state => state.authReducer.usertype);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {userType === true ? <StackNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default AppWrapper;
