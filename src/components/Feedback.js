import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import Color from '../constants/colors';

export default Feedback = props => {
    const [feedback, setFeedback] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TextBold>{props.query}</TextBold>
                <TouchableOpacity onPress={() => { }}>
                    <Icon name="thumbs-o-up" size={24} color={Color.primary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Icon name="thumbs-o-down" size={24} color={Color.darkRed} />
                </TouchableOpacity>
            </View>
            <View style={styles.innerContainer}>
                <View style={{ width: "90%" }}>
                    <TextInput
                        label={props.comment}
                        onChangeText={text => {
                            setFeedback(text);
                            console.log("feedback:", text);
                            // attach the article name when sending feedback to the server
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.send} onPress={() => { }}>
                    <Icon name="send-o" size={27} color={Color.primary} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingTop: 5,
        backgroundColor: Color.lightBlue
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly", // aligns horizontally
        paddingLeft: 4
    },
    send: {
        paddingTop: 25,
        width: 40,          // gives more room for user's tapping
        alignItems: "center",
    }
});