import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationRu from './locales/ru/translation.json'
import translationEn from './locales/en/translation.json'
import translationZhCN from './locales/cn/translation.json'

const resources = {
    'ru': { translation: translationRu },
    'en': { translation: translationEn },
    'cn': { translation: translationZhCN}
};

i18n
    .use(Backend)
    .use (initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: true,
        supportedLngs: ['ru', 'en', 'cn'],
        resources,
        detection: {
            order: ['navigator']
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
