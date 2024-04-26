<script setup>
import ProductList from '../components/ProductList.vue';
import CardDialog from '../components/DialogError.vue';
</script>
<template>
    <v-sheet
        class="rounded-lg border border-gray-200 mb-6"
        elevation="10"
    >
        <ProductList />
    </v-sheet>
    <router-link
        to="/result"
        class="w-100"
    >
        <v-btn-primary
            class="py-4 w-100"
            elevation="10"
            text="К результатам!"
        />
    </router-link>
    <CardDialog text="Добавьте что-нибудь!" />
    <!--    <CardDialog text="Назовите все продукты!" />-->
    <!--    <CardDialog text="Введите стоимость!" />-->
    <!--    <CardDialog text="Отметьте пользователей во всех продуктах!" />-->
</template>
