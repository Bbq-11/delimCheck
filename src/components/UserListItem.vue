<script setup>
import { computed, ref } from 'vue';
import { mdiDelete } from '@mdi/js';

const username = ref('');
const avatar = computed(() => username.value.charAt(0));
</script>

<template>
    <v-container>
        <v-row class="align-center">
            <v-col cols="auto">
                <v-avatar color="surface-variant">
                    <span class="text-h6 text-uppercase disable-user-select">
                        {{ avatar }}
                    </span>
                </v-avatar>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="username"
                    variant="filled"
                    hide-details="auto"
                />
            </v-col>
            <v-col cols="auto">
                <v-btn
                    :icon="mdiDelete"
                    color="accent"
                    variant="tonal"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>
