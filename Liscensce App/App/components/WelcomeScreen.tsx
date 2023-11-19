import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  function handleClick() {
    navigation.navigate("Create" as never);
  }

  return (
    <View style={styles.container}>
      <View style={styles.view1} />
      <Text style={styles.text1}>
        Renew Your Vehicle License with Ease,Using CLR
      </Text>
      <Text style={styles.text2}>
        Streamlined Process for Hassle-Free Renewals.
      </Text>
      <View style={styles.view2}>
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.text3}> Get Started</Text>
        </TouchableOpacity>
      </View>
      <StatusBar barStyle="default" />
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
    alignSelf: "center",
  },
  text2: {
    fontSize: 17,
    alignSelf: "center",
    marginLeft: 5,
  },
  text3: {
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
  view1: {
    padding: "70%",
  },
  view2: {
    padding: 20,
  },
});
