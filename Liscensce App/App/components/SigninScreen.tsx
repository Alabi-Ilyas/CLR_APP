import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function SigninScreen() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  function handleClick() {
    navigation.navigate("Login" as never);
  }
  function handleButtonClick() {
    navigation.navigate("HomeTab" as never);
  }
  function handleTextClick() {
    navigation.navigate("Create" as never);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Sign in</Text>
      <Text style={styles.text2}>Welcome back, into your account.</Text>
      <View style={styles.view2}>
        <TouchableOpacity onPress={handleClick}>
          <View style={styles.view3}>
            <Image
              source={require("./images/googlelogo.png")}
              style={styles.image1}
            />
            <Text style={styles.text3}> Continue with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.view7}>
        <View style={styles.view8}></View>
        <Text style={styles.text7}>or</Text>
        <View style={styles.view8}></View>
      </View>
      <View style={styles.view2}>
        <View style={styles.view5}>
          <TextInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
        </View>
      </View>
      <View style={styles.view2}>
        <View style={styles.view5}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.toggleButton}
          >
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color={showPassword ? "blue" : "gray"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.text6}>Forgot password?</Text>
      </View>
      <View style={styles.view4}>
        <TouchableOpacity
          onPress={() => {
            handleButtonClick();
          }}
        >
          <Text style={styles.text5}>Log in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view6}>
        <Text> Don't Have an Account?</Text>
        <TouchableOpacity onPress={handleTextClick} style={styles.button}>
          <Text style={styles.textColor}> Sign Up</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text1: {
    fontSize: 27,
    fontWeight: "bold",
    padding: 5,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  text2: {
    fontSize: 17,
    alignSelf: "flex-start",
  },
  view1: {
    padding: 240,
  },
  input1: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
  view2: {
    padding: 10,
  },
  view3: {
    padding: 15,
    backgroundColor: `#f5f5f5`,
    borderRadius: 5,
    width: 350,
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image1: {
    width: 20,
    height: 20,
    alignSelf: "center",
    marginLeft: 50,
  },
  text3: {
    fontSize: 17,
    color: "black",
    marginRight: 60,
  },
  view7: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  text7: {
    fontSize: 20,
    alignSelf: "center",
  },
  view8: {
    borderWidth: 0.5,
    width: 150,
    height: 0,
  },
  view5: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.4,
    borderColor: "black",
    borderRadius: 5,
  },
  toggleButton: {
    padding: 5,
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
  view6: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 99,
    marginRight: 99,
  },
  view4: {
    padding: 30,
  },
  text5: {
    fontSize: 20,
    color: "white",
    padding: 15,
    backgroundColor: `#1e90ff`,
    borderRadius: 5,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
  },
  text6: {
    fontSize: 15,
    marginLeft: 250,
  },
});
