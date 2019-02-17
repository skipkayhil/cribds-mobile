import React from 'react';
import { StyleSheet } from 'react-native';
import { Row } from 'native-base';
import { NavigationHeader, HomeButton, HeaderPicker } from '../components';
import { getRefugee } from '../config/FakeData';

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
        text="VIEW PROFILE"
        onPress={() =>
          navigate('RefugeeProfile', {
            profile: getRefugee(0)
          })
        }
      />
      <HomeButton
        success
        text="CREATE PROJECT"
        onPress={() => navigate('RefugeeCreate')}
      />
      <HomeButton
        success
        text="VIEW PROJECTS"
        onPress={() => navigate('RefugeeProject')}
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
