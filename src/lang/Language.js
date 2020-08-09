import React, { createContext, useMemo, useState } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './english';
import pt from './portuguese';
import es from './spanish';
import fr from './french';

i18n.fallbacks = true;     // when a value is missing from a language it'll fallback to another language with the key present.
i18n.locale = Localization.locale; // set the locale once at the beginning of the app.
i18n.translations = { en, pt, es, fr };

export const LocalizationContext = createContext();

export default Language = props => {
    const [locale, setLocale] = useState(Localization.locale);
    const localizationContext = useMemo(() => ({
        t: (scope, options) => i18n.t(scope, { locale, ...options }),
        locale,
        setLocale,
    }),
        [locale]
    );

    return (
        <LocalizationContext.Provider value={localizationContext}>
            {props.children}
        </LocalizationContext.Provider>
    );
}