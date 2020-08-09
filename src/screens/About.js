import React, { useContext } from 'react';
import { Scrolling, TextBold, TextTitle } from '../components/index';
import { LocalizationContext } from '../lang/Language';

export default About = props => {
    const { t } = useContext(LocalizationContext);

    return (
        <Scrolling style={{ paddingTop: 30 }}>
            <TextTitle>{t('about.title')}</TextTitle>
            <TextBold>{t('about.first')}</TextBold>
            <TextBody>{t('about.second')}</TextBody>
        </Scrolling>
    );
}