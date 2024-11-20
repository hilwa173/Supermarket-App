import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function HomeHeader({ title, type, navigation }) {
  return (
    <View style={styles.header}>
      {/* Uncomment if you want back navigation */}
      {/* <View style={{justifyContent:"flex-end"}}>
        <Feather
          name="arrow-left"
          color="white"
          size={32}
          onPress={() => { navigation.goBack(); }} 
        />
      </View> */}
      <View style={styles.menuIconViw}>
        <Feather
          name="menu"
          color="white"
          onPress={() => {
            navigation.menu();
          }}
          size={32}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style={styles.titleText}>Queen Supermarket</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginRight: 15,
        }}
      >
        <Feather
          name="shopping-cart" // Use the Feather name for the cart icon
          color="white"
          size={32}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "hsl(27, 88%, 58%)",
    height: "100%",
    justifyContent: "space-between",
  },
  menuIconViw: {
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
