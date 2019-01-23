import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './app/containers/LoginScreen';
import EmployeeNavigator from './app/navigators/EmployeeNavigator';

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginScreen,
      Employee: EmployeeNavigator
    },
    {
      initialRouteName: 'Login'
    }
  )
);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
