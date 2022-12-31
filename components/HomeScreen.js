import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = () => {

  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (err) {
      console.log('Error @clearOnboarding: ', err)
    }
  }

  return (
    <View>
      <Text style={StyleSheet.container}>HomeScreen</Text>

      <TouchableOpacity onPress={clearOnboarding}>
        <Text> Clear Onboarding </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default HomeScreen