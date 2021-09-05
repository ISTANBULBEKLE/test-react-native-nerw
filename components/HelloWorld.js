import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HelloWorld = () => {
  return (
    <View>
      <Text style={styles.header}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
header:{
  fontSize: 20,
  color: '#000',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 50

}
});

export default HelloWorld;
