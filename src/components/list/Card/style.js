import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  PokemonCard: {
    backgroundColor: "#5860FF",
    borderRadius: 10,
    marginTop: 30,
    flexDirection: "row",
    padding: 20,
    width: `auto`,
    height: 160,
  },

  leftSide: {
    width: "50%",
    position: "relative",
  },

  rightSide: {
    justifyContent: `center`,
    alignItems: `center`,
    width: "40%",
    position: `relative`,
  },

  PokemonId: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 14,
    color: "black",
  },

  PokemonName: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 31,
    marginTop: 5,
    textTransform: "capitalize",
    color: "black",
  },

  PokemonImage: {
    marginTop: 1,
    width: 130,
    height: 130,
  },
});

export default styles;
