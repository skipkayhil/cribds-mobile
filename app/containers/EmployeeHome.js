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

const EmployeeHome = props => {
  return (
    <Row style={styles.row}>
      <HomeButton
        success
        text="REGISTER REFUGEES"
        onPress={() => props.navigation.navigate('EmployeeRegister')}
      />
      <HomeButton primary text="VIEW REFUGEES" />
      <HomeButton warning text="PENDING PROJECTS" />
      <HomeButton danger text="ACCEPTED PROJECTS" />
    </Row>
  );
};

EmployeeHome.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      title="CRIBDS"
      right={<HeaderPicker navigation={navigation} />}
    />
  )
});

export default EmployeeHome;
