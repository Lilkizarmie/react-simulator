import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect }from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Onboarding from "./screens/Onboarding";
import HomeScreen from "./components/HomeScreen";



export default App = () => {
  const [loading, setLoading] = useState(true);
  const [viewOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');

      if (value !== null) {
        setViewedOnboarding(true)
      }
    } catch {
      crossOriginIsolated.log('Error @checkOnboarding: ', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkOnboarding();
  }, []);

  const Loading = () => {
    <View>
      <ActivityIndicator size="large"/>
    </View>
  }

  return (
    <View style={styles.container}>
      {loading ? <Loading /> : viewOnboarding ? <HomeScreen /> : <Onboarding/>}
      <StatusBar style="auto"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


