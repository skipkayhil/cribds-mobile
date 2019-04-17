import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/Home';
import PendingProjects from '../containers/PendingProjects';
import AcceptedProjects from '../containers/AcceptedProjects';
import ViewRefugees from '../containers/ViewRefugees';
import RefugeeProfile from '../containers/RefugeeProfile';
import RefugeeProfileForm from '../containers/RefugeeProfileForm';
import ViewAcceptedProject from '../containers/ViewAcceptedProject';
import ViewPendingProject from '../containers/ViewPendingProject';

export default createAppContainer(
  createStackNavigator(
    {
      EmployeeHome: Home,
      EmployeePending: PendingProjects,
      EmployeeAccepted: AcceptedProjects,
      EmployeeRefugees: ViewRefugees,
      RefugeeProfile: { screen: RefugeeProfile, params: { editable: true } },
      EditProfile: { screen: RefugeeProfileForm, params: { create: false } },
      RegisterRefugee: { screen: RefugeeProfileForm, params: { create: true } },
      EmployeeViewAcceptedProject: ViewAcceptedProject,
      EmployeeViewPendingProject: ViewPendingProject
    },
    {
      initialRouteName: 'EmployeeHome'
    }
  )
);
