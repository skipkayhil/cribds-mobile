import React from 'react';
import { Button, Text, Input, Label, Form, Item, Content} from 'native-base';
import { TextInput, View, Image, StyleSheet, ActivityIndicator, Keyboard } from 'react-native';
import { NavigationHeader, BackButton } from '../components';
import { ImagePicker, Constants } from 'expo';
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
  
    firestore.add({collection:'projects'},{creator: uid, title, description: details, funds_acquired: 0, funds_needed: funds, project_type: 
      'ryMc3AcabTo0Vg31stqh', status: 'pending', submission_date: new Date()}).then(
      project => 
      console.log(test.id)
      )

    
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
            <Label style={{ color: 'white' }}>Contact:</Label>
            <Input
              style={{ color: 'white' }}
              value={contact}
              onChangeText={contact => this.setState({ contact })}
            />
          </Item>
            <Button
            onPress={this._pickImage}
            style={{ margin: 15 }}
            >
              <Text> Pick Image </Text>
            </Button>
            {image &&
              <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

          <Button
            style={{ margin: 15 }}
            onPress={this.onSubmit}
          >
            <Text>Submit</Text>
          </Button>
      </Form>
    </Content>
    
  );}

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
    types: project_types
  };
};

export default compose(
  withFirestore,
  connect(
    mapStateToProps,
  )
)(CreateProject);
