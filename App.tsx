import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import SearchScreen from './src/screens/SearchScreen';

const App = () => (
  <Provider store={store}>
    <SearchScreen />
  </Provider>
);

export default App;
