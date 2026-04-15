import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Button } from "@rneui/themed";

const { width, height } = Dimensions.get("window");

const CIRCLE_SIZE = 50;
const STEP = 10;

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveCircle = (axis: "x" | "y", amount: number) => {
    setPosition((prev) => {
      const newValue = prev[axis] + amount;
      const minValue = -width / 2 + CIRCLE_SIZE / 2; // Allow half of the circle to go off-screen
      const maxValue = width / 2 - CIRCLE_SIZE / 2; // Allow half of the circle to go off-screen

      return {
        ...prev,
        [axis]: Math.min(Math.max(newValue, minValue), maxValue),
      };
    });
  };
  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          borderRadius: CIRCLE_SIZE / 2,
          backgroundColor: "blue",
          position: "absolute",
          left: width / 2 + position.x - CIRCLE_SIZE / 2,
          top: height / 2 + position.y - CIRCLE_SIZE / 2,
        }}
      />
      <View style={{ flexDirection: "row", marginTop: 150 }}>
        <Button title="Left" onPress={() => moveCircle("x", -STEP)} />
        <Button title="Right" onPress={() => moveCircle("x", STEP)} />
        <Button title="Up" onPress={() => moveCircle("y", -STEP)} />
        <Button title="Down" onPress={() => moveCircle("y", STEP)} />
        <Button title="Reset" onPress={resetPosition} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default App;