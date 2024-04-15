// import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function Title() {
  //logo encima da tela
  return (
    <View style={styles.boxImage}>
      <Image 
        style={styles.Image}
        source={require ('./logo.png')}
      />
    </View>
  );
}
