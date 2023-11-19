import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type OTPInputProps = {
  length: number;
  value: Array<string>;
  disabled: boolean;
  onChange(value: Array<string>): void;
};

export default function RenewalScreen() {
  function handleButtonClick() {
    console.log("click");
  }
  return (
    <View style={styles.container}>
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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  view3: {
    backgroundColor: "white",
    alignSelf: "center",
    padding: 15,
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
    backgroundColor: "#ffe4e1",
    borderColor: "#f8f8ff",
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
});
