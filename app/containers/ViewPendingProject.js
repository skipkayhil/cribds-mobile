import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Button, Icon, Input, Form, Item, Label } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const ViewPendingProject = props => {
  return (
  <Form style={{ marginRight: 15 }}>
    <Item floatingLabel>
      <Label>Title:</Label>
      <Input disabled value={props.project.title} />
    </Item>
    <Item floatingLabel>
      <Label>Creator:</Label>
      <Input disabled value={props.refugee.name} />
    </Item>
    <Item floatingLabel>
      <Label>Camp:</Label>
      <Input disabled value={props.project.camp} />
    </Item>
    <Item floatingLabel>
      <Label>Details:</Label>
      <Input disabled value={props.project.details} />
    </Item>
  </Form>
)};

ViewPendingProject.navigationOptions = ({ navigation }) => ({
  header: <NavigationHeader title="Project Details" left={<BackButton />} />
});

const mapStateToProps = (state, props) => {
  const project = (state.firestore.data.projects &&
      state.firestore.data.projects[props.navigation.state.params.uid]) ||
    {};
  return ({
    project,
    refugee: (state.firestore.data.refugees && project &&
        state.firestore.data.refugees[project.creator]) ||
      {},
})};

export default compose(
  firestoreConnect(props => [
    { collection: 'projects', doc: props.navigation.state.params.uid },
    { collection: 'refugees' }
  ]),
  connect(mapStateToProps)
)(ViewPendingProject);
