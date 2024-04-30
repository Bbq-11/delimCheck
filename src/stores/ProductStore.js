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

    const addUserProduct = computed(() => {
        return (productId, userId) => {
            const productStore = useProductStore();
            const product = productStore.getProductById(productId);
            const checkUser = product.users.indexOf(userId);
            if (checkUser === -1) product.users.push(userId);
            else product.users.splice(checkUser, 1);
        };
    });
    const addAllUserProduct = computed(() => {
        return (productId) => {
            const productStore = useProductStore();
            const product = productStore.getProductById(productId);
            const countActiveUsers = product.users.length;
            const userStore = useUserStore();
            const countAllUsers = userStore.totalCountUsers;
            if (countActiveUsers === countAllUsers) {
                product.users.splice(0, product.users.length);
            } else {
                product.users.splice(0, product.users.length);
                userStore.users.forEach((user) => product.users.push(user.id));
            }
        };
    });
    const getProductById = computed(() => {
        return (productId) => {
            return products.value.find((item) => item.id === productId);
        };
    });
    const checkCountUsers = computed(() => {
        return (productId) => {
            const productStore = useProductStore();
            const product = productStore.getProductById(productId);
            const countActiveUsers = product.users.length;
            const userStore = useUserStore();
            const countAllUsers = userStore.totalCountUsers;
            return countActiveUsers === countAllUsers;
        };
    });
    const checkUser = computed(() => {
        return (productId, userId, product = undefined) => {
            if (!product) {
                const productStore = useProductStore();
                product = productStore.getProductById(productId);
            }
            return product.users.includes(userId);
        };
    });

    const subtotal = computed(() =>
        products.value.reduce((total, item) => total + +item.price, 0),
    );

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
    const removeProduct = (id) =>
        (products.value = products.value.filter((item) => item.id !== id));
    const copyProduct = (id) => {
        const item = products.value.find((item) => item.id === id);
        const newItem = {
            ...item,
            id: Date.now(),
            users: [...item.users],
        };
        products.value.push(newItem);
    };

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

    return {
        products,
        useProductStore,
        addProduct,
        removeProduct,
        copyProduct,
        checkCountUsers,
        checkUser,
        getProductById,
        addUserProduct,
        addAllUserProduct,
        totalCountProducts,
        checkDataTitles,
        checkDataPrices,
        checkDataUsers,
        subtotal,
    };
});
