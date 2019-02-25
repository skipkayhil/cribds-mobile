import React from 'react';
import { StyleSheet } from 'react-native';
import { Row } from 'native-base';
import { NavigationHeader, HomeButton, HeaderPicker } from '../components';

const styles = StyleSheet.create({
  row: {
    flexWrap: 'wrap',
    padding: 5
  }
});

const getButtons = user =>
  ({
    Refugee: [
      { text: 'MY PROFILE', route: 'RefugeeProfile', param: { id: user.id } },
      { text: 'OTHER PROFILES', route: 'ViewRefugees', param: { id: user.id } },
      { text: 'CREATE PROJECT', route: 'RefugeeCreate', param: {} },
      { text: 'VIEW PROJECTS', route: 'RefugeeProject', param: {} }
    ],
    Employee: [
      { text: 'REGISTER REFUGEES', route: 'RegisterRefugee', param: {} },
      { text: 'VIEW REFUGEES', route: 'EmployeeRefugees', param: {} },
      { text: 'PENDING PROJECTS', route: 'EmployeePending', param: {} },
      { text: 'ACCEPTED PROJECTS', route: 'EmployeeAccepted', param: {} }
    ],
    Admin: [
      { text: 'REGISTER EMPLOYEE', route: 'RegisterEmployee', param: {} },
      { text: 'LIST EMPLOYEES', route: 'ViewEmployees', param: {} },
      { text: 'LIST PROJECTS', route: 'ViewProjects', params: {} }
    ]
  }[user.userType]);

const Home = props => {
  const { navigate } = props.navigation;

  return (
    <Row style={styles.row}>
      {getButtons(props.user).map((v, i) => (
        <HomeButton
          key={i}
          success={i % 4 === 0}
          primary={i % 4 === 1}
          warning={i % 4 === 2}
          danger={i % 4 === 3}
          text={v.text}
          onPress={() => navigate(v.route, v.param)}
        />
      ))}
    </Row>
  );
};

Home.navigationOptions = ({ navigation }) => ({
  header: <NavigationHeader title="CRIBDS" right={<HeaderPicker />} />
});

export default Home;
