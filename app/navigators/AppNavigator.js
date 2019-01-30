import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../containers/LoginScreen';
import { EmployeeNavigator, RefugeeNavigator, AdminNavigator } from '.';

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginScreen,
      Employee: EmployeeNavigator,
      Refugee: RefugeeNavigator,
      Admin: AdminNavigator
    },
    {
      initialRouteName: 'Login'
    }
  )
);

export default AppContainer;
