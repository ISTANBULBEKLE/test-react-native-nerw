import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";

const ShowYourName = (props) => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.text}>Your name is : {name}</Text>
      <Button
        title="Submit"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    padding: 10,
    fontSize: 20,
  },
});

export default ShowYourName;
