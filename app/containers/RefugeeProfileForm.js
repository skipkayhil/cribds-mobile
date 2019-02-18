import React from 'react';
import { Form, Item, Label, Input, Button, Text } from 'native-base';
import { BackButton, NavigationHeader } from '../components';
import { updateRefugee, getRefugee, createRefugee } from '../config/FakeData';

class RefugeeProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.navigation.state.params.id,
      profile: getRefugee(props.navigation.state.params.id) || {}
    };
  }

  onSubmit() {
    if (this.props.navigation.state.params.create) {
      createRefugee(this.state.profile);
      this.props.navigation.goBack();
    } else {
      updateRefugee(this.state.id, this.state.profile);
      this.props.navigation.navigate('RefugeeProfile', { id: this.state.id });
    }
  }

  render() {
    const { profile } = this.state;
    return (
      <>
        <Form style={{ marginRight: 15, marginBottom: 15 }}>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input
              value={profile.name}
              onChangeText={text =>
                this.setState({ profile: { ...profile, name: text } })
              }
            />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              value={profile.email}
              onChangeText={text =>
                this.setState({ profile: { ...profile, email: text } })
              }
            />
          </Item>
          <Item floatingLabel>
            <Label>Date of Birth</Label>
            <Input
              value={profile.dob}
              onChangeText={text =>
                this.setState({ profile: { ...profile, dob: text } })
              }
            />
          </Item>
          <Item floatingLabel>
            <Label>Camp</Label>
            <Input
              value={profile.camp}
              onChangeText={text =>
                this.setState({ profile: { ...profile, camp: text } })
              }
            />
          </Item>
          <Item floatingLabel>
            <Label>Hometown</Label>
            <Input
              value={profile.hometown}
              onChangeText={text =>
                this.setState({ profile: { ...profile, hometown: text } })
              }
            />
          </Item>
          <Item floatingLabel>
            <Label>Phone</Label>
            <Input
              value={profile.phone}
              onChangeText={text =>
                this.setState({ profile: { ...profile, phone: text } })
              }
            />
          </Item>
          <Item floatingLabel>
            <Label>Profession</Label>
            <Input
              value={profile.profession}
              onChangeText={text =>
                this.setState({ profile: { ...profile, profession: text } })
              }
            />
          </Item>
        </Form>
        <Button full success onPress={() => this.onSubmit()}>
          <Text>
            {this.props.navigation.state.params.create ? 'Register' : 'Edit'}
          </Text>
        </Button>
      </>
    );
  }
}

RefugeeProfileForm.navigationOptions = ({ navigation }) => {
  const { create } = navigation.state.params || {};
  const title = create
    ? 'Register Refugee'
    : `Edit Profile #${navigation.state.params.id}`;

  return {
    header: <NavigationHeader title={title} left={<BackButton />} />
  };
};

export default RefugeeProfileForm;
