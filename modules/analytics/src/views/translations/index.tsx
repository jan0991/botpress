import { langExtend, langInit } from 'botpress/i18n'

import en from './en.json'
import fr from './fr.json'
const translations = { en, fr }
let initialized = false

const initializeTranslations = () => {
  if (!initialized) {
    initialized = true
    langExtend(translations)
    langInit()
  }
}

export { initializeTranslations }
