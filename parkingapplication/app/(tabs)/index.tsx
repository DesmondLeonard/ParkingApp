import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import ParkingImg from "@/assets/images/Parkingsign.png";
import { Link } from "expo-router";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={ParkingImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Text className="testcss" style={styles.title}>
          Parking App
        </Text>

        <Link href={"/contact"} style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    color: "Black",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 120,
  },
  link: {
    color: "Black",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    padding: 4,
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    height: 60,
    padding: 6,
    justifyContent: "center",
  },
  buttonText: {
    color: "Black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default app;
