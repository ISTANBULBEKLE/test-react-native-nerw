import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HelloWorld from "./components/HelloWorld";
import SpaceCollections from "./components/SpaceCollections";
import ShowYourName from "./components/ShowYourName";
import MarsRoverApi from "./components/MarsRoverApi";

const App = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>This is a complex space log app</Text>
      <Image style={styles.image} source={require("./assets/starship.jpeg")} />
      <Text data-testid="headerText" style={styles.textWelcome}>
        Hi Space Logger!
      </Text>
      <Button
        style={styles.button}
        title="Go to the Hello World Page"
        onPress={() => props.navigation.navigate("Hello")}
      />
      <Button
        style={styles.space}
        title="Go to the Collections Page"
        onPress={() => props.navigation.navigate("Space")}
      />
      <Button
        style={styles.name}
        title="Go to the Name Page"
        onPress={() => props.navigation.navigate("Name")}
      />
      <Button
        style={styles.rover}
        title="Go to the Mars Rover Page"
        onPress={() => props.navigation.navigate("Rover")}
      />
    </View>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: App,
    Hello: HelloWorld,
    Space: SpaceCollections,
    Name: ShowYourName,
    Rover: MarsRoverApi,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
  },
  textWelcome: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 5,
  },
});
