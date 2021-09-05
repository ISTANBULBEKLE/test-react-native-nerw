import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SpaceCollections = (props) => {
  console.log(props);
  return (
    <View>
      <Text>Collections</Text>
      <Button
        title="Go back"
        onPress={() => props.navigation.navigate("Hello")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SpaceCollections;
