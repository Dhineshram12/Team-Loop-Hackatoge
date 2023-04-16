import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React from "react";

export default function Recipies() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Recipies</Text>
      </View>
      <ScrollView horizontal pagingEnabled>
        <View style={styles.scroll}>
          <Text style={{ fontSize: 20, color: "white" }}>LOGIN</Text>
          <Image source={require("../assets/images/bread.png")} />
        </View>
        <View style={styles.scroll}>
          <Text style={{ fontSize: 20, color: "white" }}>SignUP</Text>
          <Image source={require("../assets/images/bread.png")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 65,
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "center",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  text: {
    color: "#F4B33D",
    alignContent: "center",
    fontSize: 50,
  },
  scroll: {
    flex: 0.5,
    height: 30,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: Dimensions.get("window").width,
  },
});
