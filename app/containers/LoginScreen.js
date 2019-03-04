import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
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
// import fetcher from '../api/fetcher.js'

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      userType: 'Refugee',
      valid: false
    };
  }

  render() {
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
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label style={{ color: 'white' }}>Password</Label>
            <Input
              style={{ color: 'white' }}
              value={this.state.password}
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
                this.state.username,
                this.state.password,
                this.state.userType
              )
            }
          >
            <Text>LOGIN</Text>
          </Button>

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

const mapDispatchToProps = dispatch => ({
  login: (navigate, username, password, userType) => {
    dispatch(loginRequest(navigate, username, password, userType));
  }
});

const mapStateToProps = state => ({
  fetching: state.app.fetching
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
