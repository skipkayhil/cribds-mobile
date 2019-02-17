import React from 'react';
import { Button, Text } from 'native-base';
import { TextInput } from 'react-native';
import { BackButton, NavigationHeader } from '../components';

const RefugeeProfileEdit = props => {
  return (
    <React.Fragment>
      <Text> Name: </Text>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1 }}>
        John Doe
      </TextInput>
      <Text> Password: </Text>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1 }}>
        ****
      </TextInput>
      <Text> Email: </Text>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1 }}>
        refugee@email.here
      </TextInput>
      <Text> Phone #: </Text>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1 }}>
        ***-***-****
      </TextInput>
      <Button
        full
        success
        onPress={() => props.navigation.navigate('RefugeeProfile')}
      >
        <Text>Submit (Not implemented yet)</Text>
      </Button>
    </React.Fragment>
  );
};

RefugeeProfileEdit.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      title="Profile"
      left={<BackButton navigation={navigation} />}
    />
  )
});

export default RefugeeProfileEdit;
