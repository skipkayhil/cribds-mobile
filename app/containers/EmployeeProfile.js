import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Button, Icon, Input, Form, Item, Label } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const ViewEmployee = props => (
  <Form style={{ marginRight: 15 }}>
    <Item floatingLabel>
      <Label>Email</Label>
      <Input disabled value={props.employee.email} />
    </Item>
  </Form>
);
ViewEmployee.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      title="Employee Profile"
      left={<BackButton />}
      right={
        <Button
          transparent
          onPress={() =>
            navigation.navigate('AdministratorEditEmployee', {
              uid: navigation.state.params.uid
            })
          }
        >
          <Icon name="create" />
        </Button>
      }
    />
  )
});

const mapStateToProps = (state, props) => ({
  employee:
    (state.firestore.data.employees &&
      state.firestore.data.employees[props.navigation.state.params.uid]) ||
    {}
});

export default compose(
  firestoreConnect(props => [
    { collection: 'employees', doc: props.navigation.state.params.uid }
  ]),
  connect(mapStateToProps)
)(ViewEmployee);
