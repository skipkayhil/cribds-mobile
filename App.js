import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './app/containers/LoginScreen';
import EmployeeNavigator from './app/navigators/EmployeeNavigator';
import RefugeeNavigator from './app/navigators/RefugeeNavigator';
import AdministratorNavigator from './app/navigators/AdministratorNavigator';

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginScreen,
      Employee: EmployeeNavigator,
      Refugee: RefugeeNavigator,
      Admin: AdministratorNavigator
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
