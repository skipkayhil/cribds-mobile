import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/Home';
import RegisterEmployee from '../containers/RegisterEmployee';
import ViewEmployees from '../containers/ViewEmployees';
import EmployeeProfile from '../containers/EmployeeProfile';
import ManageEmployee from '../containers/ManageEmployee';

export default createAppContainer(
  createStackNavigator(
    {
      AdministratorHome: Home,
      RegisterEmployee: RegisterEmployee,
      ViewEmployees: ViewEmployees,
      EmployeeProfile: EmployeeProfile,
      AdministratorEditEmployee: ManageEmployee,
    },
    {
      initialRouteName: 'AdministratorHome'
    }
  )
);
