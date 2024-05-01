<script setup>
import { mdiDeleteEmptyOutline, mdiPlusCircleOutline } from '@mdi/js';
import ProductListItem from './ProductListItem.vue';

import { useProductStore } from '../stores/ProductStore.js';

const productStore = useProductStore();
</script>

<template>
    <div class="border-b-sm d-flex justify-center py-4 mb-2">
        <v-btn-primary
            class="py-2 px-5"
            :prepend-icon="mdiPlusCircleOutline"
            text="Добавить позицию!"
            @click="productStore.addProduct()"
        />
    </div>
    <v-card
        class="overflow-y-auto scroll-container mr-1 mb-1"
        :height="600"
        variant="text"
    >
        <v-expansion-panels v-if="productStore.totalCountProducts">
            <ProductListItem
                v-for="product in productStore.products"
                :key="product.id"
                :product="product"
                v-model:title="product.title"
                v-model:price="product.price"
            />
        </v-expansion-panels>
        <v-card-text
            v-else
            class="d-flex flex-column justify-center align-center text-center fill-height"
        >
            <v-icon
                color="primary"
                size="80"
                :icon="mdiDeleteEmptyOutline"
            />
            <div class="text-subtitle-1 text-primary">
                <p>Ваша продуктовая корзина пуста..</p>
            </div>
        </v-card-text>
    </v-card>
</template>

<style scoped></style>
