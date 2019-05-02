import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/config/configureStore';
import Setup from './app/config/Setup';

const store = configureStore();

const App = props => (
  <Provider store={store}>
    <Setup />
  </Provider>
);

export default App;
