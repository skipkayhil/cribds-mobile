import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Text, Content, List, ListItem } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const PendingProjects = props => (
  <Content>
    <List>
      {props.projects.map((v, i) => (
        <ListItem
          key={i}
          onPress={() =>
            props.navigation.navigate('EmployeeViewPendingProject', { uid: v.id })
          }
        >
          <Text>{v.title}</Text>
        </ListItem>
      ))}
    </List>
  </Content>
);

PendingProjects.navigationOptions = ({ navigation }) => {
  return {
    header: <NavigationHeader title="Pending Projects" left={<BackButton />} />
  };
};

const mapStateToProps = state => ({
  projects: state.firestore.ordered['pendingProjects'] || []
});

export default compose(
  firestoreConnect(props => [
    {collection: 'projects'},
    {collection: 'projects', where: ['status', '==', 'pending'],
    storeAs: 'pendingProjects'}

  ]),
  connect(mapStateToProps)
)(PendingProjects);