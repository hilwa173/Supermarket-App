import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Login from "../screans/Login.js"; 
import Welcome from "../screans/Welcome.js"; 
import Homepage from "../screans/Homepage.js"; 

const AuthenticStack = createStackNavigator(); 
export default function AuthicStackNavig() {
  return (
    <AuthenticStack.Navigator>
      <AuthenticStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthenticStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthenticStack.Screen
        name="Homepage"
        component={Homepage}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </AuthenticStack.Navigator>
  );
}
