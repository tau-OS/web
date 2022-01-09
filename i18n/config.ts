import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
        en: {
            translations: en,
        },
    },
    ns: ['translations'],
    defaultNS: 'translations',
})

i18n.languages = ['en', 'es']

export default i18n