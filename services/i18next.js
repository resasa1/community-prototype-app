import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import chn from '../locales/chn.json';
import eng from '../locales/eng.json';
import ina from '../locales/ina.json';
import jpn from '../locales/jpn.json';

export const languageResources = {
    eng: {translation: eng},
    chn: {translation: chn},
    jpn: {translation: jpn},
    ina: {translation: ina},
}

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'eng',
    fallbackLng: 'eng',
    resources: languageResources,
})

export default i18n;