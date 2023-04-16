import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ navigation }) {
  const { height, width } = Dimensions.get("window");
  const [input, Setinput] = useState({});
  const handle_input = () => {};
  return (
    <SafeAreaView style={styles.main_body}>
      <View style={styles.L_S_container}>
        <TouchableOpacity
          style={styles.R_button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.input_text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.L_button}>
          <Text style={styles.input_text}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.L_container}>
        <View style={styles.input_fields}>
          <TextInput placeholder="username" />
        </View>
        <View style={styles.input_fields}>
          <TextInput placeholder="password" secureTextEntry />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.text}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  L_container: {
    flex: 0.3,
    height: "5%",
    width: "90%",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    margin: 20,
    borderColor: "grey",
    borderWidth: 0,
    borderRadius: 10,
  },
  main_body: {
    height: "100%",
    justifyContent: "center",
  },
  input_text: {
    color: "white",
  },
  input_fields: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
  log_reg: {},
  R_button: {
    backgroundColor: "black",
    width: "42%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  L_button: {
    backgroundColor: "grey",
    width: "42%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
  },
  L_S_container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  text: {
    color: "grey",
    marginLeft: 115,
    marginTop: 10,
  },
});
