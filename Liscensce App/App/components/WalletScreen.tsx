import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function WalletScreen() {
  const [isVisible, setIsVisible] = useState(true);

  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }
  function handleButtonClick() {
    console.log("click");
  }

  const balance = isVisible ? "₦ 2,000.00" : ".......";

  return (
    <View style={styles.container}>
      <View style={styles.view5}>
        <View style={styles.view1}></View>

        <Text style={styles.text1}>Balance:</Text>
        <View style={styles.view2}>
          <Text style={styles.text2}>{balance}</Text>
          <TouchableOpacity onPress={handleToggleVisibility}>
            <Ionicons
              name={isVisible ? "eye" : "eye-off"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <TouchableOpacity
              onPress={() => {
                handleButtonClick();
              }}
            >
              <Text style={styles.text3}>Fund Wallet</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view3}>
            <TouchableOpacity
              onPress={() => {
                handleButtonClick();
              }}
            >
              <Text style={styles.text4}>Renew Paper</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.view6}>
        <View style={styles.view2}>
          <Text style={styles.text6}>Cards</Text>
          <View style={styles.view4}>
            <Ionicons name="add-circle-outline" size={20} />
            <Text style={styles.text6}>Add new card</Text>
          </View>
        </View>
      </View>
      <View style={styles.view7}>
        <Text style={styles.text5}>No Cards Added yet</Text>
      </View>
      <View>
        <Text> Latest Transactions</Text>
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
  image1: {
    width: 50,
    height: 50,
  },
  view1: {
    padding: 15,
  },
  text1: {
    fontSize: 20,
    marginLeft: 20,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text2: {
    fontSize: 25,
    marginLeft: 20,
    fontWeight: "bold",
  },
  view3: {
    padding: 20,
  },
  text3: {
    fontSize: 20,
    color: "white",
    backgroundColor: `#1e90ff`,
    borderRadius: 20,
    width: 150,
    height: 35,
    alignItems: "center",
    textAlign: "center",
  },
  text4: {
    fontSize: 20,
    color: "red",
    backgroundColor: "#ffe4e1",
    borderRadius: 20,
    width: 150,
    height: 35,
    alignItems: "center",
    textAlign: "center",
  },
  view4: {
    flexDirection: "row",
    marginRight: 10,
  },
  view5: {
    borderWidth: 2,
    borderColor: "#f5f5f5",
  },
  view6: {
    padding: 15,
  },
  text6: {
    fontSize: 17,
  },
  view7: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#f5f5f5",
  },
  text5: {
    alignSelf: "center",
  },
});
