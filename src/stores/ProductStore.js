import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useUserStore } from './UserStore.js';

export const useProductStore = defineStore('productStore', () => {
    const products = ref([
        {
            id: 1,
            title: 'Рыба',
            price: 100,
            payer: 'Илья',
            users: [],
        },
        {
            id: 2,
            title: 'Картошка',
            price: '',
            payer: 'Илья',
            users: [],
        },
    ]);

    const totalCountProducts = computed(() => products.value.length);
    const checkDataTitles = computed(
        () => !products.value.find((item) => item.title.length === 0),
    );
    const checkDataPrices = computed(
        () => !products.value.find((item) => item.price.length === 0),
    );
    const checkDataUsers = computed(
        () => !products.value.find((item) => item.users.length === 0),
    );

    const subtotal = computed(() => {
        return products.value.reduce((total, item) => total + +item.price, 0);
    });

    const addProduct = () => {
        const userStore = useUserStore();
        products.value.push({
            id: Date.now(),
            title: '',
            price: '',
            payer: userStore.users[0].username,
            users: [],
        });
    };
    const removeProduct = (id) => {
        products.value = products.value.filter((item) => item.id !== id);
    };
    const copyProduct = (id) => {
        const item = products.value.find((item) => item.id === id);
        const newItem = {
            ...item,
            id: Date.now(),
            users: [...item.users],
        };
        products.value.push(newItem);
    };
    const getItem = (id) => {
        return products.value.find((item) => item.id === id);
    };
    return {
        getItem,
        products,
        useProductStore,
        addProduct,
        removeProduct,
        copyProduct,
        totalCountProducts,
        checkDataTitles,
        checkDataPrices,
        checkDataUsers,
        subtotal,
    };
});
