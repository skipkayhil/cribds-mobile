import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Button, Icon, Form, Item, Input, Label } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const RefugeeProfile = ({ refugee }) => {
  if (!refugee)
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0098ff" />
      </View>
    );

  const dob = refugee.dob && refugee.dob.toDate();
  return (
    <Form style={{ marginRight: 15 }}>
      <Item floatingLabel>
        <Label>Name</Label>
        <Input disabled value={`${refugee.first_name} ${refugee.last_name}`} />
      </Item>
      <Item floatingLabel>
        <Label>Email</Label>
        <Input disabled value={refugee.email} />
      </Item>
      <Item floatingLabel>
        <Label>Date of Birth</Label>
        <Input
          disabled
          value={`${dob.getFullYear()}-${dob.getMonth() + 1}-${dob.getDate()}`}
        />
      </Item>
      <Item floatingLabel>
        <Label>Camp</Label>
        <Input disabled value={refugee.camp} />
      </Item>
      <Item floatingLabel>
        <Label>Hometown</Label>
        <Input disabled value={refugee.hometown} />
      </Item>
      <Item floatingLabel>
        <Label>Phone</Label>
        <Input disabled value={refugee.phone} />
      </Item>
      <Item floatingLabel>
        <Label>Profession</Label>
        <Input disabled value={refugee.profession} />
      </Item>
    </Form>
  );
};

RefugeeProfile.navigationOptions = ({ navigation: { navigate, state } }) => {
  const right = state.params.editable ? (
    <Button
      transparent
      onPress={() => navigate('EditProfile', { uid: state.params.uid })}
    >
      <Icon name="create" />
    </Button>
  ) : null;

  return {
    header: (
      <NavigationHeader
        title={`Profile #${state.params.uid}`}
        left={<BackButton />}
        right={right}
      />
    )
  };
};

const mapStateToProps = (
  { firestore: { data } },
  { navigation: { state } }
) => {
  const refugee = data.refugees && data.refugees[state.params.uid];
  return refugee
    ? {
        refugee: {
          ...refugee,
          camp: data.camps[refugee.camp].name,
          hometown: data.towns[refugee.hometown].town
        }
      }
    : {};
};

export default compose(
  firestoreConnect(props => [
    {
      collection: 'refugees',
      doc: props.navigation.state.params.uid
    }
  ]),
  connect(mapStateToProps)
)(RefugeeProfile);
