import React, { useStat, useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import Header from "../subscreen/Header";
import { BorderlessButton } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
export function Login() {
  const [TextInput2Focussed, setTextInput2Focussed] = useState(false);
  const TextInput1 = useRef(1);
  const TextInput2 = useRef(2);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconBackground}>
          <Feather
            name="arrow-left"
            color="white"
            size={28}
            onPress={() => {}}
          />
        </View>
        <Header title="MY ACCOUNT" />
      </View>
      <View>
        <Text style={styles.titleLogin}>Login</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.enter}>Please enter the email and password</Text>
        <Text style={styles.enter}>registered with your account</Text>
      </View>
      <View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            style={styles.TextInput1}
            placeholder="please enter your Email"
            ref={TextInput1}
          />
        </View>

        <View style={styles.TextInput2}>
          <TextInput
            // style={{width:"80%"}}
            placeholder="please enter your Password"
            ref={TextInput2}
            onFocus={() => {
              setTextInput2Focussed(false);
            }}
            onBlur={() => {
              setTextInput2Focussed(true);
            }}
          />
          <Animatable.View
            animation={TextInput2Focussed ? "" : "fadeInLeft"}
            duration={400}
          >
            <Feather
              name="eye-off"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
          </Animatable.View>
        </View>
      </View>
    </View>
  );
}
{
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    fontSize: 22,
    fontWeight: "bold",
  },
  iconBackground: {
    backgroundColor: "#ff8c52",
  },
  titleLogin: {
    color: "#ff8c52",
    size: 16,
    fontWeight: "bold",
    marginLeft: 30,
  },
  enter: {
    color: "#bdc0c1",
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: "#86919e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: "#86919e",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
  },
});
