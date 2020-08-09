import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Scrolling, TextBody, TextBold, TextLink, TextTitle, PinchImage } from '../components/index';
import string from '../lang/english';
// import string from '../lang/portuguese';
// import string from '../lang/spanish';
// import string from '../lang/french';

export default Article = props => {
    const key = 8;

    return (
        <Scrolling>
            <View style={{ flex: 1 }}>
                <TextTitle>{string.articles[key].title}</TextTitle>
            </View>
            <View style={{ flex: 1 }}>
                <TextBody>{string.articles[key].first}</TextBody>
                <TextBold>{string.articles[key].subtitle}</TextBold>
                <TextBody>{string.articles[key].second}</TextBody>
                <PinchImage source={string.articles[key].image} caption={string.articles[key].caption} />
                <TextBody>{string.articles[key].third}</TextBody>
                <TextBold>{string.articles.reference}</TextBold>
                {string.articles[key].references.map((value, key) => {     // mapping the list of references
                    return <TextLink key={key} onPress={() => WebBrowser.openBrowserAsync(value)}>{value}</TextLink>
                })}
            </View>
        </Scrolling >
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        // height: 500,

    }
});