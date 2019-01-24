import { createStackNavigator } from 'react-navigation';
import EmployeeHome from '../containers/AdministratorHome';
import RegisterEmployee from '../containers/RegisterEmployee';
import ViewEmployee from '../containers/ViewEmployee';
import ListEmployees from '../containers/ListEmployees';

export default createStackNavigator(
  {
    AdministratorHome: AdministratorHome,
    AdministratorRegister: RegisterEmployee,
    AdministratorEmployees: ListEmployees,
    AdministratorEmployeeView: ViewEmployee
  },
  {
    initialRouteName: 'AdministratorHome'
  }
);
