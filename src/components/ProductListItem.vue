<script setup>
// import { computed, ref } from 'vue';
import {
    mdiContentCopy,
    mdiDeleteOutline,
    mdiMapMarkerQuestionOutline,
    mdiWalletOutline,
} from '@mdi/js';

import { useProductStore } from '../stores/ProductStore.js';
import { useUserStore } from '../stores/UserStore.js';
import { ref } from 'vue';

const productStore = useProductStore();
const userStore = useUserStore();

const title = defineModel('title');
const price = defineModel('price');
const payer = defineModel('payer');

const props = defineProps({
    product: {
        id: Number,
        title: String,
        price: Number,
        payer: String,
        users: Object,
    },
});

const rules = {
    email: (value) => {
        const pattern = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
        return pattern.test(value) || 'Ошибочка.';
    },
};

const isActive = ref(false);
const switchActive = () => (isActive.value = !isActive.value);
</script>

<template>
    <v-expansion-panel>
        <v-expansion-panel-title>
            <v-row
                class="gc-8"
                no-gutters
            >
                <v-col cols="7">
                    <v-text-field
                        label="Название"
                        v-model.trim="title"
                    />
                </v-col>
                <v-col cols="4">
                    <v-text-field
                        label="Цена"
                        type="number"
                        v-model.trim="price"
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
                    <v-btn
                        class="text-subtitle-1 w-100 rounded-xl"
                        color="primary"
                        :prepend-icon="mdiWalletOutline"
                        @click="switchActive"
                    >
                        {{ productStore.getItems(product.id).payer }}
                    </v-btn>
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
                                    <v-radio-group v-model="payer">
                                        <v-radio
                                            v-for="user in userStore.users"
                                            :key="user.id"
                                            :label="user.username"
                                            :value="user.username"
                                        />
                                    </v-radio-group>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </template>
                </v-col>
                <v-col>
                    <v-btn
                        class="w-100 border-sm rounded-xl"
                        @click="productStore.copyProduct(props.product.id)"
                    >
                        <v-icon :icon="mdiContentCopy" />
                    </v-btn>
                </v-col>
                <v-col>
                    <v-btn
                        class="w-100 border-sm rounded-xl"
                        color="error"
                        @click="productStore.removeProduct(props.product.id)"
                    >
                        <v-icon :icon="mdiDeleteOutline" />
                    </v-btn>
                </v-col>
            </v-row>

            <!--            <v-row-->
            <!--                class="gr-2 gc-4"-->
            <!--                justify="space-around"-->
            <!--                no-gutters-->
            <!--            >-->
            <!--                <v-col v-for="us in 3">-->
            <!--                    <div class="cursor-pointer">-->
            <!--                        <div-->
            <!--                            class="d-flex flex-column align-center border-sm pa-2 rounded-lg ga-1"-->
            <!--                        >-->
            <!--                            <v-avatar color="surface-variant">-->
            <!--                                <div-->
            <!--                                    class="d-flex w-100 h-100 justify-center align-center bg-primary"-->
            <!--                                >-->
            <!--                                    &lt;!&ndash;                                <template v-if="isUser">&ndash;&gt;-->
            <!--                                    &lt;!&ndash;                                    <v-icon&ndash;&gt;-->
            <!--                                    &lt;!&ndash;                                        v-if="isProduct"&ndash;&gt;-->
            <!--                                    &lt;!&ndash;                                        :icon="mdiCheck"&ndash;&gt;-->
            <!--                                    &lt;!&ndash;                                    />&ndash;&gt;-->
            <!--                                    &lt;!&ndash;                                    <span&ndash;&gt;-->
            <!--                                    &lt;!&ndash;                                        v-else&ndash;&gt;-->
            <!--                                    &lt;!&ndash;                                        class="text-uppercase"&ndash;&gt;-->
            <!--                                    &lt;!&ndash;                                    >&ndash;&gt;-->
            <!--                                    &lt;!&ndash;                                        U&ndash;&gt;-->
            <!--                                    &lt;!&ndash;                                        &lt;!&ndash;                                                {{ user.name.charAt(0) }}&ndash;&gt;&ndash;&gt;-->
            <!--                                    &lt;!&ndash;                                    </span>&ndash;&gt;-->
            <!--                                    &lt;!&ndash;                                </template>&ndash;&gt;-->
            <!--                                    <v-icon :icon="mdiAllInclusive" />-->
            <!--                                </div>-->
            <!--                            </v-avatar>-->
            <!--                            <div class="text-subtitle-2">-->
            <!--                                <span v-if="isUser">-->
            <!--                                    username-->
            <!--                                    &lt;!&ndash;                                        {{ user.name }}&ndash;&gt;-->
            <!--                                </span>-->
            <!--                                <span v-else>All</span>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </v-col>-->
            <!--            </v-row>-->
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
