<script setup>
const props = defineProps({
    product: {
        type: Object,
        id: Number,
        title: String,
        price: Number,
        payer: String,
        users: Array,
    },
    user: {
        type: Object,
        id: Number,
        username: String,
    },
});
</script>

<template>
    <v-col
        class="pa-0 ma-0"
        cols="auto"
    >
        <v-card class="d-flex flex-column justify-center align-center pa-0 ma-0">
            <v-avatar
                class="text-h5 text-uppercase font-weight-bold text-primary bg-background"
            >
                {{ props.user?.username.charAt(0).toUpperCase() }}
            </v-avatar>
            <v-card-text class="pa-0 ma-0">
                {{ props.user.username }}
            </v-card-text>
        </v-card>
    </v-col>
</template>

<style scoped></style>
