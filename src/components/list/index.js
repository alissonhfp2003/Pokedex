import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import api from "../../service/api";
import styles from "./style";
import Card from "./Card";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      const response = await api.get("/pokemon/");
      const { results } = response.data;

      const loadPokemons = await Promise.all(
        results.map(async (pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            name: pokemon.name,
            id,
            types,
          };
        })
      );

      setPokemon(loadPokemons);
    }

    getPokemons();
  }, []);

  async function getMoreInfo(url) {
    const response = await api.get(url);
    const { id, types } = response.data;

    return {
      id,
      types,
    };
  }

  return (
    <FlatList
    data={pokemon}
    keyExtractor={pokemon => pokemon.id.toString()}
      renderItem={({ item: pokemon }) => (
        <Card data={pokemon}/>
      )}
    />
  );
}
