import React from "react";
import { TouchableOpacity } from "react-native";
import Color from "../constants/colors";

//this is a customized button with dark blue as background color and white bold letters as title
export default Button = props => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 150,
                height: 40,
                backgroundColor: Color.primary,
                borderRadius: 10,
                //iOS shadow
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                //Android shadow
                elevation: 10,
                ...props.style
            }}
            onPress={() => props.onPress()}
        >
            <TextBold style={{ color: "white" }}>{props.title}</TextBold>
        </TouchableOpacity>
    );
}