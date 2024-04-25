<script setup>
import { mdiAlertCircleOutline, mdiWalletOutline } from '@mdi/js';
import { ref } from 'vue';

const isActive = ref(false);
const switchActive = () => (isActive.value = !isActive.value);
const users = ref([
    {
        id: 1,
        name: 'Ivan',
    },
    {
        id: 2,
        name: 'Rita',
    },
    {
        id: 3,
        name: 'Lena',
    },
    {
        id: 4,
        name: 'Katy',
    },
]);
</script>

<template>
    <v-btn
        :prepend-icon="mdiWalletOutline"
        rounded="xl"
        variant="tonal"
        class="w-100"
        @click="switchActive"
    >
        PPayer
    </v-btn>
    <template>
        <v-dialog v-model="isActive">
            <v-card
                elevation="20"
                class="text-center"
            >
                <div>
                    <v-icon
                        size="80"
                        :icon="mdiAlertCircleOutline"
                    />
                </div>
                <v-card-text class="text-body-1">
                    <p>Кто оплачивает?</p>
                </v-card-text>
                <v-card-actions>
                    <v-radio-group hide-details="auto">
                        <v-radio
                            v-for="user in users"
                            :key="user.id"
                            :value="user"
                            :label="user.name"
                            @click="switchActive"
                        />
                    </v-radio-group>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </template>
</template>

<style scoped></style>
