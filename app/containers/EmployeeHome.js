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
  Text
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
    fontWeight: 'bold'
  }
});

const EmployeeHome = props => {
  return (
    <>
      <Header>
        <Left />
        <Body>
          <Text>CRIBDS</Text>
        </Body>
        <Right>
          <Picker
            mode="dropdown"
            iosHeader="Menu"
            iosIcon={<Icon name="more" />}
            style={{ width: undefined }}
            onValueChange={() => {}}
          >
            <Picker.Item label="Logout" value="key0" />
          </Picker>
        </Right>
      </Header>
      <Row style={styles.row}>
        <Button block success style={styles.button}>
          <Text style={styles.text}>REGISTER REFUGEES</Text>
        </Button>
        <Button block primary style={styles.button}>
          <Text>VIEW REFUGEES</Text>
        </Button>
        <Button block warning style={styles.button}>
          <Text>PENDING PROJECTS</Text>
        </Button>
        <Button block danger style={styles.button}>
          <Text>ACCEPTED PROJECTS</Text>
        </Button>
      </Row>
    </>
  );
};

export default EmployeeHome;
