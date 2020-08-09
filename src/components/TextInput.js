import React from "react";
import { View, TextInput as Input, StyleSheet } from "react-native";
import Color from "../constants/colors";

// this customized input has a label and the input field has a border
export default TextInput = props => {
    return (
        <View style={styles.container}>
            <TextBold>{props.label}</TextBold>
            <Input style={{ ...styles.input, ...props.style }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        paddingVertical: 5
    },
    input: {
        fontSize: 15,
        padding: 5,
        borderColor: Color.primary,
        borderWidth: 1,
        borderRadius: 10,
    }
});