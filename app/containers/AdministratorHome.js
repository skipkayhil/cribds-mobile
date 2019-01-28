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
        onPress={() => props.navigation.navigate('AdministratorRegister')}
      />
      <HomeButton
        success
        text="LIST PROJECTS"
        onPress={() => props.navigation.navigate('AdministratorProjects')}
      />
      <HomeButton
        success
        text="LIST EMPLOYEES"
        onPress={() => props.navigation.navigate('AdministratorEmployees')}
      />
    </Row>
  );
};

AdministratorHome.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      title="CRIBDS"
      right={<HeaderPicker navigation={navigation} />}
    />
  )
});

export default AdministratorHome;
