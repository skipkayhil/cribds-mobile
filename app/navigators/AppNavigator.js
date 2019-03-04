import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from '../containers/LoginScreen';
import { EmployeeNavigator, RefugeeNavigator, AdminNavigator } from '.';

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      Employee: EmployeeNavigator,
      Refugee: RefugeeNavigator,
      admin: AdminNavigator
    },
    {
      initialRouteName: 'Login'
    }
  )
);

export default AppContainer;
