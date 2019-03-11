import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, Keyboard } from 'react-native';
import {
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  Icon,
  Toast
} from 'native-base';
import { connect } from 'react-redux';
import { BackButton, NavigationHeader } from '../components';
import api from '../api';
import { apiStart, apiError, apiSuccess } from '../actions';

const defaultState = {
  email: '',
  password: '',
  hide: true
};

class RegisterEmployee extends Component {
  state = defaultState;

  handleRegister = () => {
    const { email, password } = this.state;

    Keyboard.dismiss();
    this.props.apiStart();

    api.auth.registerEmployee(email, password).then(error => {
      if (error) return this.props.apiError(error);

      this.props.apiSuccess();
      Toast.show({
        text: 'Employee registered successfully!',
        type: 'success',
        duration: 5000
      });
    });
  };

  render() {
    const { email, password, hide } = this.state;
    return (
      <>
        <Form style={styles.form}>
          <Item floatingLabel style={styles.input}>
            <Label>Email</Label>
            <Input
              value={email}
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label>Password</Label>
            <Input
              value={password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry={hide}
            />
            <Icon
              name={hide ? 'eye' : 'eye-off'}
              onPress={() => this.setState({ hide: !hide })}
            />
          </Item>

          <Button
            block
            disabled={this.props.loading}
            style={{ margin: 15 }}
            onPress={this.handleRegister}
          >
            <Text>REGISTER</Text>
          </Button>

          <Text style={{ color: 'darkred' }}>{this.props.error}</Text>

          <ActivityIndicator
            style={{ opacity: this.props.loading ? 1 : 0 }}
            size="large"
            color="#f0f0f0"
          />
        </Form>
      </>
    );
  }
}

RegisterEmployee.navigationOptions = ({ navigation }) => ({
  header: <NavigationHeader title="Register Employee" left={<BackButton />} />
});

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    marginRight: 15
  }
});

const mapStateToProps = state => ({
  loading: state.app.api.loading,
  error: state.app.api.error
});

const mapDispatchToProps = {
  apiStart,
  apiSuccess,
  apiError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterEmployee);
