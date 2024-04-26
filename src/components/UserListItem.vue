<script setup>
import { computed, ref } from 'vue';
import { mdiClose } from '@mdi/js';

const username = ref('');
const avatar = computed(() => username.value.charAt(0));
</script>

<template>
    <v-container>
        <v-row class="align-center">
            <v-col cols="auto">
                <v-avatar color="background">
                    <span class="text-h5 text-uppercase font-weight-bold text-primary">
                        {{ avatar }}
                    </span>
                </v-avatar>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="username"
                    variant="outlined"
                    hide-details="auto"
                    color="background"
                    density="compact"
                    class="text-subtitle-1 text-primary"
                />
            </v-col>
            <v-col cols="auto">
                <v-btn
                    :icon="mdiClose"
                    color="error"
                    variant="tonal"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>
