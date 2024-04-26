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
        <v-btn
            elevation="4"
            class="py-4 px-6 text-primary bg-surface-variant"
            border="sm"
            rounded="xl"
            height="auto"
            width="100%"
            text="Дальше!"
        />
    </router-link>
    <!--        <CardDialog text="Добавьте еще кого-нибудь!" />-->
    <!--        <CardDialog text="Стоить дать всем имена!" />-->
</template>

<script setup>
import UserList from '../components/UserList.vue';
// import CardDialog from '../components/DialogError.vue';
</script>
