<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/UserStore.js';
import noName2 from '../components/noName2.vue';

const userStore = useUserStore();

const router = useRouter();
const tab = ref('byDebtor');
const handleReset = () => {
    router.push('/');
    // userStore.users = [];
    // productStore.products = [];
    // billStore.bill = [];
};

onBeforeMount(() => {
    userStore.clearTransactions();
});
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
                <noName2 />
                <!--                <noName1-->
                <!--                    v-for="user in userStore.users"-->
                <!--                    :key="user.id"-->
                <!--                    :user="user"-->
                <!--                    :creditors="user.creditors"-->
                <!--                />-->
            </v-window-item>
            <v-window-item
                value="2"
                elevation="20"
                class="mb-8"
            >
                <noName2 />
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
