import { StatusBar } from "expo-status-bar";
import {  StyleSheet, Text, View, TouchableOpacity } from "react-native";




type OTPInputProps = {
  length: number;
  value: Array<string>;
  disabled: boolean;
  onChange(value: Array<string>): void;
};

export default function LoginScreen() {
   
    function handleButtonClick() { 
        console.log("click");
      
      }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Welcome Back,Ayo </Text>
        <Text style={styles.text2}>
          Please enter your six-digit to login to your account.
          <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
            <Text style={styles.textColor}> Log Out</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "transparent",
    borderWidth: 0,
    paddingHorizontal: 0,
    textAlign: "left",
  },
  textColor: {
    color: "blue",
    fontSize: 20,
  },
  text2: {
    fontSize: 20,
  },
  textContainer: {
    flex: 4,
  },
});
