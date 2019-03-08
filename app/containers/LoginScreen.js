import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { loginRequest as login } from '../actions';
import {
  Button,
  Picker,
  Icon,
  Form,
  Item,
  Label,
  Input,
  Text
} from 'native-base';
import { Constants } from 'expo';

class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
    userType: 'Refugee'
  };

  render() {
    const { username, password, userType } = this.state;
    return (
      <>
        <Form style={styles.form}>
          <Text style={{ color: 'white', fontSize: 25 }}>
            Ambazonia Refugee Application
          </Text>

          <Item floatingLabel style={styles.input}>
            <Label style={{ color: 'white' }}>Email</Label>
            <Input
              style={{ color: 'white' }}
              value={username}
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label style={{ color: 'white' }}>Password</Label>
            <Input
              style={{ color: 'white' }}
              value={password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
            />
          </Item>

          <Button
            block
            disabled={this.props.fetching}
            style={{ margin: 15 }}
            onPress={() =>
              this.props.login(
                this.props.navigation.navigate,
                username,
                password,
                userType
              )
            }
          >
            <Text>LOGIN</Text>
          </Button>

          <Text style={{ color: 'darkred' }}>{this.props.error}</Text>

          <ActivityIndicator
            style={{ opacity: this.props.fetching ? 1 : 0 }}
            size="large"
            color="#ffffff"
          />
        </Form>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          selectedValue={this.state.userType}
          style={{ flexGrow: 0, minWidth: 50 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ userType: itemValue })
          }
        >
          <Picker.Item label="Refugee" value="Refugee" />
          <Picker.Item label="Employee" value="Employee" />
          <Picker.Item label="Admin" value="admin" />
        </Picker>
      </>
    );
  }
}

const mapDispatchToProps = {
  login
};

const mapStateToProps = state => ({
  fetching: state.app.fetching,
  error: state.app.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#0098fe',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
  input: {
    marginRight: 15
  }
});
