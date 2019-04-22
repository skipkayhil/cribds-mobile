import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Button, Icon, Input, Form, Item, Label, Text, Content } from 'native-base';
import { BackButton, NavigationHeader } from '../components';


class ViewPendingProject extends Component {
  state = {
    project: { ...this.props.project},
    type: { ...this.props.type},
    refugee: { ...this.props.refugee}
  }

  onAccept = (props) => {
    this.props.firestore.update({collection: 'projects', doc:this.props.navigation.state.params.uid}, {status: 'approved'});
    this.props.navigation.navigate('EmployeeHome');

  };

  onReject = (props) => {
    this.props.firestore.update({collection: 'projects', doc:this.props.navigation.state.params.uid}, {status: 'rejected'});
    this.props.navigation.navigate('EmployeeHome');
  };

  render() {
    const { project, refugee, type} = this.state;
    return (
    <Content>
    <Form style={{ marginRight: 15 }}>
      <Item floatingLabel>
        <Label>Title:</Label>
        <Input disabled value={project.title} />
      </Item>
      <Item floatingLabel>
        <Label>Creator:</Label>
        <Input disabled value={refugee.first_name + " " + refugee.last_name} />
      </Item>
      <Item floatingLabel>
        <Label>Project Type:</Label>
        <Input disabled value={type.name} />
      </Item>
      <Item floatingLabel>
        <Label>Submitted:</Label>
        <Input disabled value={project.submission_date.toDate() + ""} />
      </Item>
      <Item floatingLabel>
        <Label>Funding Requested:</Label>
        <Input disabled value={project.funds_needed + ""} />
      </Item>
      <Item floatingLabel>
        <Label>Funding Recieved:</Label>
        <Input disabled value={project.funds_acquired + ""} />
      </Item>
      <Item floatingLabel>
        <Label>Details:</Label>
        <Input disabled/>
      </Item>
      <Text> {project.description} </Text>
      <Button full success onPress={this.onAccept}>
        <Text>
          {'Approve Project'}
        </Text>
      </Button>

      <Button full danger onPress={this.onReject}>
        <Text>
          {'Reject Project'}
        </Text>
      </Button>
    </Form>
    </Content>
)}};

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
    type: (state.firestore.data.project_types && project &&
        state.firestore.data.project_types[project.project_type]) ||
      {}
})};

export default compose(
  firestoreConnect(props => [
    { collection: 'projects', doc: props.navigation.state.params.uid },
    { collection: 'refugees' },
    { collection: 'project_types' }
  ]),
  connect(mapStateToProps)
)(ViewPendingProject);
