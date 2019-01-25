import { createStackNavigator } from 'react-navigation';
import RefugeeHome from '../containers/RefugeeHome';
import CreateProject from '../containers/CreateProject';
import RefugeeViewProject from '../containers/RefugeeViewProject';
import SelfRefugeeProfile from '../containers/SelfRefugeeProfile';
import RefugeeViewProjectDetails from '../containers/RefugeeViewProjectDetails';
import RefugeeEditSelf from '../containers/RefugeeEditSelf';


export default createStackNavigator(
  {
    RefugeeHome: RefugeeHome,
    RefugeeProject: RefugeeViewProject,
    RefugeeCreate: CreateProject,
    RefugeeProfile: SelfRefugeeProfile,
    RefugeeProjectDetails: RefugeeViewProjectDetails,
    RefugeeEditProf: RefugeeEditSelf

  },
  {
    initialRouteName: 'RefugeeHome'
  }
);
