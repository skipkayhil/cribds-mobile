import { createStackNavigator } from 'react-navigation';
import EmployeeHome from '../containers/EmployeeHome';
import PendingProjects from '../containers/PendingProjects';
import AcceptedProjects from '../containers/AcceptedProjects';
import ViewRefugees from '../containers/ViewRefugees';
import RefugeeProfile from '../containers/RefugeeProfile';
import RefugeeProfileForm from '../containers/RefugeeProfileForm';

export default createStackNavigator(
  {
    EmployeeHome: EmployeeHome,
    EmployeePending: PendingProjects,
    EmployeeAccepted: AcceptedProjects,
    EmployeeRefugees: ViewRefugees,
    RefugeeProfile: RefugeeProfile,
    EditProfile: { screen: RefugeeProfileForm, params: { create: false } },
    RegisterRefugee: { screen: RefugeeProfileForm, params: { create: true } }
  },
  {
    initialRouteName: 'EmployeeHome'
  }
);
