import React from 'react';
import { Button, Text, List, Content } from 'native-base';
import { BackButton, NavigationHeader } from '../components';
import { buttonProjects } from '../components';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

const RefugeeViewProject = props => {
  return (
  	<Content><List>buttonProjects</List></Content>
  );
};

RefugeeViewProject.navigationOptions = ({ navigation }) => ({
  header: <NavigationHeader title="Project List" left={<BackButton/>}/>
});

export default RefugeeViewProject;
