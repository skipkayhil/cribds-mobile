import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Picker, Row } from 'native-base';
import { NavigationHeader, HomeButton } from '../components';

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

EmployeeHome.navigationOptions = ({ navigation }) => {
  function onValueChange(value) {
    switch (value) {
      case 'logout':
        navigation.navigate('Login');
        break;
    }
  }

  const right = (
    <Picker
      mode="dropdown"
      iosHeader="Menu"
      iosIcon={<Icon name="more" />}
      style={{ width: undefined }}
      onValueChange={onValueChange}
    >
      <Picker.Item label="Logout" value="logout" />
    </Picker>
  );

  return {
    header: <NavigationHeader title="CRIBDS" right={right} />
  };
};

export default EmployeeHome;
