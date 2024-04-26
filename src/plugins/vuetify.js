import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import colors from 'vuetify/util/colors';

export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                dark: false,
                colors: {
                    background: colors.lightGreen.lighten4,
                    surface: colors.lightGreen.lighten5,
                    // 'surface-bright': '#FFFFFF',
                    'surface-variant': colors.lightGreen.lighten3,
                    // 'on-surface-variant': '#EEEEEE',
                    //
                    primary: '#263b26',
                    'primary-darken-1': '#1F5592',
                    secondary: '#48A9A6',
                    'secondary-darken-1': '#018786',
                    // accent
                    //
                    error: colors.orange.darken1,
                    errorLight: colors.orange.lighten5,
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                },
            },
            dark: {
                colors: {
                    background: '#1a281a',
                    surface: '#263b26',
                    'surface-bright': '#FFFFFF',
                    'surface-light': '#EEEEEE',
                    'surface-variant': '#424242',
                    'on-surface-variant': '#EEEEEE',
                    //
                    primary: colors.lightGreen.lighten4,
                    'primary-darken-1': '#1F5592',
                    secondary: '#48A9A6',
                    'secondary-darken-1': '#018786',
                    // accent
                    //
                    error: '#B00020',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
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
