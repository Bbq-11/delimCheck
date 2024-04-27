<script setup>
import { mdiMapMarkerQuestionOutline, mdiWalletOutline } from '@mdi/js';
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
        class="text-subtitle-1 w-100 rounded-xl"
        color="primary"
        :prepend-icon="mdiWalletOutline"
        @click="switchActive"
        text="Payer"
    />
    <template>
        <v-dialog
            v-model="isActive"
            max-width="400px"
        >
            <v-card
                class="text-center bg-error text-primary rounded-lg py-4 px-6"
                elevation="20"
            >
                <div>
                    <v-icon
                        size="80"
                        color="primary"
                        :icon="mdiMapMarkerQuestionOutline"
                    />
                </div>
                <v-card-text class="text-body-1">
                    <p>Кто оплачивает?</p>
                </v-card-text>
                <v-card-actions>
                    <v-radio-group>
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
