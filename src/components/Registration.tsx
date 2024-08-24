import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import commonStyles from '../styles/commonStyles';
//@ts-ignore
const RegistrationScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Register</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Full Name"
        placeholderTextColor={commonStyles.placeholderText.color}
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Email"
        placeholderTextColor={commonStyles.placeholderText.color}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
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
      <TextInput
        style={commonStyles.input}
        placeholder="Confirm Password"
        placeholderTextColor={commonStyles.placeholderText.color}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
      <Text style={commonStyles.linkText} onPress={() => navigation.navigate('LoginScreen')}>
        Already have an account? Login
      </Text>
    </View>
  );
};

export default RegistrationScreen;
