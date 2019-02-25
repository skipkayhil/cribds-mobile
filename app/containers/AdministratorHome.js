import React from 'react';
import { StyleSheet } from 'react-native';
import { Row } from 'native-base';
import { HeaderPicker, HomeButton, NavigationHeader } from '../components';

const styles = StyleSheet.create({
  row: {
    flexWrap: 'wrap',
    padding: 5
  }
});

const AdministratorHome = props => {
  return (
    <Row style={styles.row}>
      <HomeButton
        success
        text="REGISTER EMPLOYEE"
        onPress={() => props.navigation.navigate('RegisterEmployee')}
      />
      <HomeButton
        text="LIST EMPLOYEES"
        onPress={() => props.navigation.navigate('ViewEmployees')}
      />
      <HomeButton
        warning
        text="LIST PROJECTS"
        onPress={() => props.navigation.navigate('ViewProjects')}
      />
    </Row>
  );
};

AdministratorHome.navigationOptions = ({ navigation }) => ({
  header: <NavigationHeader title="CRIBDS" right={<HeaderPicker />} />
});

export default AdministratorHome;
