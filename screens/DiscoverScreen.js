import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Discover</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
});

export default FeedScreen;
