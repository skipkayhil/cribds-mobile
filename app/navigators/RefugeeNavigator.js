import { createStackNavigator } from 'react-navigation';
import RefugeeHome from '../containers/RefugeeHome';
import CreateProject from '../containers/CreateProject';
import SelfRefugeeProfile from '../containers/SelfRefugeeProfile';
import RefugeeViewProject from '../containers/RefugeeViewProject';
import RefugeeViewProjectDetails from '../containers/RefugeeViewProjectDetails';


export default createStackNavigator(
  {
    RefugeeHome: RefugeeHome,
    RefugeeProfile: SelfRefugeeProfile,
    RefugeeCreate: CreateProject,
    RefugeeProject: RefugeeViewProject,
    RefugeeProjectDetails: RefugeeViewProjectDetails
  },
  {
    initialRouteName: 'RefugeeHome'
  }
);
