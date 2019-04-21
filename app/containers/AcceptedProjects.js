import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Text, Content, List, ListItem } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const AcceptedProjects = props => (
  <Content>
    <List>
      {props.projects.map((v, i) => (
        <ListItem
          key={i}
          onPress={() =>
            props.navigation.navigate('EmployeeViewAcceptedProject', { uid: v.id })
          }
        >
          <Text>{v.title}</Text>
        </ListItem>
      ))}
    </List>
  </Content>
);

AcceptedProjects.navigationOptions = ({ navigation }) => {
  return {
    header: <NavigationHeader title="Accepted Projects" left={<BackButton />} />
  };
};

const mapStateToProps = (state, props) => ({
  projects: (state.firestore.ordered['acceptedProjects']) || []
});

export default compose(
  firestoreConnect(props => [
    {collection: 'projects', where: ['status', '==', 'approved'],
    storeAs: 'acceptedProjects'}

    ]),
  connect(mapStateToProps)
)(AcceptedProjects);