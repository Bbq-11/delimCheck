<script setup>
// import { computed, ref } from 'vue';
import { ref } from 'vue';
import { mdiAllInclusive, mdiContentCopy, mdiDeleteOutline } from '@mdi/js';
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
            <v-col cols="7">
                <v-text-field label="Название" />
            </v-col>
            <v-col cols="4">
                <v-text-field
                    label="Цена"
                    type="number"
                    :rules="[rules.email]"
                />
            </v-col>
        </v-row>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
        <v-row
            class="mb-4 gc-4"
            no-gutters
        >
            <v-col cols="6">
                <DialogPayer />
            </v-col>
            <v-col>
                <v-btn class="w-100 border-sm rounded-xl">
                    <v-icon :icon="mdiContentCopy" />
                </v-btn>
            </v-col>
            <v-col>
                <v-btn
                    class="w-100 border-sm rounded-xl"
                    color="error"
                >
                    <v-icon :icon="mdiDeleteOutline" />
                </v-btn>
            </v-col>
        </v-row>
        <v-row
            class="gr-2 gc-4"
            justify="space-around"
            no-gutters
        >
            <v-col v-for="us in 3">
                <div class="cursor-pointer">
                    <div class="d-flex flex-column align-center border-sm pa-2 rounded-lg ga-1">
                        <v-avatar color="surface-variant">
                            <div class="d-flex w-100 h-100 justify-center align-center bg-primary">
                                <!--                                <template v-if="isUser">-->
                                <!--                                    <v-icon-->
                                <!--                                        v-if="isProduct"-->
                                <!--                                        :icon="mdiCheck"-->
                                <!--                                    />-->
                                <!--                                    <span-->
                                <!--                                        v-else-->
                                <!--                                        class="text-uppercase"-->
                                <!--                                    >-->
                                <!--                                        U-->
                                <!--                                        &lt;!&ndash;                                                {{ user.name.charAt(0) }}&ndash;&gt;-->
                                <!--                                    </span>-->
                                <!--                                </template>-->
                                <v-icon :icon="mdiAllInclusive" />
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
