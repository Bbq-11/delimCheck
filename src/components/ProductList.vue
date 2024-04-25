<script setup>
import { mdiBasketRemoveOutline } from '@mdi/js';
</script>

<template>
    <div class="border-b-xl d-flex justify-space-around py-4">
        <v-btn> Добавить позицию! </v-btn>
    </div>
    <v-card
        :height="600"
        :variant="'text'"
        class="overflow-y-auto overflow-x-auto"
    >
        <!--        <v-card-text>-->
        <!--            <UserListItem v-for="us in 5" />-->
        <!--        </v-card-text>-->
        <v-card-text class="d-flex justify-center align-center text-center fill-height">
            <div>
                <v-icon
                    size="80"
                    :icon="mdiBasketRemoveOutline"
                />
                <p>Ваша продуктовая корзина пуста..</p>
            </div>
        </v-card-text>
    </v-card>
</template>

<style scoped></style>
