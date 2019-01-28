import { createStackNavigator } from 'react-navigation';
import EmployeeHome from '../containers/EmployeeHome';
import RegisterRefugee from '../containers/RegisterRefugee';
import PendingProjects from '../containers/PendingProjects';
import AcceptedProjects from '../containers/AcceptedProjects';
import ViewRefugees from '../containers/ViewRefugees';

export default createStackNavigator(
  {
    EmployeeHome: EmployeeHome,
    EmployeeRegister: RegisterRefugee,
    EmployeePending: PendingProjects,
    EmployeeAccepted: AcceptedProjects,
    EmployeeRefugees: ViewRefugees
  },
  {
    initialRouteName: 'EmployeeHome'
  }
);
