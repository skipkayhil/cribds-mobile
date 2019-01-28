import React from 'react';
import { Content, List, ListItem, Text } from 'native-base';
import { NavigationHeader, BackButton } from '../components';

const PendingProjects = props => {
  return (
    <Content>
      <List>
        <ListItem button>
          <Text>Test Project 1</Text>
        </ListItem>
        <ListItem>
          <Text>Test Project 2</Text>
        </ListItem>
        <ListItem>
          <Text>Test Project 3</Text>
        </ListItem>
        <ListItem>
          <Text>Test Project 4</Text>
        </ListItem>
        <ListItem>
          <Text>Test Project 5</Text>
        </ListItem>
      </List>
    </Content>
  );
};

PendingProjects.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      left={<BackButton navigation={navigation} />}
      title="Pending Projects"
    />
  )
});

export default PendingProjects;
