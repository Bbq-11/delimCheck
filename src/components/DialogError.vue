<script setup>
import { ref } from 'vue';
import { mdiAlertCircle } from '@mdi/js';

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
    <v-btn
        class="py-4 px-6 text-primary bg-surface w-100"
        border="sm"
        variant="plain"
        rounded="xl"
        height="auto"
        text="Дальше!"
        :disabled="isOpen"
        @click="switchOpen()"
    ></v-btn>

    <template>
        <v-dialog
            v-model="isOpen"
            transition="dialog-bottom-transition"
            width="auto"
        >
            <v-card
                elevation="20"
                class="text-center bg-error py-4 px-6"
                rounded="lg"
            >
                <div>
                    <v-icon
                        size="80"
                        :icon="mdiAlertCircle"
                    />
                </div>
                <v-card-text class="text-body-1 text-surface">
                    {{ text }}
                </v-card-text>
            </v-card>
        </v-dialog>
    </template>
</template>
