import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Audio } from "expo-av";
import {SoundData} from "../types/SoundData";

interface SquareProps {
  soundData: SoundData
}

export const Square = ({ soundData }: SquareProps) => {
  const {color, icon, soundFile} = soundData
  const [sound, setSound] = React.useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
        soundFile
    );
    setSound(sound);
    await sound.playAsync();
  }

    React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const stopSound = async () => {
    if(sound) {
      await sound.stopAsync();
    }
  }

  return (
    <Pressable
      onPressIn={playSound}
      onPressOut={stopSound}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <View style={[styles.square, { backgroundColor: color }]} >
        {icon}
      </View>
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
