import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from '../containers/LoginConnected';
import { EmployeeNavigator, RefugeeNavigator, AdminNavigator } from '.';

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
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
