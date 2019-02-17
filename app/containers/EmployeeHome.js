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

const EmployeeHome = ({ navigation, ...props }) => {
  return (
    <Row style={styles.row}>
      <HomeButton
        success
        text="REGISTER REFUGEES"
        onPress={() => navigation.navigate('EmployeeRegister')}
      />
      <HomeButton
        text="VIEW REFUGEES"
        onPress={() => navigation.navigate('EmployeeRefugees')}
      />
      <HomeButton
        warning
        text="PENDING PROJECTS"
        onPress={() => navigation.navigate('EmployeePending')}
      />
      <HomeButton
        danger
        text="ACCEPTED PROJECTS"
        onPress={() => navigation.navigate('EmployeeAccepted')}
      />
    </Row>
  );
};

EmployeeHome.navigationOptions = ({ navigation }) => ({
  header: <NavigationHeader title="CRIBDS" right={<HeaderPicker />} />
});

export default EmployeeHome;
