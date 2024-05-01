<script setup>
import { useUserStore } from '../stores/UserStore.js';
import { mdiThumbUpOutline } from '@mdi/js';

const userStore = useUserStore();

const props = defineProps({
    user: {
        type: Object,
        id: Number,
        username: String,
        creditors: Object,
        required: true,
    },
    creditors: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <v-card
        class="text-center text-primary mx-auto mt-2 border-b-sm"
        variant="text"
        max-width="600px"
    >
        <v-card-title class="text-h5 font-weight-bold">
            Пользователь {{ props.user.username }} должен
        </v-card-title>
        <v-card-text class="text-subtitle-1 text-primary font-weight-bold">
            <div v-if="props.creditors.size">
                <div
                    v-for="deb in props.creditors"
                    :key="deb.key"
                >
                    <div v-if="userStore.komyKto(user, deb)">
                        {{ userStore.komyKto(user, deb) }}
                    </div>
                    <div v-else>
                        <v-icon
                            :icon="mdiThumbUpOutline"
                            size="40"
                        />
                        <p>А никому он ничего не должен. Живет как хочет!</p>
                    </div>
                </div>
            </div>

            <div v-else>
                <v-icon
                    :icon="mdiThumbUpOutline"
                    size="40"
                />
                <p>А никому он ничего не должен. Живет как хочет!</p>
            </div>
        </v-card-text>
    </v-card>
</template>

<style scoped></style>
