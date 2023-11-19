// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

// type OTPInputProps = {
//   length: number;
//   value: Array<string>;
//   disabled: boolean;
//   onChange(value: Array<string>): void;
// };

// export default function TestScreen() {
//   function handleButtonClick() {
//     console.log("click");
//   }
//   return (
//     <View style={styles.container}>
//       <Text></Text>
//       <Image
//         source={require("./images/googlelogo.png")}
//         style={styles.image1}
//       />

//       <View style={styles.view10}>
//         <View style={styles.view9}>
//           <View>
//             <View style={styles.View15}>
//               <View>
//                 <Text style={styles.text9}>Car liscensce</Text>
//                 <Text style={styles.text10}>Due on 7 Aug 2023</Text>
//               </View>
//               <View style={styles.View15}>
//                 <Ionicons name="timer-outline" size={20} color="black" />
//                 <Text>Expiring</Text>
//               </View>
//             </View>
//             <View style={styles.view4}>
//               <TouchableOpacity
//                 onPress={() => {
//                   handleButtonClick();
//                 }}
//               >
//                 <Text style={styles.text11}>Log in</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//       <View style={styles.view10}>
//         <View style={styles.view9}></View>
//       </View>
//       <View style={styles.view10}>
//         <View style={styles.view9}></View>
//       </View>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image1: {
//     width: 50,
//     height: 50,
//   },
// });
