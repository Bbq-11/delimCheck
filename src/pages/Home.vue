<script setup></script>

<template>
    <v-container class="fill-height">
        <v-card
            class="disable-user-select w-100 text-center"
            max-width="800"
        >
            <v-card-item>
                <v-card-title>Чекдели</v-card-title>
                <v-card-subtitle> Делить чеки - просто! </v-card-subtitle>
            </v-card-item>
            <v-card-actions class="justify-center">
                <v-btn>
                    <router-link to="/usernames">
                        <v-btn> Начать! </v-btn>
                    </router-link>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
