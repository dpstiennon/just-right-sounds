import {FlatList, Text, View} from "react-native";
import React from "react";
import {Square} from "../SoundSquare";

// blank square component with colored background

const colors = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'
]

const ListPage = () => {
    return (
        <View>
            <FlatList data={colors} renderItem={(item) => <Square color={item.item}/>} numColumns={3}/>
            <Text>ListPage</Text>
        </View>
    );
}

export default ListPage;