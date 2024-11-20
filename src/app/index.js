import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Login } from "../screans/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"#ff8c52"} />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
