import { createStackNavigator } from 'react-navigation';
import EmployeeHome from '../containers/AdministratorHome';
import RegisterEmployee from '../containers/RegisterEmployee';

export default createStackNavigator(
  {
    AdministratorHome: AdministratorHome,
    AdministratorRegister: RegisterEmployee
  },
  {
    initialRouteName: 'AdministratorHome'
  }
);
