import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { Feather } from "@expo/vector-icons"; // Import Feather icons
import Header from "../subscreen/Header.js";
import { ScrollView } from "react-native-gesture-handler"; // Use the correct import for ScrollView

export default function Login({ navigation }) {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef();
  const textInput2 = useRef();
  const handleFocus = () => setTextInput2Focused(true);
  const handleBlur = () => setTextInput2Focused(false);
  const handleForgotPassword = () => {};

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <View>
          <Header type="arrow-left" navigation={navigation} />
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.welcome}>
              Welcome to Queen Supermarket System
            </Text>
          </View>
          <View style={styles.login}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your username"
              ref={textInput1}
            />
            <View style={styles.passwordContainer}>
              {/* <Animatable.View
                animation={textInput2Focused ? "" : "fadeInLeft"}
                duration={400}
              >
                <Feather
                  name="lock"
                  size={24}
                  color="grey"
                  style={styles.icon}
                />
              </Animatable.View> */}
              <TextInput
                placeholder="Enter your password"
                secureTextEntry
                style={styles.textInputPass}
                ref={textInput2}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <Animatable.View
                animation={textInput2Focused ? "" : "fadeInLeft"}
                duration={400}
              >
                <Feather
                  name="eye-off"
                  size={24}
                  color="grey"
                  style={styles.icon}
                />
              </Animatable.View>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Homepage");
              }}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.text}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton}>
              <Feather
                name="log-in"
                size={24}
                color="white"
                style={styles.googleIcon}
              />
              <Text style={styles.buttonText}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dontAcount}>
            <Text style={styles.text}>Don't have an account? </Text>
            <TouchableOpacity style={styles.signup}>
              <Text style={styles.linkText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f7f9fc",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  login: {
    width: "90%",
  },
  textInput: {
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "white",
  },
  textInputPass: {
    width: "100%",
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 15,
    padding: 15,
    backgroundColor: "white",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 15,
    backgroundColor: "white",
  },
  icon: {
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: "hsl(23, 100%, 66%)",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  googleButton: {
    backgroundColor: "hsl(261, 87%, 68%)",
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
  },
  googleIcon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  linkText: {
    padding: "3%",
    color: "white",
    fontWeight: "bold",
  },
  dontAcount: {
    margin: "5%",
    alignItems: "center",
  },
});
