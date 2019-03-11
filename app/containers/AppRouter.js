import React from 'react';
import { connect } from 'react-redux';
import {
  AdminNavigator,
  EmployeeNavigator,
  RefugeeNavigator
} from '../navigators';
import LoginScreen from './LoginScreen';

const AppRouter = props => {
  switch (props.user.userType) {
    case 'admin':
      return <AdminNavigator />;
    case 'employee':
      return <EmployeeNavigator />;
    case 'refugee':
      return <RefugeeNavigator />;
    default:
      return <LoginScreen />;
  }
};

const mapStateToProps = state => ({
  user: state.app.user
});

export default connect(mapStateToProps)(AppRouter);
