<script setup>
import { useUserStore } from '../stores/UserStore.js';
import { mdiThumbUpOutline } from '@mdi/js';
import { onBeforeMount } from 'vue';

const userStore = useUserStore();
onBeforeMount(() => {
    for (const user of userStore.users) {
        userStore.fillTransactions(user);
    }
});
</script>

<template>
    <v-card
        class="text-center text-primary mx-auto mt-2 border-b-sm"
        variant="text"
        max-width="600px"
        v-for="user in userStore.users"
        :key="user.id"
        :user="user"
        :transactions="user.transactions"
    >
        <div
            v-if="user.transactions.size"
            v-for="bb in user.transactions"
            :key="Date.now()"
        >
            f
            {{ bb }}
        </div>
        <div v-else>
            <v-icon
                :icon="mdiThumbUpOutline"
                size="40"
            />
            <p>А никому он ничего не должен. Живет как хочет!</p>
        </div>
        <!--                <div v-if="userStore.komyKto(user).size">-->
        <!--                    <v-card-title> Пользователю {{ user.username }} должны </v-card-title>-->
        <!--                    <v-card-text> </v-card-text>-->
        <!--                </div>-->
    </v-card>
</template>

<style scoped></style>
