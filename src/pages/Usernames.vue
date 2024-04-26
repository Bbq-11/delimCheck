<template>
    <v-sheet
        elevation="10"
        class="rounded-lg mb-6"
    >
        <UserList />
    </v-sheet>
    <router-link
        to="/pre-check"
        class="w-100"
    >
        <v-btn-primary
            class="w-100 py-4"
            elevation="10"
            text="Дальше!"
        />
    </router-link>
    <!--    <CardDialog text="Добавьте еще кого-нибудь!" />-->
    <!--        <CardDialog text="Стоить дать всем имена!" />-->
</template>

<script setup>
import UserList from '../components/UserList.vue';
// import CardDialog from '../components/DialogError.vue';
</script>
