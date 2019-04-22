import React from 'react';
import { Button, Text, Input, Label, Form, Item, Content} from 'native-base';
import { TextInput, View, Image, StyleSheet, ActivityIndicator, Keyboard } from 'react-native';
import { NavigationHeader, BackButton } from '../components';
import { ImagePicker, Constants, Permissions } from 'expo';
import { withFirestore } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
//import { apiStart, apiError } from '../actions';

class CreateProject extends React.Component {
   state = {
    title: '',
    details: '',
    funds: 0,
    contact: '',
    image: null,
  };

  onSubmit = () => {
    const {title, details, funds, contact, image} = this.state;
    const {navigation, firestore, uid} = this.props;
    if (title == '' || details == '' || funds == 0) {
      alert('Please fill in all required information');
    }
    else {
      if (contact != '') {
        firestore.add({collection:'projects'},{creator: uid, title, description: details + " Contact: " + contact, funds_acquired: 0, funds_needed: funds, project_type: 
        'ryMc3AcabTo0Vg31stqh', status: 'pending', submission_date: new Date()});
      } else {
      firestore.add({collection:'projects'},{creator: uid, title, description: details, funds_acquired: 0, funds_needed: funds, project_type: 
        'ryMc3AcabTo0Vg31stqh', status: 'pending', submission_date: new Date()});//.then(
      }
      //project => 
      //uploadImageAsync(uri,test.id)
      this.props.navigation.navigate('RefugeeHome');
    }

    
  };
  render () {
    const {title, details, funds, contact, image} = this.state;
  return (
    <Content>
      <Form style={styles.form}>
          <Text style={{ color: 'white', fontSize: 25 }}>
            Create Project
          </Text>

          <Item floatingLabel style={styles.input}>
            <Label style={{ color: 'white' }}>Title:</Label>
            <Input
              style={{ color: 'white' }}
              value={title}
              onChangeText={title => this.setState({ title })}
            />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label style={{ color: 'white' }}>Details:</Label>
            <Input
              style={{ color: 'white' }}
              value={details}
              multiline = {true}
              onChangeText={details => this.setState({ details })}
            />
          </Item>

          <Item floatingLabel style={styles.input}>
            <Label style={{ color: 'white' }}>Funds:</Label>
            <Input
              keyboardType={'numeric'}
              style={{ color: 'white' }}
              value={funds}
              onChangeText={funds => this.setState({ funds })}
            />
          </Item>

          <Item floatingLabel style={styles.input}>
            <Label style={{ color: 'white' }}>Contact (optional):</Label>
            <Input
              style={{ color: 'white' }}
              value={contact}
              onChangeText={contact => this.setState({ contact })}
            />
          </Item>

          <Button
            style={{ margin: 15 }}
            onPress={this.onSubmit}
          >
            <Text>Submit</Text>
          </Button>
      </Form>
    </Content>
    
  );}

  /* TO BE ADDED IN
            <Button
            onPress={this._pickImage}
            style={{ margin: 15 }}
            >
              <Text> Pick Image </Text>
            </Button>
            {image &&
              <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
  */

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

async function uploadImageAsync(uri, project_name) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child('project_images')
    .child(project_name);
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}

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

const mapStateToProps = ({ firebase }, {firestore: data},  props) => {
  return {
    uid: firebase.auth.uid,
  };
};

export default compose(
  withFirestore,
  connect(
    mapStateToProps,
  )
)(CreateProject);
