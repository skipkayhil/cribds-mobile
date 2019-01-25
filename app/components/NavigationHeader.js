import React from 'react';
import { Header, Left, Body, Right, Title } from 'native-base';

const NavigationHeader = ({ title, left, right }) => (
  <Header>
    <Left>{left}</Left>
    <Body style={{ flex: 3 }}>
      <Title>{title}</Title>
    </Body>
    <Right>{right}</Right>
  </Header>
);

export default NavigationHeader;
