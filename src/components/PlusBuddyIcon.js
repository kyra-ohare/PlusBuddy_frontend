import React from 'react';
import { Image, View, } from 'react-native';

// default settings for Plus Buddy icon
export default PlusBuddyIcon = props => {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            ...props.style
        }}>
            <Image source={require("../assets/icon.png")} />
        </View>
    );
}