import React, { Component } from 'react';
import { compose } from 'redux';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { login, apiStart, apiError } from '../actions';
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
    userType: 'refugee'
  };

  handleLogin = () => {
    const { username, password, userType } = this.state;
    const { firebase, login, apiStart, apiError } = this.props;

    if (username === '' && password === '') {
      return login(userType, 0);
    }

    apiStart();

    firebase
      .login({
        email: username,
        password: password
      })
      .catch(error => apiError(error.message));
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
            disabled={this.props.loading}
            style={{ margin: 15 }}
            onPress={this.handleLogin}
          >
            <Text>LOGIN</Text>
          </Button>

          <Text style={{ color: 'darkred' }}>{this.props.error}</Text>

          <ActivityIndicator
            style={{ opacity: this.props.loading ? 1 : 0 }}
            size="large"
            color="#ffffff"
          />
        </Form>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          selectedValue={userType}
          style={{ flexGrow: 0, minWidth: 50 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ userType: itemValue })
          }
        >
          <Picker.Item label="Refugee" value="refugee" />
          <Picker.Item label="Employee" value="employee" />
          <Picker.Item label="Admin" value="admin" />
        </Picker>
      </>
    );
  }
}

const mapDispatchToProps = {
  login,
  apiStart,
  apiError
};

const mapStateToProps = state => ({
  loading: state.app.api.loading,
  error: state.app.api.error
});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
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
