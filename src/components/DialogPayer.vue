<script setup>
import { mdiMapMarkerQuestionOutline, mdiWalletOutline } from '@mdi/js';
import { ref } from 'vue';

import { useProductStore } from '../stores/ProductStore.js';
import { useUserStore } from '../stores/UserStore.js';

const productStore = useProductStore();
const UserStore = useUserStore();

const payer = defineModel('payer');

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const isActive = ref(false);
const switchActive = () => (isActive.value = !isActive.value);
</script>

<template>
    <v-btn
        class="text-subtitle-1 w-100 rounded-xl"
        color="primary"
        :prepend-icon="mdiWalletOutline"
        @click="switchActive"
    >
        {{ productStore.products[props.product.id - 1] }}
    </v-btn>
    <template>
        <v-dialog
            v-model="isActive"
            max-width="400px"
        >
            <v-card
                class="text-center bg-error text-primary rounded-lg py-4 px-6"
                elevation="20"
            >
                <div>
                    <v-icon
                        size="80"
                        color="primary"
                        :icon="mdiMapMarkerQuestionOutline"
                    />
                </div>
                <v-card-text class="text-body-1">
                    <p>Кто оплачивает?</p>
                </v-card-text>
                <v-card-actions>
                    <v-radio-group v-model="payer">
                        <v-radio
                            v-for="user in UserStore.users"
                            :key="user.id"
                            :label="user.username"
                            :value="user.username"
                        />
                    </v-radio-group>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </template>
</template>

<style scoped></style>
