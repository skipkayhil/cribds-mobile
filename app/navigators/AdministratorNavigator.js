import { createStackNavigator } from 'react-navigation';
import AdministratorHome from '../containers/AdministratorHome';
import RegisterEmployee from '../containers/RegisterEmployee';
import AdministrateProjects from '../containers/AdministrateProjects';
import ListEmployees from '../containers/ListEmployees';

export default createStackNavigator(
  {
    AdministratorHome: AdministratorHome,
    AdministratorRegister: RegisterEmployee,
    AdministratorProjects: AdministrateProjects,
    AdministratorEmployees: ListEmployees
  },
  {
    initialRouteName: 'AdministratorHome'
  }
);
