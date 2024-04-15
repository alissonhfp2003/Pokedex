import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style";

export default function Card({ data }) {
  return (
    <View style={styles.PokemonCard}>
      <View style={styles.leftSide}>
        <Text style={styles.PokemonId}>#{data.id}</Text>
        <Text style={styles.PokemonName}> {data.name}</Text>
      </View>
      <View style={styles.rightSide}>
        <Image
          style={styles.PokemonImage}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
          }}
        />
      </View>
    </View>
  );
}
