<script setup>
import UserList from '../components/UserList.vue';
import CardDialog from '../components/DialogError.vue';
import { useUserStore } from '../stores/UserStore.js';

const userStore = useUserStore();
</script>

<template>
    <v-sheet
        class="rounded-lg mt-12 mb-6"
        elevation="10"
    >
        <UserList />
    </v-sheet>
    <router-link
        v-if="userStore.totalCountUsers >= 2 && !userStore.checkDataUsers"
        to="/pre-check"
        class="w-100"
    >
        <v-btn-primary
            class="w-100 py-4"
            elevation="10"
            text="Дальше!"
        />
    </router-link>
    <CardDialog
        v-else-if="userStore.totalCountUsers < 2"
        text="Добавьте еще кого-нибудь!"
    />
    <CardDialog
        v-else
        text="Стоить дать всем имена!"
    />
</template>
