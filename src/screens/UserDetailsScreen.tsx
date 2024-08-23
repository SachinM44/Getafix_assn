import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetailsScreen = ({ route }) => {
  const { mobileNumber } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details</Text>
      <Text style={styles.detail}>Mobile Number: {mobileNumber}</Text>
      {/* Add more user details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  detail: {
    fontSize: 18,
    marginBottom: 12,
  },
});


export default UserDetailsScreen;
