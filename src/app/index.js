import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import RootNavigator from "../navigator/RootNavigator.js"; 

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="light-content" backgroundColor={"#ff8c52"} />
      <RootNavigator /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1 },
});
