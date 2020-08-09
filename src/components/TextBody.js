import React from 'react';
import { Text } from 'react-native';

// customized text body
export default TextBody = props => {
    return (
        <Text
            style={{
                fontSize: 15,
                lineHeight: 20, // extra space in broken lines
                ...props.style
            }}
        >
            {props.children}
        </Text>
    );
}