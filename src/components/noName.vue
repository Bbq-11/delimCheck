<script setup>
import { useUserStore } from '../stores/UserStore.js';
import { onMounted } from 'vue';
// import { mdiThumbUpOutline } from '@mdi/js';

const userStore = useUserStore();

const props = defineProps({
    user: {
        type: Object,
        id: Number,
        username: String,
        creditors: Object,
        required: true,
    },
});

onMounted(() => {
    userStore.fillCreditors(props.user);
});
</script>

<template>
    <v-card
        class="text-center text-primary mx-auto mt-2 border-b-sm"
        variant="text"
        max-width="600px"
    >
        <v-card-title class="text-h5 font-weight-bold">
            Пользователю {{ props.user.username }} должны
        </v-card-title>
        <v-card-text class="text-subtitle-1 text-primary font-weight-bold">
            <p>
                {{ props.user.creditors }}
            </p>
            <p>
                f
                {{ userStore.komyKto(props.user) }}
            </p>
            <!--            <div>-->
            <!--                <v-icon-->
            <!--                    :icon="mdiThumbUpOutline"-->
            <!--                    size="40"-->
            <!--                />-->
            <!--                <p>А никому он ничего не должен. Живет как хочет!</p>-->
            <!--            </div>-->
        </v-card-text>
    </v-card>
</template>

<style scoped></style>
