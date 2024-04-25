<template>
    <v-sheet class="rounded-lg border border-gray-200 mb-8">
        <UserList />
    </v-sheet>
    <div class="d-flex justify-center">
        <router-link to="/pre-check">
            <v-btn> Дальше! </v-btn>
        </router-link>
        <CardDialog text="Добавьте еще кого-нибудь!" />
        <CardDialog text="Стоить дать всем имена!" />
    </div>
</template>

<script setup>
import UserList from '../components/UserList.vue';
import CardDialog from '../components/CardDialog.vue';
</script>
