import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import commonStyles from '../styles/commonStyles';
//@ts-ignore
const UserDetailsScreen = ({ route }) => {
  const { mobileNumber } = route.params;

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>User Details</Text>
      <Text style={commonStyles.detail}>Mobile Number: {mobileNumber}</Text>
    
    </View>
  );
};

export default UserDetailsScreen;
