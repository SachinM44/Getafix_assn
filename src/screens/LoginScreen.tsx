import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import commonStyles from '../styles/commonStyles';
import { validateMobileNumber, validatePassword } from '../utils/validation';
//@ts-ignore
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
    
    navigation.navigate('UserDetailsScreen', { mobileNumber });
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Login</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Mobile Number"
        placeholderTextColor={commonStyles.placeholderText.color} 
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Password"
        placeholderTextColor={commonStyles.placeholderText.color} 
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={commonStyles.linkText} onPress={() => navigation.navigate('RegistrationScreen')}>
        Don't have an account? Register
      </Text>
    </View>
  );
};

export default LoginScreen;
