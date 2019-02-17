import React from 'react';
import { Button, Content, Text, Form, Item, Label, Input } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const RegisterRefugee = props => {
  return (
    <Content>
      <Form style={{ marginRight: 15 }}>
        <Item floatingLabel>
          <Label>Name</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input keyboardType="email-address" />
        </Item>
      </Form>
      <Button
        full
        success
        style={{ marginTop: 30 }}
        onPress={() => props.navigation.navigate('EmployeeHome')}
      >
        <Text>Submit</Text>
      </Button>
    </Content>
  );
};

RegisterRefugee.navigationOptions = ({ navigation }) => ({
  header: <NavigationHeader left={<BackButton />} title="Register Refugee" />
});

export default RegisterRefugee;
