import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/Home';
import PendingProjects from '../containers/PendingProjects';
import AcceptedProjects from '../containers/AcceptedProjects';
import ViewRefugees from '../containers/ViewRefugees';
import RefugeeProfile from '../containers/RefugeeProfile';
import RefugeeProfileForm from '../containers/RefugeeProfileForm';

export default createAppContainer(
  createStackNavigator(
    {
      EmployeeHome: Home,
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
  )
);
