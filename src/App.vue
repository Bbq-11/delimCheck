<template>
    <v-app>
        <v-layout>
            <v-app-bar
                title="CheckDeli"
                class="disable-user-select"
            ></v-app-bar>
            <v-main>
                <v-container class="h-100 width-app">
                    <router-view />
                </v-container>
            </v-main>
        </v-layout>
    </v-app>
</template>
<script setup></script>
