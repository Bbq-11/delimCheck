<script setup>
import { mdiDeleteEmptyOutline, mdiPlusCircleOutline } from '@mdi/js';
import ProductListItem from './ProductListItem.vue';

import { useProductStore } from '../stores/ProductStore.js';

const productStore = useProductStore();
</script>

<template>
    <div class="border-b-sm d-flex justify-space-around py-4 mb-2">
        <v-btn-primary
            class="py-2 px-5"
            :prepend-icon="mdiPlusCircleOutline"
            text="Добавить позицию!"
            @click="productStore.addProduct()"
        />
    </div>
    <v-card
        :height="600"
        variant="text"
        class="overflow-y-auto scroll-container mr-1 mb-1"
    >
        <v-expansion-panels v-if="productStore.totalCountProducts">
            <ProductListItem
                v-for="product in productStore.products"
                :key="product.id"
                :product="product"
                v-model:title="product.title"
                v-model:price="product.price"
                v-model:payer="product.payer"
            />
        </v-expansion-panels>
        <v-card-text
            v-else
            class="d-flex justify-center align-center text-center fill-height"
        >
            <div>
                <v-icon
                    color="primary"
                    size="80"
                    :icon="mdiDeleteEmptyOutline"
                />
                <div class="text-subtitle-1 text-primary">
                    <p>Ваша продуктовая корзина пуста..</p>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<style scoped></style>
