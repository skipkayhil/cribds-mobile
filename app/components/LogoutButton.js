import React from 'react';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';
import { withFirebase } from 'react-redux-firebase';
import { Button, Icon } from 'native-base';

const LogoutButton = ({ navigation, firebase }) => (
  <Button
    transparent
    onPress={() => {
      firebase.logout().then(response => navigation.navigate('Login'));
    }}
  >
    <Icon name="log-out" />
  </Button>
);

export default compose(
  withNavigation,
  withFirebase
)(LogoutButton);
