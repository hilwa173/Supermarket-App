import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons"; 

export default function Header({ title, navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.menuIconView}>
        <Feather
          name="arrow-left" 
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style={styles.titleText}>
          {title} {/* Use the title prop for dynamic titles */}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "hsl(27, 88%, 58%)",
    padding: 10,
    height: 60, 
  },
  menuIconView: {
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 50,
    color: "white",
  },
});
