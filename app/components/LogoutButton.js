import React from 'react';
import { withFirebase } from 'react-redux-firebase';
import { Button, Icon } from 'native-base';

const LogoutButton = ({ firebase }) => (
  <Button transparent onPress={() => firebase.logout()}>
    <Icon name="log-out" />
  </Button>
);

export default withFirebase(LogoutButton);
