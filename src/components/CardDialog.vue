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
    <v-btn
        :disabled="isOpen"
        color="primary"
        text="Дальше"
        @click="switchOpen()"
    ></v-btn>

    <v-dialog
        v-model="isOpen"
        transition="dialog-bottom-transition"
        width="auto"
    >
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
                {{ text }}
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
