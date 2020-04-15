import React, {useState} from 'react';
import {
  Container,
  TextInput,
  TouchableOpacity,
  ButtonText,
} from './LogInScreen.styles';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

import {signIn} from '../../../actions';

const LogInScreen = ({navigation}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleOnTextChange = (text, field) => {
    setState({...state, [field]: text});
  };

  const handlePress = () => {
    AsyncStorage.setItem('@unencrypted:token', 'dummy_token');
    signIn();
  };

  return (
    <Container>
      <TextInput
        value={state.email}
        onChangeText={text => handleOnTextChange(text, 'email')}
        keyboardType="email-address"
        placeholder="Email"
      />
      <TextInput
        value={state.password}
        onChangeText={text => handleOnTextChange(text, 'password')}
        secureTextEntry
        placeholder="Password"
      />
      <TouchableOpacity onPress={handlePress}>
        <ButtonText>Log In</ButtonText>
      </TouchableOpacity>
    </Container>
  );
};

export default connect(
  null,
  {signIn},
)(LogInScreen);
