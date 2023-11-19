import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type OTPInputProps = {
  length: number;
  value: Array<string>;
  disabled: boolean;
  onChange(value: Array<string>): void;
};

export default function ProfileScreen() {
  function handleButtonClick() {
    console.log("click");
  }
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <View>
        <View style={styles.view2}>
          <Image source={require("./images/man2.jpeg")} style={styles.image3} />
        </View>
        <Text style={styles.text2}>Alabi Ilyas</Text>
        <Text style={styles.text3}>ilyasalabi05@gmail.com</Text>
      </View>
      <View style={styles.view1}></View>
      <View style={styles.view3}>
        <Ionicons name="person-circle-outline" size={20} color="black" />
        <Text style={styles.text4}> Personal Information</Text>
        <Ionicons name="chevron-forward" size={20} />
      </View>
      <View style={styles.view3}>
        <Ionicons name="car" size={20} color="black" />
        <Text style={styles.text4}> Vehicle details</Text>
        <Ionicons name="chevron-forward" size={20} />
      </View>
      <View style={styles.view3}>
        <Ionicons name="document-text-outline" size={20} color="black" />
        <Text style={styles.text4}> Documents</Text>
        <Ionicons name="chevron-forward" size={20} />
      </View>
      <View style={styles.view3}>
        <Ionicons name="checkbox-outline" size={20} color="black" />
        <Text style={styles.text4}> Password & Security</Text>
        <Ionicons name="chevron-forward" size={20} />
      </View>
      <View style={styles.view3}>
        <Ionicons name="ios-notifications-outline" size={20} color="black" />
        <Text style={styles.text4}> Notifications</Text>
        <Ionicons name="chevron-forward" size={20} />
      </View>
      <View style={styles.view3}>
        <Ionicons name="gift-outline" size={20} color="black" />
        <Text style={styles.text4}> Refer and earn</Text>
        <Ionicons name="chevron-forward" size={20} />
      </View>
      <View style={styles.view3}>
        <Ionicons name="exit-outline" size={20} color="black" />
        <Text style={styles.text4}> Sign out</Text>
        <Ionicons name="chevron-forward" size={20} />
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
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  text2: {
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
    alignSelf: "center",
  },
  text3: {
    alignItems: "center",
    alignSelf: "center",
  },
  view1: {
    padding: 20,
  },
  view2: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    alignItems: "center",
    alignSelf: "center",
  },
  view3: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  text4: {
    fontSize: 15,
    alignItems: "flex-start",
    textAlign: "left",
  },
  image3: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
