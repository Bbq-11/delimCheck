<script setup>
import { mdiAutorenew, mdiPlusCircleOutline } from '@mdi/js';
// import UserListItem from './UserListItem.vue';
</script>

<template>
    <div class="border-b-sm d-flex justify-space-around py-4 mb-2">
        <v-btn
            class="py-2 px-5 text-primary bg-surface-variant text-primary"
            border="sm"
            rounded="xl"
            height="auto"
            :prepend-icon="mdiPlusCircleOutline"
            text="Добавить человека!"
        />
    </div>
    <v-card
        :height="350"
        :variant="'text'"
        class="overflow-y-auto overflow-x-auto scroll-container mb-1 mr-1"
    >
        <!--        <v-card-text>-->
        <!--            <UserListItem v-for="us in 5" />-->
        <!--        </v-card-text>-->
        <v-card-text class="d-flex justify-center align-center text-center fill-height">
            <div>
                <v-icon
                    size="80"
                    class="rote"
                    color="primary"
                    :icon="mdiAutorenew"
                />
                <div class="text-subtitle-1 text-primary">
                    <p>Пока что пусто..</p>
                    <p>Давай добавим кого-нибудь!</p>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<style scoped></style>
