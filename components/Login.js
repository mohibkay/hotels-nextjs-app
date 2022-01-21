import React from "react";
import { Text, TextInput, Button, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Login = () => {
  const tailwind = useTailwind();
  return (
    <View>
      <Text style={tailwind("text-blue-600")}>Hello world</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Login" />
    </View>
  );
};

export default Login;
