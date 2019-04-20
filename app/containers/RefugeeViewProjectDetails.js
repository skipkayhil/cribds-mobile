import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Button, Icon, Input, Form, Item, Label, Text } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const RefugeeViewProjectDetails = props => {
  return (
  <Form style={{ marginRight: 15 }}>
    <Item floatingLabel>
      <Label>Title:</Label>
      <Input disabled value={props.project.title} />
    </Item>
    <Item floatingLabel>
      <Label>Creator:</Label>
      <Input disabled value={props.refugee.first_name + " " + props.refugee.last_name} />
    </Item>
    <Item floatingLabel>
      <Label>Project Type:</Label>
      <Input disabled value={props.type.name} />
    </Item>
    <Item floatingLabel>
      <Label>Submitted:</Label>
      <Input disabled value={props.project.submission_date.toDate() + ""} />
    </Item>
    <Item floatingLabel>
      <Label>Funding Requested:</Label>
      <Input disabled value={props.project.funds_needed + ""} />
    </Item>
    <Item floatingLabel>
      <Label>Funding Recieved:</Label>
      <Input disabled value={props.project.funds_acquired + ""} />
    </Item>
    <Item floatingLabel>
      <Label>Details:</Label>
      <Input disabled/>
    </Item>
    <Text> {props.project.description} </Text>
  </Form>
)};

RefugeeViewProjectDetails.navigationOptions = ({ navigation }) => ({
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
    type: (state.firestore.data.project_types && project &&
        state.firestore.data.project_types[project.project_type]) ||
      {},
})};

export default compose(
  firestoreConnect(props => [
    { collection: 'projects', doc: props.navigation.state.params.uid },
    { collection: 'refugees' },
    { collection: 'project_types' }
  ]),
  connect(mapStateToProps)
)(RefugeeViewProjectDetails);
