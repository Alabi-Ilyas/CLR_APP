import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";

export default function CreateScreen() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [allInputsFilled, setAllInputsFilled] = useState(false);

  useEffect(() => {
    if (fullName && email && phoneNumber && password && confirmPassword) {
      setAllInputsFilled(true);
    } else {
      setAllInputsFilled(false);
    }
  }, [fullName, email, phoneNumber, password, confirmPassword]);

  const handleCreateAccount = () => {
    if (allInputsFilled) {
      alert("Account created!");
      navigation.navigate("Signin" as never);
    } else {
      alert("Please fill in all the required fields.");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  function handleClick() {
    navigation.navigate("HomeTab" as never);
  }
  function handleButtonClick() {
    navigation.navigate("Signin" as never);
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.text1}>Create an Account</Text>
          <Text style={styles.text2}>
            Enjoy swift and simple license renewals
          </Text>
          <View style={styles.view2}></View>
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
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          <View style={styles.view2}>
            <View style={styles.view5}>
              <TextInput
                placeholder="Phone Number"
                value={phoneNumber}
                keyboardType="numeric"
                onChangeText={(text) => setPhoneNumber(text)}
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
          <View style={styles.view2}>
            <View style={styles.view5}>
              <TextInput
                placeholder=" Confirm Password"
                secureTextEntry={!showPassword}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
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
          <View style={styles.view4}>
            <TouchableOpacity
              onPress={() => {
                handleCreateAccount();
              }}
            >
              <Text style={allInputsFilled ? styles.text5 : styles.text4}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view6}>
            <Text>Have an Account?</Text>
            <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
              <Text style={styles.textColor}> Sign in</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginLeft: 20,
  },
  text2: {
    fontSize: 17,
    alignSelf: "flex-start",
    marginLeft: 30,
  },
  text3: {
    fontSize: 17,
    color: "black",
    marginRight: 60,
  },
  text4: {
    fontSize: 20,
    color: "black",
    padding: 15,
    backgroundColor: `#f5f5f5`,
    borderRadius: 5,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
  },
  text6: {
    fontSize: 13,
  },
  view1: {
    padding: 240,
  },
  input1: {
    padding: 10,
    borderWidth: 0.4,
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
  view4: {
    padding: 30,
  },
  view5: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.4,
    borderColor: "black",
    borderRadius: 5,
  },
  view6: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 99,
    marginRight: 99,
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
  image1: {
    width: 20,
    height: 20,
    alignSelf: "center",
    marginLeft: 50,
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
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
