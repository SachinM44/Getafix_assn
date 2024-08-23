import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import commonStyles from '../styles/commonStyles';
import { registerUser } from '../services/AuthService';
import { validateEmail, validateMobileNumber, validatePassword } from '../utils/validation';

const RegistrationScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Invalid email address');
      return;
    }
    if (!validateMobileNumber(mobileNumber)) {
      Alert.alert('Error', 'Invalid mobile number');
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    const user = { fullName, email, mobileNumber, password };
    if (registerUser(user)) {
      Alert.alert('Success', 'Registration successful');
      navigation.navigate('LoginScreen');
    } else {
      Alert.alert('Error', 'User already exists');
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Register</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
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
      <TextInput
        style={commonStyles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <View style={commonStyles.button}>
        <Text style={commonStyles.buttonText} onPress={handleRegister}>Register</Text>
      </View>
      <Text style={commonStyles.linkText} onPress={() => navigation.navigate('LoginScreen')}>
        Already have an account? Login
      </Text>
    </View>
  );
};

export default RegistrationScreen;
