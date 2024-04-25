import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import colors from 'vuetify/util/colors';

export default createVuetify({
    theme: {
        defaultTheme: 'default',
        themes: {
            default: {
                dark: false,
                colors: {
                    primary: colors.indigo.lighten1,
                    accent: colors.red.lighten1,
                    surfacehigh: '#2a2a2a',
                },
            },
        },
    },
    icons: {
        aliases,
        sets: {
            mdi,
        },
    },
});
