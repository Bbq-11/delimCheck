<script setup>
import { ref } from 'vue';
import { mdiAlertCircleOutline } from '@mdi/js';

defineProps({
    text: String,
    required: true,
});

const isOpen = ref(false);

const switchOpen = () => {
    isOpen.value = !isOpen.value;
    if (!isOpen.value) return;
    setTimeout(() => (isOpen.value = false), 2000);
};
</script>

<template>
    <v-btn-primary
        class="py-4 w-100"
        variant="plain"
        text="Дальше!"
        elevation="0"
        :disabled="isOpen"
        @click="switchOpen()"
    />
    <template>
        <v-dialog
            v-model="isOpen"
            width="auto"
        >
            <v-card
                class="text-center bg-error py-4 px-6 rounded-lg"
                elevation="20"
            >
                <div>
                    <v-icon
                        size="80"
                        color="primary"
                        :icon="mdiAlertCircleOutline"
                    />
                </div>
                <v-card-text class="text-body-1 text-primary">
                    {{ text }}
                </v-card-text>
            </v-card>
        </v-dialog>
    </template>
</template>
