import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Scrolling, TextBody, TextBold, TextLink, TextTitle, Feedback, HeaderMenu } from '../components/index';
import { LocalizationContext } from '../lang/Language';

export default Article = props => {
    const { key } = props.route.params;
    const { t } = useContext(LocalizationContext);
    const [view, setView] = useState(false);
    const [title, setTitme] = useState("");
    const [first, setFirst] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [second, setSecond] = useState("");
    const [image, setImage] = useState("");
    const [caption, setCaption] = useState("");
    const [third, setThird] = useState("");
    const [reference, setReference] = useState("");
    const [references, setReferences] = useState([]);


    useEffect(() => {
        let mount = true;

        setView(!view);

        if (mount) // ensures the method runs when it is mounted only
            console.log(`if(mount) => ${mount} | view: ${view}`)


        return () => {
            mount = false;
            console.log(`useEffect return: ${mount} | view: ${view}`)
        }  // cleans up to prevent memory leak
    }, [t]);

    return (
        <Scrolling>
            {/* <HeaderMenu /> */}
            <View style={{ flex: 1 }}>
                <TextTitle>{t('articles.' + key + '.title')}</TextTitle>
            </View>
            <View style={{ flex: 1 }}>
                <TextBody>{t('articles.' + key + '.first')}</TextBody>
                <TextBold>{t('articles.' + key + '.subtitle')}</TextBold>
                <TextBody>{t('articles.' + key + '.second')}</TextBody>
                <View style={styles.imageContainer}>
                    <Image source={t('articles.' + key + '.image')} />
                    <TextBody>{t('articles.' + key + '.caption')}</TextBody>
                </View>
                <TextBody>{t('articles.' + key + '.third')}</TextBody>
                <TextBold>{t('articles.reference')}</TextBold>
                {t('articles.' + key + '.references').map((value, key) => {     // mapping the list of references
                    return <TextLink key={key} onPress={() => WebBrowser.openBrowserAsync(value)}>{value}</TextLink>
                })}
                <Feedback
                    query={t('articles.feedback.query')}
                    comment={t('articles.feedback.comment')}
                />
            </View>
        </Scrolling>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});