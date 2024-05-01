<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import noName from '../components/noName.vue';
import { useUserStore } from '../stores/UserStore.js';

const userStore = useUserStore();

const router = useRouter();
const tab = ref('byDebtor');
const handleReset = () => {
    router.push('/');
    // userStore.users = [];
    // productStore.products = [];
    // billStore.bill = [];
};
</script>

<template>
    <v-sheet
        class="mb-6 mt-12"
        elevation="10"
        rounded="lg"
    >
        <v-tabs
            v-model="tab"
            align-tabs="center"
            color="primary"
            class="border-b-sm mb-6"
            fixed-tabs
        >
            <v-tab value="1">Кто - кому</v-tab>
            <v-tab value="2">Кому - кто</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item
                value="1"
                elevation="20"
                class="mb-8"
            >
                <noName
                    v-for="user in userStore.users"
                    :key="user.id"
                    :user="user"
                />
            </v-window-item>
            <v-window-item
                value="2"
                elevation="20"
                class="mb-8"
            >
                <v-card
                    v-for="f in 3"
                    class="text-center text-primary mx-auto mt-2 border-b-sm"
                    variant="text"
                    max-width="600px"
                >
                    <v-card-title class="text-h5 font-weight-bold">
                        Пользователю Андрей должны
                    </v-card-title>
                    <v-card-text class="text-subtitle-1 text-primary font-weight-bold">
                        <p>Илья - 12 ₽</p>
                    </v-card-text>
                </v-card>
            </v-window-item>
        </v-window>
    </v-sheet>
    <router-link
        to="/"
        class="w-100"
    >
        <v-btn-primary
            class="py-4 w-100 mb-6"
            elevation="10"
            text="К результатам!"
            @click="handleReset"
        />
    </router-link>
</template>
