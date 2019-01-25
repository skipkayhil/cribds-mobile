import React from 'react';
import { Picker, Icon } from 'native-base';

const HeaderPicker = ({ ...props }) => {
  function onValueChange(value) {
    switch (value) {
      case 'logout':
        return props.navigation.navigate('Login');
      default:
        return props.onValueChange(value);
    }
  }

  return (
    <Picker
      mode="dropdown"
      iosHeader="Menu"
      iosIcon={<Icon name="more" />}
      style={{ width: undefined }}
      onValueChange={onValueChange}
    >
      {(props.pickerItems || [])
        .map(([label, value]) => (
          <Picker.Item key={value} label={label} value={value} />
        ))
        .concat(<Picker.Item key="logout" label="Logout" value="logout" />)}
    </Picker>
  );
};

export default HeaderPicker;
