import * as Expo from 'expo';
import React, { Component } from 'react';
import { compose } from 'redux';
import { withFirestore } from 'react-redux-firebase';
import { Root } from 'native-base';
import { connect } from 'react-redux';
import AppRouter from '../containers/AppRouter';

class Setup extends Component {
  state = {
    isReady: false
  };

  componentWillMount() {
    this.loadFonts();
  }

  componentDidMount() {
    this.props.firestore.get('camps');
    this.props.firestore.get('towns');
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
    return this.state.isReady && this.props.auth.isLoaded ? (
      <Root>
        <AppRouter />
      </Root>
    ) : (
      <Expo.AppLoading />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default compose(
  withFirestore,
  connect(mapStateToProps)
)(Setup);
