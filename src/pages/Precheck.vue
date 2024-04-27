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
    <v-card
        color="background"
        elevation="10"
        class="rounded-xl mb-4 text-center text-primary"
    >
        <v-card-title class="text-subtitle-1 font-weight-bold"> Промежуточный счет: </v-card-title>
        <v-card-text class="text-h5 text-primary font-weight-bold"> 24 ₽ </v-card-text>
    </v-card>
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
