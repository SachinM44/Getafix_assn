import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import commonStyles from '../styles/commonStyles';
import { validateMobileNumber, validatePassword } from '../utils/validation';
import { loginUser } from '../services/AuthService';

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!validateMobileNumber(mobileNumber)) {
      Alert.alert('Error', 'Invalid mobile number');
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }
    if (loginUser(mobileNumber, password)) {
      navigation.navigate('UserDetailsScreen', { mobileNumber });
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Login</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={commonStyles.button}>
        <Text style={commonStyles.buttonText} onPress={handleLogin}>Login</Text>
      </View>
      <Text style={commonStyles.linkText} onPress={() => navigation.navigate('RegistrationScreen')}>
        Don't have an account? Register
      </Text>
    </View>
  );
};

export default LoginScreen;
