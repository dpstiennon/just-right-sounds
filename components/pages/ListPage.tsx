import {
  FlatList,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Square from "../SoundSquare";

// blank square component with colored background

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
  return (
    <View>
      <FlatList
        key={numColumns}
        data={colors}
        keyExtractor={(item) => item + numColumns}
        renderItem={(item) => (
          <View style={[style.buttonPositioning, {marginHorizontal: isLandscape ? 70: 30 }]}>
            <Square color={item.item} />
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
