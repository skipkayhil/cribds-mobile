import { createStackNavigator } from 'react-navigation';
import EmployeeHome from '../containers/EmployeeHome';
import RegisterRefugee from '../containers/RegisterRefugee';

export default createStackNavigator(
  {
    EmployeeHome: EmployeeHome,
    EmployeeRegister: RegisterRefugee
  },
  {
    initialRouteName: 'EmployeeHome'
  }
);
