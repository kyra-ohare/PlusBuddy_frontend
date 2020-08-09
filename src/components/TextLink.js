import React from 'react';
import { Text } from 'react-native';
import Color from "../constants/colors";

// customized link with dark blue and underscored letters
export default TextLink = props => {
    return (
        <Text                       // for some reason, the link hasn't worked with TextBold
            style={{
                fontSize: 15,
                lineHeight: 20,
                fontWeight: "bold",
                textDecorationLine: "underline",
                color: Color.primary,
                ...props.style
            }}
            onPress={() => props.onPress()}
        >
            {props.children}
        </Text>
    );
}