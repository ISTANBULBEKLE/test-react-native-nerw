import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

const MarsRoverApi = () => {
  const [rover, setRover] = useState([]);

  let EARTH_DAY = "2020-02-22";
  let CAMERA = "RHAZ";
  let PAGE = 2;
  const API_KEY = "MxRM17euTw8oZ9faBZuhamON8Ijab61qc5w16NS2";

  let API_URI = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${EARTH_DAY}&api_key=${API_KEY}`;

  const fetchRoverPhotos = async () => {
    try {
      let response = await fetch(API_URI);
      let data = await response.json();
      setRover(data.photos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRoverPhotos();
  }, []);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Text>Mars rover API with:</Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={rover}
          renderItem={({ item }) => {
            return (
              <View style={styles.imageCover}>
                <Image style={styles.image} source={{ uri: item.img_src }} />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  imageCover: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default MarsRoverApi;
