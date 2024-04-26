<script setup></script>

<template>
    <v-container class="fill-height pa-0">
        <v-card
            elevation="10"
            rounded="xl"
            class="w-100 text-center pa-6 ma-0"
            max-width="788"
        >
            <v-card-item class="pa-0 mb-6">
                <v-card-title class="mb-2 text-primary">
                    <span class="text-h2 font-weight-bold">Чекдели</span>
                </v-card-title>
                <v-card-subtitle class="text-primary">
                    <span class="text-subtitle-1 text-primary font-weight-bold"> Делить чеки - просто! </span>
                </v-card-subtitle>
            </v-card-item>
            <v-card-actions class="justify-center">
                <router-link to="/usernames">
                    <v-btn-primary
                        class="py-4 px-6"
                        text="Начать"
                    />
                </router-link>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
