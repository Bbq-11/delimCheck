<script setup>
import { mdiAllInclusive, mdiCheckAll } from '@mdi/js';
import { useProductStore } from '../stores/ProductStore.js';

const productStore = useProductStore();

const props = defineProps({
    product: {
        type: Object,
        id: Number,
        title: String,
        price: Number,
        payer: String,
        users: Array,
    },
});
</script>

<template>
    <v-col
        class="pa-0 ma-0"
        cols="auto"
    >
        <v-card
            class="d-flex flex-column justify-center align-center border-sm rounded-lg pa-2 ma-0"
        >
            <v-avatar
                v-if="productStore.checkCountUsers(props.product.id)"
                class="text-h5 text-uppercase font-weight-bold text-primary bg-surface"
                :icon="mdiCheckAll"
            />
            <v-avatar
                v-else
                class="text-h5 text-uppercase font-weight-bold text-primary bg-background"
                :icon="mdiAllInclusive"
            />
            <v-card-text class="pa-0 mt-2"> Все </v-card-text>
        </v-card>
    </v-col>
</template>

<style scoped></style>
