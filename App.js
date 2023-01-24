import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const showToast = () => {
    console.log("Toast clicked...");
    ToastAndroid.show(
      "You clicked this toast!",
      ToastAndroid.LONG,
      ToastAndroid.TOP
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello app user</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={() => showToast()}>
        <Text style={{ color: "#fff" }}>Press me!</Text>
      </TouchableOpacity>
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
  text: {
    colors: "#304ffe",
    fontSize: 20,
    padding: 20,
  },
  button: {
    backgroundColor: "#29b6f6",
    borderRadius: 10,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
