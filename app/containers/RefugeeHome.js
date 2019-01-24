import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Picker,
  Right,
  Row,
  Text,
  Title
} from 'native-base';

const styles = StyleSheet.create({
  row: {
    flexWrap: 'wrap'
  },
  button: {
    margin: 10,
    width: 167,
    height: 167
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

const RefugeeHome = props => {
  return (
    <Row style={styles.row}>
      <Button
        block
        success
        style={styles.button}
        onPress={() => props.navigation.navigate('CreateProject')}
      >
        <Text style={styles.text}>Create Project</Text>
      </Button>
    </Row>
  );
};

RefugeeHome.navigationOptions = ({ navigation }) => {
  function onValueChange(value) {
    switch (value) {
      case 'logout':
        navigation.navigate('Login');
        break;
    }
  }

  return {
    header: (
      <Header>
        <Left />
        <Body>
          <Title>CRIBDS</Title>
        </Body>
        <Right>
          <Picker
            mode="dropdown"
            iosHeader="Menu"
            iosIcon={<Icon name="more" />}
            style={{ width: undefined }}
            onValueChange={onValueChange}
          >
            <Picker.Item label="Logout" value="logout" />
          </Picker>
        </Right>
      </Header>
    )
  };
};

export default RefugeeHome;
