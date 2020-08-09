import React, { useContext } from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import { DropDownMenu, PlusBuddyIcon, Scrolling, TextBody, TextBold, TextTitle } from '../components/index';
import { LocalizationContext } from '../lang/Language';
import Color from '../constants/colors';

const languages = [{ key: 'null', label: '🌍' }, { key: 'en', label: '🇬🇧' }, { key: 'pt', label: '🇧🇷' }, { key: 'es', label: '🇪🇸' }, { key: 'fr', label: '🇫🇷' }];

export default Home = props => {
    const { t, locale, setLocale } = useContext(LocalizationContext); // deconstructoring context from language

    return (
        <Scrolling style={{ paddingTop: 30 }}>
            <View style={styles.languages}>
                <Picker                       // this picker is here because it is a list of objects
                    mode="dropdown"
                    selectedValue={locale}
                    onValueChange={(value, key) => {
                        if (value !== 'null') // ensures the first value, which is a globe, will not be updated
                            setLocale(value);
                    }}
                >
                    {languages.map((languageItem, i) => {
                        return <Picker.Item key={i} value={languageItem.key} label={languageItem.label} />
                    })}
                </Picker>
            </View>
            <PlusBuddyIcon />
            <View style={{ flex: 2 }}>
                <TextTitle style={styles.title}>{t('home.title')}</TextTitle>
                <TextTitle style={styles.subtitle}>{t('home.subtitle')}</TextTitle>
                <View style={{ padding: 5 }} />
                <DropDownMenu
                    label={t('home.label')}
                    list={t('home.articles')}
                    onValueChange={(value, key) => {
                        if (key != 0)
                            props.navigation.navigate("Article", { key });
                    }}
                />
            </View>
            <TextBody style={{ textAlign: "center" }}>
                <TextBold style={{ fontSize: 16 }}>{t('home.quote')}</TextBold>
                {t('home.author')}</TextBody>
        </Scrolling >
    );
}

const styles = StyleSheet.create({
    languages: {
        width: 95,
        height: 50,
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        borderColor: Color.primary,
        borderRadius: 10,
        borderWidth: 1,
    },
    title: {
        fontSize: 30,
        paddingTop: 15,
    },
    subtitle: {
        fontWeight: "normal",
        paddingVertical: 50,
        // paddingBottom: 60
    },
});