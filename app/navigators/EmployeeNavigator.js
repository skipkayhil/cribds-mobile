import { createStackNavigator } from 'react-navigation';
import EmployeeHome from '../containers/EmployeeHome';

export default createStackNavigator(
  {
    EmployeeHome: EmployeeHome
  },
  {
    initialRouteName: 'EmployeeHome'
  }
);
