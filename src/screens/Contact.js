import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, PlusBuddyIcon, Scrolling, TextInput, TextTitle } from '../components/index';
import { LocalizationContext } from '../lang/Language';

export default Contact = props => {
    const { t } = useContext(LocalizationContext);
    const [sent, setSent] = useState(false);

    const handleSubmit = () => {
        setSent(!sent);
    }

    return (
        <Scrolling style={{ paddingTop: 30 }}>
            <PlusBuddyIcon />
            <View style={{ flex: 2 }}>
                {!sent ?
                    <View>
                        <TextTitle>{t('contact.title')}</TextTitle>
                        <View style={styles.spacing} />
                        <TextTitle>{t('contact.subtitle')}</TextTitle>
                        <View style={styles.spacing} />
                        <TextInput
                            label={t('contact.email')}
                        />
                        <TextInput
                            label={t('contact.comment')}
                            style={styles.description}
                        />
                        <View style={styles.spacing} />
                        <Button
                            title={t('contact.button1')}
                            style={{ alignSelf: "center" }}
                            onPress={handleSubmit}
                        />
                    </View> : <View>
                        <TextTitle>{t('contact.thanks')}</TextTitle>
                        <View style={styles.spacing} />
                        <Button
                            title={t('contact.button2')}
                            style={styles.button}
                            onPress={() => setSent(!sent)}
                        />
                    </View>
                }
            </ View>
        </Scrolling>
    );
}

const styles = StyleSheet.create({
    description: {
        height: 100,
    },
    button: {
        width: 200,
        alignSelf: "center",
    },
    spacing: {
        padding: 15
    }
});