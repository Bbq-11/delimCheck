<script setup>
import ProductList from '../components/ProductList.vue';
import CardDialog from '../components/CardDialog.vue';
</script>
<template>
    <v-sheet class="rounded-lg border border-gray-200 mb-8">
        <ProductList />
    </v-sheet>
    <div class="d-flex justify-center">
        <router-link to="/pre-check">
            <v-btn> К результатам! </v-btn>
        </router-link>
        <CardDialog text="Добавьте что-нибудь!" />
        <CardDialog text="Назовите все продукты!" />
        <CardDialog text="Введите стоимость!" />
        <CardDialog text="Отметьте пользователей во всех продуктах!" />
    </div>
</template>
