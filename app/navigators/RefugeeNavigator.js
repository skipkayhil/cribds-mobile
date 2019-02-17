import { createStackNavigator } from 'react-navigation';
import RefugeeHome from '../containers/RefugeeHome';
import CreateProject from '../containers/CreateProject';
import RefugeeViewProject from '../containers/RefugeeViewProject';
import RefugeeProfile from '../containers/RefugeeProfile';
import RefugeeViewProjectDetails from '../containers/RefugeeViewProjectDetails';
import RefugeeProfileEdit from '../containers/RefugeeProfileEdit';

export default createStackNavigator(
  {
    RefugeeHome: RefugeeHome,
    RefugeeProject: RefugeeViewProject,
    RefugeeCreate: CreateProject,
    RefugeeProfile: RefugeeProfile,
    RefugeeProjectDetails: RefugeeViewProjectDetails,
    RefugeeEditProf: RefugeeProfileEdit
  },
  {
    initialRouteName: 'RefugeeHome'
  }
);
