import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Text, Content, List, ListItem } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const ListEmployees = props => (
  <Content>
    <List>
      {props.employees.map((v, i) => (
        <ListItem
          key={i}
          onPress={() =>
            props.navigation.navigate('EmployeeProfile', { uid: v.id })
          }
        >
          <Text>{v.email}</Text>
        </ListItem>
      ))}
    </List>
  </Content>
);
ListEmployees.navigationOptions = ({ navigation }) => {
  return {
    header: <NavigationHeader title="List of Employees" left={<BackButton />} />
  };
};

const mapStateToProps = state => ({
  employees: state.firestore.ordered.employees || []
});

export default compose(
  firestoreConnect(['employees']),
  connect(mapStateToProps)
)(ListEmployees);
