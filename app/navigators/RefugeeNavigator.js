import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/Home';
import CreateProject from '../containers/CreateProject';
import RefugeeViewProject from '../containers/RefugeeViewProject';
import RefugeeProfile from '../containers/RefugeeProfile';
import RefugeeViewProjectDetails from '../containers/RefugeeViewProjectDetails';
import RefugeeProfileForm from '../containers/RefugeeProfileForm';
import ViewRefugees from '../containers/ViewRefugees';

export default createAppContainer(
  createStackNavigator(
    {
      RefugeeHome: Home,
      RefugeeProject: RefugeeViewProject,
      RefugeeCreate: CreateProject,
      RefugeeProfile: RefugeeProfile,
      RefugeeProjectDetails: RefugeeViewProjectDetails,
      EditProfile: { screen: RefugeeProfileForm, params: { create: false } },
      ViewRefugees: ViewRefugees
    },
    {
      initialRouteName: 'RefugeeHome'
    }
  )
);
