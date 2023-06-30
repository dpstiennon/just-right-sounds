import {AVPlaybackSource} from "expo-av";

export type SoundData = {
    name: string;
    icon: JSX.Element;
    soundFile: AVPlaybackSource;
    color: string;
};