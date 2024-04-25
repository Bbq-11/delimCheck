<script setup>
// import { mdiAutorenew } from '@mdi/js';
import UserListItem from './UserListItem.vue';
</script>

<template>
    <div class="border-b-xl d-flex justify-space-around py-4">
        <v-btn> Добавить человека! </v-btn>
    </div>
    <v-card
        :height="300"
        :variant="'text'"
        class="overflow-y-auto overflow-x-auto"
    >
        <v-card-text>
            <UserListItem v-for="us in 5" />
        </v-card-text>
        <!--        <v-card-text class="d-flex justify-center align-center text-center fill-height">-->
        <!--            <div>-->
        <!--                <v-icon-->
        <!--                    size="80"-->
        <!--                    :icon="mdiAutorenew"-->
        <!--                />-->
        <!--                <p>Пока что пусто..</p>-->
        <!--                <p>Давай добавим кого-нибудь!</p>-->
        <!--            </div>-->
        <!--        </v-card-text>-->
    </v-card>
</template>

<style scoped></style>
