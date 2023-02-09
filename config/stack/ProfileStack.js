import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../modules/profile/adapter/screens/Profile";
import UserGuest from "../../modules/profile/adapter/screens/UserGuest";
import Login from "../../modules/auth/adapters/screens/Login";
const Stack = createNativeStackNavigator();
export default function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="userGuestStak"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "while",
        headerStyle: { backgroundColor: "#ff5a60" },
      }}
    >
      <Stack.Screen
        name="profileStack"
        options={{ title: "Perfil" }}
        component={Profile}
      />

      <Stack.Screen
        name="userGuestStak"
        options={{ title: "Bienvenido" }}
        component={UserGuest}
      />

      <Stack.Screen
        name="loginStak"
        options={{ title: "Inicio de sesion" }}
        component={Login}
      />
    </Stack.Navigator>
  );
}
