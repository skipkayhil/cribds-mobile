import React from 'react';
import { Button, Icon, Form, Item, Input, Label } from 'native-base';
import { BackButton, NavigationHeader } from '../components';
import { getRefugee } from '../config/FakeData';

const RefugeeProfile = props => {
  const { id } = props.navigation.state.params;
  const profile = getRefugee(id);

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
    </>
  );
};

RefugeeProfile.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      title={`Profile #${navigation.state.params.id}`}
      left={<BackButton />}
      right={
        <Button
          transparent
          onPress={() =>
            navigation.navigate('EditProfile', {
              id: navigation.state.params.id
            })
          }
        >
          <Icon name="create" />
        </Button>
      }
    />
  )
});

export default RefugeeProfile;
