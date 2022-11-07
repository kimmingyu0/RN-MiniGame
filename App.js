import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
        <StartGameScreen />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
