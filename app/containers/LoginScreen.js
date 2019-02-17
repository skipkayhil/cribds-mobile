import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Picker, Text } from 'react-native';
import fetcher from '../api/fetcher.js'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      userType: 'Refugee',
      valid: false
    };
  }
  
  onLogin() {
    //eventually call from fetcher file but for now just use the local method
    if (this.loginFetcher()) {
      this.props.navigation.navigate(this.state.userType, {name: 'Home'});
    } else {
      //Make better error messages
      Alert.alert('Bad Credentials');
    }
  }

  loginFetcher() {
    /*
    var usernamesA = [user, user1];
    var passwordA = [pass, pass1]; 

    var usernamesE = [euser, euser1];
    var passwordE = [pass, pass1];

    var usernamesR = [ruser, ruser1];
    var passwordR = [pass, pass1];
    
    if (instance == 'Admin') {
      var user = usernamesA.indexOf(this.state.username);
      if (user != 0 || user != 1) {
        return false;
      } else {
        return passwordA[user] == this.state.password;
      }

    } else if (instance == 'Employee') {
      var user = usernamesE.indexOf(this.state.username);
      if (user != 0 || user != 1) {
        return false;
      } else {
        return passwordE[user] == this.state.password;
      }

    } else {
      var user = usernamesR.indexOf(this.state.username);
      if (user != 0 || user != 1) {
        return false;
      } else {
        return passwordR[user] == this.state.password;
      }
    }
    */
    
    return this.state.username = 'user' && this.state.password == 'pass';

    

  }
  


  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
      <View style={styles.container3}>
        <Text style = {{color: 'white', fontSize: 25}}> Cameroon Refugee Application </Text>
      </View>
      <View style={styles.container2}>
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

        <Picker
          selectedValue={this.state.userType}
          style={{height: 30, width: 200}}
          onValueChange={(itemValue, itemIndex) =>
          this.setState({userType: itemValue})
          }>
          <Picker.Item label="Refugee" value='Refugee' />
          <Picker.Item label="Employee" value='Employee' />
          <Picker.Item label="Admin" value='Admin' />
        </Picker>
      </View>
      <View style = {styles.container3}> 
      <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9c75f4',
  },
  container2: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 50,

  },
  container3: {
    height: 200,
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
