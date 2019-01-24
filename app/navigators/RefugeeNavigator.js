import { createStackNavigator } from 'react-navigation';
import RefugeeHome from '../containers/RefugeeHome';
import CreateProject from '../containers/CreateProject';

export default createStackNavigator(
  {
    RefugeeHome: RefugeeHome,
    RefugeeCreate: CreateProject
  },
  {
    initialRouteName: 'RefugeeHome'
  }
);
