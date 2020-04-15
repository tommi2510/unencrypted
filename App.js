import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import Stack from './src/navigator';
import store from './src/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Stack />
    </Provider>
  );
};

export default App;
