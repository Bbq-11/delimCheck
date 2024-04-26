<template>
    <v-app>
        <v-layout class="user-select-hidden">
            <v-app-bar>
                <v-spacer />
                <v-btn
                    rounded="xl"
                    class="h-auto w-auto pa-3"
                >
                    <v-icon
                        size="40"
                        :icon="mdiWeatherSunsetDown"
                    />
                    <v-icon
                        size="40"
                        :icon="mdiWeatherSunsetUp"
                    />
                </v-btn>
            </v-app-bar>
            <v-main>
                <v-container class="h-100 width-app">
                    <router-view />
                </v-container>
            </v-main>
        </v-layout>
    </v-app>
</template>
<script setup>
import { mdiWeatherSunsetDown, mdiWeatherSunsetUp } from '@mdi/js';
</script>
