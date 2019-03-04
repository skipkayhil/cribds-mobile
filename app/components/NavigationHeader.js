import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Header, Left, Body, Right, Title } from 'native-base';

const androidStyle = {
  paddingTop: StatusBar.currentHeight,
  height: 54 + StatusBar.currentHeight
};

const NavigationHeader = ({ title, left, right }) => (
  <Header style={Platform.OS === 'android' ? androidStyle : {}}>
    <Left>{left}</Left>
    <Body style={{ flex: 3 }}>
      <Title>{title}</Title>
    </Body>
    <Right>{right}</Right>
  </Header>
);

export default NavigationHeader;
