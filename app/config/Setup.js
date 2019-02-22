import * as Expo from 'expo';
import React, { Component } from 'react';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import AppNavigator from '../navigators/AppNavigator';

const store = configureStore();

export default class Setup extends Component {
  constructor() {
    super();

    this.state = {
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    });

    this.setState({ isReady: true });
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.isReady ? <AppNavigator /> : <Expo.AppLoading />}
      </Provider>
    );
  }
}
