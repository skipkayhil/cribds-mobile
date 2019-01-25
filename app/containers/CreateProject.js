import React from 'react';
import { Button, Text } from 'native-base';
import { TextInput } from 'react-native';
import { NavigationHeader, BackButton } from '../components';

const CreateProject = props => {
  return (
    <React.Fragment>
      <Text> Title: </Text>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1 }}>
        My Project
      </TextInput>
      <Text> Created by: </Text>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1 }}>
        John Doe
      </TextInput>
      <Text> Location: </Text>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1 }}>
        Camp A
      </TextInput>
      <Text> Details: </Text>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1 }}>
        Here's the relevant information
      </TextInput>
      <Text> Contact info: </Text>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1 }}>
        Phone Number or Email or something
      </TextInput>
      <Button
        full
        success
        onPress={() => props.navigation.navigate('RefugeeHome')}
      >
        <Text>Submit Project (not implemented yet)</Text>
      </Button>
    </React.Fragment>
  );
};

CreateProject.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      title="Create Project"
      left={<BackButton navigation={navigation} />}
    />
  )
});

export default CreateProject;
