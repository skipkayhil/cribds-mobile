import React from 'react';
import { Button, Content, Icon, List, ListItem, Text } from 'native-base';
import { NavigationHeader, BackButton } from '../components';
import { getAll } from '../config/FakeData';

const ViewRefugees = props => {
  const { id } = props.navigation.state.params || {};

  return (
    <Content>
      <List>
        {getAll()
          .filter(v => v.id !== id)
          .map((v, i) => (
            <ListItem
              key={i}
              onPress={() =>
                props.navigation.navigate('RefugeeProfile', { id: v.id })
              }
            >
              <Text>{v.name}</Text>
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

export default ViewRefugees;
