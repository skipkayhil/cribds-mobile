import React, { Component } from 'react';
import { compose } from 'redux';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import {
  Form,
  Item,
  Label,
  Icon,
  Input,
  Button,
  Text,
  Content,
  Toast
} from 'native-base';
import { withFirestore } from 'react-redux-firebase';
import { BackButton, NavigationHeader } from '../components';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Dropdown } from 'react-native-material-dropdown';
import api from '../api';
import { apiStart, apiError, apiSuccess } from '../actions';

class RefugeeProfileForm extends Component {
  state = {
    refugee: { ...this.props.refugee },
    password: '',
    datePickerVisible: false,
    hide: true
  };

  _showDatePicker = () => {
    Keyboard.dismiss();
    this.setState({ datePickerVisible: true });
  };

  _hideDatePicker = () => this.setState({ datePickerVisible: false });

  _datePicked = date => {
    this.updateField('dob')(date);
    console.log(this.state.refugee);
    this._hideDatePicker();
  };

  updateField = key => value =>
    this.setState({ refugee: { ...this.state.refugee, [key]: value } });

  onSubmit = () => {
    const { navigation, apiError, apiSuccess, firestore } = this.props;
    const { refugee, password } = this.state;

    Keyboard.dismiss();
    this.props.apiStart();

    if (navigation.state.params.create) {
      api.auth.registerRefugee(refugee.email, password, refugee).then(error => {
        if (error) return apiError(error);

        apiSuccess();
        Toast.show({
          text: 'Refugee registered successfully!',
          type: 'success',
          duration: 5000
        });

        this.setState({
          refugee: {},
          password: '',
          datePickerVisible: false,
          hide: true
        });
      });
    } else {
      firestore.update(
        { collection: 'refugees', doc: navigation.state.params.uid },
        refugee
      );

      Toast.show({
        text: 'Profile updated successfully!',
        type: 'success',
        duration: 5000
      });

      navigation.navigate('RefugeeProfile', {
        uid: navigation.state.params.uid
      });
    }
  };

  render() {
    const { refugee, password, hide } = this.state;
    const dob =
      refugee.dob && refugee.dob.toDate ? refugee.dob.toDate() : refugee.dob;
    console.log(this.state);
    return (
      <Content>
        <Form style={{ marginRight: 15, marginBottom: 15 }}>
          <Item floatingLabel>
            <Label>First Name</Label>
            <Input
              value={refugee.first_name}
              onChangeText={this.updateField('first_name')}
            />
          </Item>
          <Item floatingLabel>
            <Label>Last Name</Label>
            <Input
              value={refugee.last_name}
              onChangeText={this.updateField('last_name')}
            />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              value={refugee.email}
              onChangeText={this.updateField('email')}
            />
          </Item>
          {this.props.navigation.state.params.create ? (
            <Item floatingLabel>
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
          ) : null}
          <Item floatingLabel>
            <Label>Date of Birth</Label>
            <Input
              value={
                dob
                  ? `${dob.getFullYear()}-${dob.getMonth() +
                      1}-${dob.getDate()}`
                  : ''
              }
              onFocus={this._showDatePicker}
            />
          </Item>
          <Dropdown
            containerStyle={{ marginLeft: 15 }}
            label="Camp"
            data={this.props.camps}
            valueExtractor={item => item.id}
            labelExtractor={item => item.name}
            value={refugee.camp}
            rippleDuration={0}
            onChangeText={this.updateField('camp')}
          />
          <Dropdown
            containerStyle={{ marginLeft: 15 }}
            label="Hometown"
            data={this.props.towns}
            valueExtractor={item => item.id}
            labelExtractor={item => item.town}
            value={refugee.hometown}
            rippleDuration={0}
            onChangeText={this.updateField('hometown')}
          />
          <Item floatingLabel>
            <Label>Phone</Label>
            <Input
              keyboardType="number-pad"
              value={refugee.phone}
              onChangeText={this.updateField('phone')}
            />
          </Item>
          <Item floatingLabel>
            <Label>Profession</Label>
            <Input
              value={refugee.profession}
              onChangeText={this.updateField('profession')}
            />
          </Item>
        </Form>
        <Button full success onPress={this.onSubmit}>
          <Text>
            {this.props.navigation.state.params.create ? 'Register' : 'Edit'}
          </Text>
        </Button>
        <DateTimePicker
          date={dob}
          isVisible={this.state.datePickerVisible}
          onConfirm={this._datePicked}
          onCancel={this._hideDatePicker}
          minimumDate={new Date(1900, 0, 0)}
          maximumDate={new Date()}
        />
      </Content>
    );
  }
}

RefugeeProfileForm.navigationOptions = ({ navigation }) => {
  const { create } = navigation.state.params || {};
  const title = create
    ? 'Register Refugee'
    : `Edit Profile #${navigation.state.params.uid}`;

  return {
    header: <NavigationHeader title={title} left={<BackButton />} />
  };
};

const mapStateToProps = ({ firestore }, props) => {
  const refugees = firestore.data.refugees;
  return {
    refugee: refugees && refugees[props.navigation.state.params.uid],
    camps: firestore.ordered.camps,
    towns: firestore.ordered.towns
  };
};

const mapDispatchToProps = { apiStart, apiSuccess, apiError };

export default compose(
  withFirestore,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(RefugeeProfileForm);
