import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthicStackNavig from "../navigator/Authenticatior.js";

export default function RootNavigator() {
  return (
    <AuthicStackNavig />
    // <NavigationContainer>
    //   <AuthicStackNavig />
    // </NavigationContainer>
  );
}
