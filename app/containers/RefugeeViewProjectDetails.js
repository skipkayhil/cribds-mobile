import React from 'react';
import { Text } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const RefugeeViewProjectDetails = props => {
  return (
    <React.Fragment>
      <Text> Title: </Text>
      <Text> My Project </Text>
      <Text> Created by: </Text>
      <Text> John Doe </Text>
      <Text> Project Status: </Text>
      <Text> Pending/Accepted/Rejected(reason for rejection) </Text>
      <Text> Location: </Text>
      <Text> Camp A </Text>
      <Text> Details: </Text>
      <Text> Here's the relevant information </Text>
      <Text> Contact info: </Text>
      <Text> Phone Number or Email or something </Text>
    </React.Fragment>
  );
};

RefugeeViewProjectDetails.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      title="Project Details"
      left={<BackButton navigation={navigation} />}
    />
  )
});

export default RefugeeViewProjectDetails;
