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
  const { navigate } = props.navigation;

  return (
    <Row style={styles.row}>
      <HomeButton
        success
        text="MY PROFILE"
        onPress={() =>
          navigate('RefugeeProfile', {
            id: 0
          })
        }
      />
      <HomeButton
        primary
        text="OTHER PROFILES"
        onPress={() =>
          navigate('ViewRefugees', {
            id: 0
          })
        }
      />
      <HomeButton
        warning
        text="CREATE PROJECT"
        onPress={() => navigate('RefugeeCreate')}
      />
      <HomeButton
        danger
        text="VIEW PROJECTS"
        onPress={() => navigate('RefugeeProject')}
      />
    </Row>
  );
};

RefugeeHome.navigationOptions = ({ navigation }) => ({
  header: <NavigationHeader title="CRIBDS" right={<HeaderPicker />} />
});

export default RefugeeHome;
