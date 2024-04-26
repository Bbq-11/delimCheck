<script setup>
// import { mdiDeleteEmptyOutline } from '@mdi/js';
import ProductListItem from './ProductListItem.vue';
import { mdiPlusCircleOutline } from '@mdi/js';
</script>

<template>
    <div class="border-b-sm d-flex justify-space-around py-4 mb-2">
        <v-btn-primary
            class="py-2 px-5"
            :prepend-icon="mdiPlusCircleOutline"
            text="Добавить позицию!"
        />
    </div>
    <v-card
        :height="600"
        variant="text"
        class="overflow-y-auto"
    >
        <!--        <v-card-text class="d-flex justify-center align-center text-center fill-height">-->
        <!--            <div>-->
        <!--                <v-icon-->
        <!--                    color="primary"-->
        <!--                    size="80"-->
        <!--                    :icon="mdiDeleteEmptyOutline"-->
        <!--                />-->
        <!--                <div class="text-subtitle-1 text-primary">-->
        <!--                    <p>Ваша продуктовая корзина пуста..</p>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </v-card-text>-->
        <v-expansion-panels>
            <v-expansion-panel v-for="usf in 2">
                <ProductListItem />
            </v-expansion-panel>
        </v-expansion-panels>
    </v-card>
</template>

<style scoped></style>
