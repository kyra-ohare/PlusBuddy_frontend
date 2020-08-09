import React from "react";
import { View, Picker } from "react-native";
import Color from "../constants/colors";

export default DropDownMenu = props => {
    const { list, label } = props;          // destructoring props

    return (
        <View style={{ flexDirection: "column" }}>
            <TextBold>{label}</TextBold>
            <View
                style={{
                    borderColor: Color.primary,
                    borderRadius: 10,
                    borderWidth: 1,
                }}>
                <Picker
                    {...props}
                    mode="dropdown"
                    list={list}     // receives the list prop from parent component
                >
                    {list.map((value, key) => {     // maps the list of items
                        return <Picker.Item label={value} value={value} key={key} />
                    })}
                </Picker>
            </View>
        </View>
    );
}