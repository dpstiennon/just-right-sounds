import {View} from "react-native";

export const Square = ({color}) => {
    return (
        <View style={{width: 50, height: 50, backgroundColor: color}}/>
    );
}