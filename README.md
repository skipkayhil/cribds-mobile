# CRIBDS Mobile App

## Release Notes

### New Features
- Refugees accounts can now be created by Employees
- Refugees are now able to submit projects
- Project Lists were implemented in various parts of the project
- Projects can now be accepted or reject by an Employee

### Bug Fixes
- Project data now has field requirements, and will alert if bad data is entered.
- Town data now will be stored locally 

## App Install Information

### Prerequisites 
- NodeJS (10.15.0 LTS) (https://nodejs.org/en/download/releases/)
- Yarn (1.15.2) (https://yarnpkg.com/lang/en/docs/install/#debian-stable)
- Expo-cli 
  - install by running ```yarn global add expo-cli``` (https://github.com/expo/expo-cli)

### Dependent Libraries             
Note: All dependencies are installed via yarn
- Expo (32.0.0)
- Firebase (5.8.5)
- Native-base (2.10.0)
- React (16.5.0)
- React-native (32.0.0)
- React-native-materials-dropdown (0.11.1)
- React-native-modal-datetime-picker (6.1.0)
- React-navigation (3.0.9)
- React-redux (5.0.0)
- React-redux-firebase (2.2.6)
- Redux (4.0.1)
- Redux-firestore (0.7.0)
- Redux-thunk (2.3.0)
- Babel-present-expo (5.0.0)

### Download Instructions 

https://github.com/SkipKayhil/cribds-mobile.git

Project can be downloaded as a zip and extracted in the desired directory or with git (https://git-scm.com/)

### Build Instructions 

- Navigate into the downloaded directory in the terminal (cribds-mobile)
- Run ```yarn install```

### Run Instructions 

- Navigate into the downloaded directory in the terminal (cribds-mobile)
- Run ```expo start --tunnel``` (this will open a locally hosted web page with a QR code)
- Download the Expo app on the desired phone to run the application (Android : https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US) (iOS: https://itunes.apple.com/us/app/expo-client/id982107779?mt=8)
- Scan the QR code (mentioned earlier) on your phone
- You should now be building and then running the app on your phone. 
