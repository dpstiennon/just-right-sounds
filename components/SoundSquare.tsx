import { Pressable, StyleSheet, View } from "react-native";
import React from "react";

export const Square = ({ color }) => {
  return (
    <Pressable onPress={() => console.log("Pressed")} style={({pressed}) => ({
      opacity: pressed ? 0.5 : 1,
    })}>
      <View style={[styles.square, {backgroundColor: color}]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 50,
    height: 50,
  },
});

export default Square;
