import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Text, Content, List, ListItem } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const RefugeeViewProject = props => (
  <Content>
    <List>
      {props.projects.map((v, i) => (
        <ListItem
          key={i}
          onPress={() =>
            props.navigation.navigate('RefugeeProjectDetails', { uid: v.id })
          }
        >
          <Text>{v.title}</Text>
        </ListItem>
      ))}
    </List>
  </Content>
);
RefugeeViewProject.navigationOptions = ({ navigation }) => {
  return {
    header: <NavigationHeader title="Project List" left={<BackButton />} />
  };
};

const mapStateToProps = state => ({
  projects: state.firestore.ordered.projects || []
});

export default compose(
  firestoreConnect(['projects']),
  connect(mapStateToProps)
)(RefugeeViewProject);