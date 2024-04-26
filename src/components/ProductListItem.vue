<script setup lang="ts">
// import { computed, ref } from 'vue';
import { ref } from 'vue';
import { mdiAllInclusive, mdiCheck, mdiContentCopy, mdiDelete } from '@mdi/js';
import DialogPayer from './DialogPayer.vue';
// const username = ref('');
// const avatar = computed(() => username.value.charAt(0));
const isUser = ref(true);
const isProduct = ref(true);
const rules = {
    email: (value) => {
        const pattern = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
        return pattern.test(value) || 'Ошибочка.';
    },
};
</script>

<template>
    <v-expansion-panel-title>
        <v-row
            class="gc-8"
            no-gutters
        >
            <v-col
                class=""
                cols="7"
            >
                <v-text-field
                    class="text-subtitle-1 text-primary"
                    color="primary"
                    label="Название"
                    variant="outlined"
                    density="compact"
                    hide-details="auto"
                ></v-text-field>
            </v-col>
            <v-col
                class=""
                cols="4"
            >
                <v-text-field
                    class="text-subtitle-1 text-primary"
                    color="primary"
                    label="Цена"
                    type="number"
                    variant="outlined"
                    :rules="[rules.email]"
                    density="compact"
                    hide-details="auto"
                ></v-text-field>
            </v-col>
        </v-row>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
        <v-row
            class="mb-4 gc-4"
            no-gutters
        >
            <v-col
                class=""
                cols="6"
            >
                <DialogPayer />
            </v-col>
            <v-col class="">
                <v-btn
                    rounded="xl"
                    width="100%"
                >
                    <v-icon :icon="mdiContentCopy" />
                </v-btn>
            </v-col>
            <v-col class="">
                <v-btn
                    color="error"
                    rounded="xl"
                    width="100%"
                >
                    <v-icon :icon="mdiDelete" />
                </v-btn>
            </v-col>
        </v-row>
        <v-row
            class="gr-2 gc-4"
            justify="space-around"
            no-gutters
        >
            <v-col
                v-for="us in 3"
                cols=""
            >
                <div class="cursor-pointer">
                    <div class="d-flex flex-column align-center border-sm pa-2 rounded-lg ga-1">
                        <v-avatar color="surface-variant">
                            <div class="d-flex w-100 h-100 justify-center align-center">
                                <template v-if="isUser">
                                    <v-icon
                                        v-if="isProduct"
                                        :icon="mdiCheck"
                                    />
                                    <span
                                        v-else
                                        class="text-uppercase"
                                    >
                                        U
                                        <!--                                                {{ user.name.charAt(0) }}-->
                                    </span>
                                </template>
                                <v-icon
                                    v-else
                                    :icon="mdiAllInclusive"
                                />
                            </div>
                        </v-avatar>
                        <div class="text-subtitle-2">
                            <span v-if="isUser">
                                username
                                <!--                                        {{ user.name }}-->
                            </span>
                            <span v-else>All</span>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-expansion-panel-text>
</template>
