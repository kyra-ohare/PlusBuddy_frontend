import React, { useContext } from 'react';
import { View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { PinchImage, Scrolling, TextBody, TextBold, TextLink, TextTitle, Feedback, HeaderMenu } from '../components/index';
import { LocalizationContext } from '../lang/Language';
import string from '../lang/english'; // this is necessary because of the image source on line 23

export default Article = props => {
    const { key } = props.route.params;
    const { t } = useContext(LocalizationContext);

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
                <PinchImage source={string.articles[key].image} caption={t('articles.' + key + '.caption')} />
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