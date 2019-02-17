import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Picker } from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      userType: 'Refugee'
    };
  }
  
  onLogin() {
    const { username, password, userType} = this.state;
    const {navigate} = this.props.navigation
    //navigation(userType, {name : 'Home'});
    if (true) {
      Alert.alert('Credentials', `${username} + ${password} + ${userType}`);
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          maxLength={20}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          maxLength={20}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
          //onPress={() => navigate(this.state.userType, {name: 'Home'})}
        />
        <Picker
          selectedValue={this.state.userType}
          style={{height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) =>
          this.setState({userType: itemValue})
          }>
          <Picker.Item label="Refugee" value='Refugee' />
          <Picker.Item label="Employee" value='Employee' />
          <Picker.Item label="Admin" value='Admin' />
        </Picker>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9c75f4',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,

  },
});
