<script setup>
import { useUserStore } from '../stores/UserStore.js';
import { onMounted } from 'vue';

import { mdiThumbUpOutline } from '@mdi/js';

const userStore = useUserStore();
onMounted(() => {
    for (const user of userStore.users) {
        userStore.fillCreditors(user);
    }
});
</script>

<template>
    <v-card
        class="text-center text-primary mx-auto mb-0"
        variant="text"
        max-width="600px"
        v-for="user in userStore.users"
        :key="user.id"
        :user="user"
        :transactions="user.transactions"
    >
        <div class="mt-2 border-b-sm">
            <v-card-title> Пользователь {{ user.username }} должен </v-card-title>
            <v-card-text>
                <div
                    v-if="user.creditors.size"
                    v-for="creditor in user.creditors"
                >
                    {{ creditor.join(' - ') }}
                </div>
                <div v-else>
                    <v-icon
                        :icon="mdiThumbUpOutline"
                        size="40"
                    />
                    <p>А никому он ничего не должен. Живет как хочет!</p>
                </div>
            </v-card-text>
        </div>
    </v-card>
</template>

<style scoped></style>
