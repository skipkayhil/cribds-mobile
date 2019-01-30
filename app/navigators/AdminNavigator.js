import { createStackNavigator } from 'react-navigation';
import AdministratorHome from '../containers/AdministratorHome';
import RegisterEmployee from '../containers/RegisterEmployee';
import AdministrateProjects from '../containers/AdministrateProjects';
import ListEmployees from '../containers/ListEmployees';
import ViewEmployee from '../containers/ViewEmployee';
import ManageEmployee from '../containers/ManageEmployee';
import AdministratorViewProject from '../containers/AdministratorViewProject';


export default createStackNavigator(
  {
    AdministratorHome: AdministratorHome,
    AdministratorRegister: RegisterEmployee,
    AdministratorProjects: AdministrateProjects,
    AdministratorEmployees: ListEmployees,
    AdministratorEmployeeView: ViewEmployee,
    AdministratorEditEmployee: ManageEmployee,
    AdministrateProjectDetail: AdministratorViewProject
  },
  {
    initialRouteName: 'AdministratorHome'
  }
);
