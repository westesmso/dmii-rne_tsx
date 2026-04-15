import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Slider} from "react-native-elements";
// Define the props for the SliderComponent
type SliderComponentProps = {};

// Main App component
const AppColorRGB: React.FunctionComponent<SliderComponentProps> = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Escala de cores RGB</Text>
      <View
        style={[
          styles.colorBox,
          { backgroundColor: `rgb(${red}, ${green}, ${blue})` },
        ]}
      />
      <Text style={styles.label}>Vermelho: {red}</Text>
      <Slider
        value={red}
        onValueChange={(value) => setRed(value)}
        minimumValue={0}
        maximumValue={255}
        step={1}
        thumbStyle={styles.thumb}
        trackStyle={styles.track}
      />
      <Text style={styles.label}>Verde: {green}</Text>
      <Slider
        value={green}
        onValueChange={(value) => setGreen(value)}
        minimumValue={0}
        maximumValue={255}
        step={1}
        thumbStyle={styles.thumb}
        trackStyle={styles.track}
      /> 
      <Text style={styles.label}>Azul: {blue}</Text>
      <Slider
        value={blue}
        onValueChange={(value) => setBlue(value)}
        minimumValue={0}
        maximumValue={255}
        step={1}
        thumbStyle={styles.thumb}
        trackStyle={styles.track}
      />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header:{
    fontSize:24,
    marginBottom:20,
  },
  colorBox: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "blue",
  },
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "lightgray",
  },
});
export default AppColorRGB;