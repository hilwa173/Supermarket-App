// Header.js
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#ff8c52",
    height: 40,
    width: "100%",
    position: "relative",
  },
  headerText: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 30,
  },
});
