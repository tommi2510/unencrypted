import React from 'react';
import {
  Container,
  TouchableOpacity,
  ButtonText,
} from './DashboardScreen.styles';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

import {signOut} from '../../../actions';

const DashboardScreen = () => {
  const onPress = () => {
    AsyncStorage.removeItem('@unencrypted:token');
    signOut();
  };

  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <ButtonText>Log Out</ButtonText>
      </TouchableOpacity>
    </Container>
  );
};

export default connect(
  null,
  {signOut},
)(DashboardScreen);
