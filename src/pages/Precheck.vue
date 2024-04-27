<script setup>
import ProductList from '../components/ProductList.vue';
import CardDialog from '../components/DialogError.vue';
import { useProductStore } from '../stores/ProductStore.js';
// import { useProductStore } from '../stores/ProductStore.js';
const productStore = useProductStore();
// const productStore = useProductStore();
</script>
<template>
    <v-sheet
        class="rounded-lg border border-gray-200 mb-6"
        elevation="10"
    >
        <ProductList />
    </v-sheet>
    <v-card
        class="rounded-xl mb-4 text-center text-primary bg-background"
        elevation="10"
    >
        <v-card-title class="text-subtitle-1 font-weight-bold">
            Промежуточный счет:
        </v-card-title>
        <v-card-text class="text-h5 text-primary font-weight-bold">
            {{ productStore.subtotal }}
        </v-card-text>
    </v-card>
    <router-link
        v-if="
            productStore.totalCountProducts &&
            productStore.checkDataTitles &&
            productStore.checkDataPrices &&
            productStore.checkDataUsers
        "
        to="/result"
        class="w-100"
    >
        <v-btn-primary
            class="py-4 w-100"
            elevation="10"
            text="К результатам!"
        />
    </router-link>
    <CardDialog
        v-else-if="!productStore.totalCountProducts"
        text="Добавьте что-нибудь!"
    />
    <CardDialog
        v-else-if="!productStore.checkDataTitles"
        text="Назовите все продукты!"
    />
    <CardDialog
        v-else-if="!productStore.checkDataPrices"
        text="Введите стоимость!"
    />
    <CardDialog
        v-else
        text="Отметьте пользователей во всех продуктах!"
    />
</template>
