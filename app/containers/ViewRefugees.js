import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {
  Button,
  Content,
  Icon,
  List,
  ListItem,
  Text,
  Body,
  Right
} from 'native-base';
import { NavigationHeader, BackButton } from '../components';

const ViewRefugees = props => {
  const { uid } = props.navigation.state.params || {};

  return (
    <Content>
      <List>
        {props.refugees
          .filter(v => v.id !== uid)
          .map((v, i) => (
            <ListItem
              key={i}
              onPress={() =>
                props.navigation.navigate('RefugeeProfile', { uid: v.id })
              }
            >
              <Body>
                <Text style={{ fontSize: 16, color: '#000000de' }}>
                  {v.first_name} {v.last_name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#00000099',
                    paddingTop: 6
                  }}
                >
                  ID: {v.id}
                </Text>
              </Body>
              <Right />
            </ListItem>
          ))}
      </List>
    </Content>
  );
};

ViewRefugees.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      right={
        <Button transparent>
          <Icon name="search" />
        </Button>
      }
      left={<BackButton />}
      title="View Refugees"
    />
  )
});

const mapStateToProps = state => ({
  refugees: state.firestore.ordered.refugees || []
});

export default compose(
  firestoreConnect(['refugees']),
  connect(mapStateToProps)
)(ViewRefugees);
