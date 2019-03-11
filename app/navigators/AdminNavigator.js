import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/Home';
import RegisterEmployee from '../containers/RegisterEmployee';
import AdministrateProjects from '../containers/AdministrateProjects';
import ViewEmployees from '../containers/ViewEmployees';
import EmployeeProfile from '../containers/EmployeeProfile';
import ManageEmployee from '../containers/ManageEmployee';
import AdministratorViewProject from '../containers/AdministratorViewProject';

export default createAppContainer(
  createStackNavigator(
    {
      AdministratorHome: Home,
      RegisterEmployee: RegisterEmployee,
      ViewProjects: AdministrateProjects,
      ViewEmployees: ViewEmployees,
      EmployeeProfile: EmployeeProfile,
      AdministratorEditEmployee: ManageEmployee,
      AdministrateProjectDetail: AdministratorViewProject
    },
    {
      initialRouteName: 'AdministratorHome'
    }
  )
);
