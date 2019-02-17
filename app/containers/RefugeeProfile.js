import React from 'react';
import { Button, Form, Item, Input, Label, Text } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const RefugeeProfile = props => {
  const { profile } = props.navigation.state.params;

  return (
    <>
      <Form style={{ marginRight: 15 }}>
        <Item floatingLabel>
          <Label>Name</Label>
          <Input disabled value={profile.name} />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input disabled value={profile.email} />
        </Item>
        <Item floatingLabel>
          <Label>Date of Birth</Label>
          <Input disabled value={profile.dob} />
        </Item>
        <Item floatingLabel>
          <Label>Camp</Label>
          <Input disabled value={profile.camp} />
        </Item>
        <Item floatingLabel>
          <Label>Hometown</Label>
          <Input disabled value={profile.hometown} />
        </Item>
        <Item floatingLabel>
          <Label>Phone</Label>
          <Input disabled value={profile.phone} />
        </Item>
        <Item floatingLabel>
          <Label>Profession</Label>
          <Input disabled value={profile.profession} />
        </Item>
      </Form>
      <Button
        full
        success
        onPress={() => props.navigation.navigate('RefugeeEditProf')}
      >
        <Text>Update Info</Text>
      </Button>
    </>
  );
};

RefugeeProfile.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      title={`Profile #${navigation.state.params.profile.id}`}
      left={<BackButton />}
    />
  )
});

export default RefugeeProfile;
