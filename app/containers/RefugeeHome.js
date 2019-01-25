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

const RefugeeHome = props => {
  return (
    <Row style={styles.row}>
      <HomeButton
        success
        text="VIEW PROFILE"
        onPress={() => props.navigation.navigate('RefugeeProfile')}
      />
      <HomeButton
        success
        text="CREATE PROJECT"
        onPress={() => props.navigation.navigate('RefugeeCreate')}
      />
      <HomeButton
        success
        text="VIEW PROJECTS"
        onPress={() => props.navigation.navigate('RefugeeProject')}
      />
    </Row>
  );
};

RefugeeHome.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      title="CRIBDS"
      right={<HeaderPicker navigation={navigation} />}
    />
  )
});

export default RefugeeHome;
