import {FlatList, StyleSheet, useWindowDimensions, View} from "react-native";
import React from "react";
import {MaterialCommunityIcons, Ionicons, FontAwesome5} from "@expo/vector-icons";

import Square from "../SoundSquare";
import {SoundData} from "../../types/SoundData";

const soundsData: SoundData[] = [
    {
        name: "Sad Trombone",
        icon: <MaterialCommunityIcons name="trumpet" size={24} color="black"/>,
        soundFile: require("../../assets/sad_trombone.mp3"),
        color: "green",
    },
    {
        name: 'Crickets',
        icon: <Ionicons name='bug' size={24} color='black'/>,
        soundFile: require("../../assets/crickets.mp3"),
        color: 'blue'
    },
    {
        name: 'Laugh Track',
        icon: <FontAwesome5 name="laugh-squint" size={24} color="black" />,
        soundFile: require("../../assets/laugh_track.mp3"),
        color: '#E6B333'
    },
    {
        name: 'Rimshot',
        icon: <FontAwesome5 name="drum" size={24} color="black" />,
        soundFile: require("../../assets/rimshot.mp3"),
        color: '#99FF99'
    }
];
const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
];

const ListPage = () => {
    const dimensions = useWindowDimensions();
    const isLandscape = dimensions.width > dimensions.height;
    const numColumns = isLandscape ? 4 : 3;
    const marginBetween = isLandscape ? dimensions.width / 12 : 30;
    return (
        <View>
            <FlatList
                key={numColumns}
                data={soundsData}
                renderItem={({item}) => (
                    <View
                        style={[
                            style.buttonPositioning,
                            {marginHorizontal: marginBetween},
                        ]}
                    >
                        <Square soundData={item}/>
                    </View>
                )}
                numColumns={numColumns}
            />
        </View>
    );
};

const style = StyleSheet.create({
    buttonPositioning: {
        margin: 30,
    },
});

export default ListPage;
