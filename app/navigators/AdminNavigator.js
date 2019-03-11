import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/Home';
import RegisterEmployee from '../containers/RegisterEmployee';
import AdministrateProjects from '../containers/AdministrateProjects';
import ListEmployees from '../containers/ListEmployees';
import ViewEmployee from '../containers/ViewEmployee';
import ManageEmployee from '../containers/ManageEmployee';
import AdministratorViewProject from '../containers/AdministratorViewProject';

export default createAppContainer(
  createStackNavigator(
    {
      AdministratorHome: Home,
      RegisterEmployee: RegisterEmployee,
      ViewProjects: AdministrateProjects,
      ViewEmployees: ListEmployees,
      AdministratorEmployeeView: ViewEmployee,
      AdministratorEditEmployee: ManageEmployee,
      AdministrateProjectDetail: AdministratorViewProject
    },
    {
      initialRouteName: 'AdministratorHome'
    }
  )
);
