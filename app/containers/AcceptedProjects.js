import React from 'react';
import { Content, List, ListItem, Text } from 'native-base';
import { NavigationHeader, BackButton } from '../components';

const AcceptedProjects = props => {
  return (
    <Content>
      <List>
        <ListItem button>
          <Text>Accepted Project 1</Text>
        </ListItem>
        <ListItem>
          <Text>Accepted Project 2</Text>
        </ListItem>
        <ListItem>
          <Text>Accepted Project 3</Text>
        </ListItem>
        <ListItem>
          <Text>Accepted Project 4</Text>
        </ListItem>
        <ListItem>
          <Text>Accepted Project 5</Text>
        </ListItem>
      </List>
    </Content>
  );
};

AcceptedProjects.navigationOptions = ({ navigation }) => ({
  header: <NavigationHeader left={<BackButton />} title="Accepted Projects" />
});

export default AcceptedProjects;
