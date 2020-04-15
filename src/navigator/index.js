import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

import {signIn, signOut} from '../actions';

import LogInScreen from '../components/screens/auth/LogInScreen';
import DashboardScreen from '../components/screens/main/DashboardScreen';

const Stack = createStackNavigator();

const mapStateToProps = state => {
  return {auth: state.auth};
};

export default connect(
  mapStateToProps,
  {signIn, signOut},
)(({auth, signIn, signOut}) => {
  useEffect(() => {
    checkToken();
  });

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('@unencrypted:token');
    if (token) {
      signIn();
    } else {
      signOut();
    }
  };

  if (auth.isSignedIn === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        {auth.isSignedIn ? (
          <>
            <Stack.Screen
              name="dashboard"
              component={DashboardScreen}
              options={{title: 'Dashboard'}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="login"
              component={LogInScreen}
              options={{title: 'Log In'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});
