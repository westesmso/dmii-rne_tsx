import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { BottomSheet } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const [screen, setScreen] = useState("Principal");
  const [isVisible, setIsVisible] = useState(false);
  const menuItems = ["Principal", "Vendas", "Cadastro"];

  const renderScreen = () => {
    switch (screen) {
      case "Principal":
        return <Text>Principal Screen</Text>;
      case "Vendas":
        return <Text>Vendas Screen</Text>;
      case "Cadastro":
        return <Text>Cadastro Screen</Text>;
      default:
        return <Text>Principal Screen</Text>;
    }
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {renderScreen()}
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <Text style={styles.openMenuText}>Open Menu</Text>
        </TouchableOpacity>
        {Platform.OS === "web" ? (
          isVisible ? (
            <View style={styles.webOverlay}>
              <TouchableOpacity style={styles.webBackdrop} onPress={() => setIsVisible(false)} />
              <View style={styles.bottomSheet}>
                {menuItems.map((item) => (
                  <TouchableOpacity key={item} onPress={() => { setScreen(item); setIsVisible(false); }}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ) : null
        ) : (
          <BottomSheet isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
            <View style={styles.bottomSheet}>
              {menuItems.map((item) => (
                <TouchableOpacity key={item} onPress={() => { setScreen(item); setIsVisible(false); }}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </BottomSheet>
        )}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheet: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 12,
    minWidth: 220,
    gap: 12,
  },
  webOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  webBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  openMenuText: {
    fontSize: 18,
    backgroundColor: "#007AFF",
    color: "white",
    padding: 10,
    borderRadius: 5,
  },
});

export default App;