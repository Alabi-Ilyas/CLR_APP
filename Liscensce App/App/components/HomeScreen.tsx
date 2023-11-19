import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-ico-material-design";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: null,
    });
  }, [navigation]);

  function handleClick() {
    navigation.navigate("Signin" as never);
  }
  function handleButtonClick() {
    console.log("click");
  }
  function handlePicClick() {
    navigation.navigate("Profile" as never);
  }
  return (
    <View style={styles.container}>
      <View style={styles.view4}></View>
      <View style={styles.view2}>
        <View style={styles.view1}>
          <TouchableOpacity onPress={handlePicClick}>
            <Image source={require("./images/car.jpg")} style={styles.image2} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text1}>Hello Ayo,</Text>
          <Text style={styles.text2}>
            {" "}
            Start your Liscensce Renewal Journey
          </Text>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity onPress={handleClick}>
            <Ionicons
              name="ios-notifications-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.view5}>
        <View style={styles.view3}>
          <View style={styles.view6}>
            <Text style={styles.text3}> Vehicles added</Text>
            <View style={styles.view14}>
              <Text style={styles.text7}>2</Text>
              <Ionicons name="car" size={40} color="white" />
            </View>
          </View>
        </View>
        <View style={styles.view3}>
          <View style={styles.view7}>
            <Text style={styles.text4}> Active insurance</Text>
            <View style={styles.view14}>
              <Text style={styles.text8}>1</Text>
              <Ionicons name="document-text-outline" size={20} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.view11}>
        <View style={styles.view8}>
          <Text> Active papers</Text>
          <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
            <Text style={styles.textColor}> View more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view16}>
          <Ionicons name="document-text-outline" size={40} />
          <Text style={styles.text12}>No Active Pappers</Text>
        </View>
      </View>

      <View style={styles.view8}>
        <Text> Know-hows</Text>
        <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
          <Text style={styles.textColor}> View more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.view13}>
        <View style={styles.view12}>
          <Image
            source={require("./images/writing.jpeg")}
            style={styles.image3}
          />
        </View>
        <View>
          <Text style={styles.text5}>Steps for renew liscensce</Text>
          <Text style={styles.text6}>
            {" "}
            Start your Liscensce Renewal Journey
          </Text>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity onPress={handleClick}>
            <Ionicons name="chevron-forward" size={40} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.view13}>
        <View style={styles.view12}>
          <Image source={require("./images/man.jpeg")} style={styles.image3} />
        </View>
        <View>
          <Text style={styles.text5}>Steps for renew liscensce</Text>
          <Text style={styles.text6}>
            {" "}
            Start your Liscensce Renewal Journey
          </Text>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity onPress={handleClick}>
            <Ionicons name="chevron-forward" size={40} />
          </TouchableOpacity>
        </View>
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
  view1: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: "center",
  },
  view2: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  view8: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  text1: {
    fontSize: 17,
    fontWeight: "bold",
    padding: 5,
    textAlign: "justify",
  },
  text2: {
    fontSize: 13,
    justifyContent: "center",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text3: {
    fontSize: 15,
    color: "white",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    padding: 5,
  },
  text4: {
    fontSize: 15,
    color: "black",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    padding: 5,
  },
  textColor: {
    color: "blue",
    marginLeft: 220,
  },
  text5: {
    fontSize: 15,
    fontWeight: "bold",
    padding: 5,
    textAlign: "justify",
  },
  text6: {
    fontSize: 13,
    justifyContent: "center",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  image1: {
    width: 20,
    height: 20,
  },
  image2: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  image3: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  view3: {
    backgroundColor: "white",
    alignSelf: "center",
    padding: 15,
  },
  view4: {
    padding: 20,
  },
  view5: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view6: {
    width: 170,
    height: 70,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: "center",
    backgroundColor: "#4169e1",
    borderColor: "#4169e1",
  },
  view7: {
    width: 170,
    height: 70,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: "center",
    backgroundColor: "#f8f8ff",
    borderColor: "#f8f8ff",
  },
  view9: {
    width: 370,
    height: 80,
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 8,
  },
  view10: {
    padding: 8,
  },
  view11: {
    height: 360,
    width: 400,
  },
  view12: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: "center",
  },
  view13: {
    padding: 11,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  button: {
    backgroundColor: "transparent",
    borderWidth: 0,
    paddingHorizontal: 0,
    textAlign: "left",
  },
  text7: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
  },
  text8: {
    fontSize: 20,
    color: "black",
    marginLeft: 10,
  },
  view14: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  View15: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text9: {
    fontSize: 15,
    marginLeft: 20,
    fontWeight: "bold",
  },
  text10: {
    fontSize: 13,
    marginLeft: 20,
  },
  text11: {
    fontSize: 13,
    color: "white",
    backgroundColor: `#1e90ff`,
    borderRadius: 15,
    width: 70,
    height: 25,
    alignItems: "center",
    textAlign: "center",
  },
  view16: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
  },
  text12: {
    fontSize: 20,
  },
});
