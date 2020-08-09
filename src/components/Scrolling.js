import React from 'react';
import { ScrollView } from 'react-native';
import Color from '../constants/colors';

// a framework which permits the user to scroll if necessary depending on the screen size
export default Scrolling = props => {
    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,                // ensure controls throughout the whole screen
                justifyContent: "center",   // aligns components horizontally
                padding: 5,                 // so contents are not squished
                paddingTop: 20,             // extra space between header and content
                backgroundColor: Color.background,
                ...props.style
            }}
            {...props}
        >
            {props.children}
        </ScrollView>
    );
}