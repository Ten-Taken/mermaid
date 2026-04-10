import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'mermaidTheme',
    themes: {
      mermLocationTheme: {
        dark: false,
        colors: {
          background: '#F2F7F7', //mermPanel
          surface: '#F2F7F7', //mermPanel -card bg
          primary: '#004A79', //mermParaText
          secondary: '#007393', //keep
          'on-background': '#004A79',
          'on-surface': '#004A79',
          'on-primary': '#004A79',
          'on-secondary': '#007393',
        },
      },
      mermaidTheme: {
        dark: false,
        colors: {
          background: '#a1d9e6',
          surface: '#3c5491',
          primary: '#62d4c1',
          secondary: '#8bd8cf',
          accent: '#c7fff6',
          error: '#ff8a80',
          info: '#7dd3fc',
          success: '#86efac',
          warning: '#fcd34d',
          mermPanel: '#F2F7F7',
          mermParaText: '#004A79',
          mermBannerBlue: '#00A4E4',
        },
      },
    },
  },
})

export default vuetify
