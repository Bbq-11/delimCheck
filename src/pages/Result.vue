<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { mdiDelete } from '@mdi/js';

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
        class="mb-6"
        elevation="10"
        rounded="lg"
    >
        <v-tabs
            v-model="tab"
            align-tabs="center"
            color="primary"
            class="mb-6"
            fixed-tabs
        >
            <v-tab value="1">Кто - кому</v-tab>
            <v-tab value="2">Кому - кто</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item
                value="1"
                elevation="20"
                class="rounded-xl"
            >
                <v-card
                    class="text-center rounded-xl text-primary"
                    variant="text"
                >
                    <v-card-title class="text-h5 font-weight-bold"> Пользователь Андрей должен </v-card-title>
                    <v-card-text class="text-subtitle-1 text-primary font-weight-bold">
                        <p>Илья - 12 ₽</p>
                        <div>
                            <v-icon
                                :icon="mdiDelete"
                                size="80"
                            />
                            <p>А никому он ничего не должен. Живет как хочет!</p>
                        </div>
                    </v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item value="2">
                <v-card
                    v-for="f in 3"
                    class="text-center bg-pink-accent-2 rounded-xl mb-6"
                >
                    <v-card-title> Пользователю Андрей должны </v-card-title>
                    <v-card-text>
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
            class="py-4 w-100"
            elevation="10"
            text="К результатам!"
            @click="handleReset"
        />
    </router-link>
</template>
