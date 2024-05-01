import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useProductStore } from './ProductStore.js';

export const useUserStore = defineStore('userStore', () => {
    const users = ref([
        {
            id: 1,
            username: 'Илья',
            creditors: new Map(),
        },
        {
            id: 2,
            username: 'Егор',
            creditors: new Map(),
        },
    ]);

    const totalCountUsers = computed(() => {
        return users.value.length;
    });
    const checkDataUsers = computed(() => {
        return users.value.find((item) => !item?.username.length);
        // if (empty) return empty;
        // const names = [];
        // users.value.forEach((item) => names.push(item.username));
        // const uniqueNames = new Set(names);
        // return uniqueNames.size !== users.value.length;
    });

    const fillCreditors = computed(() => {
        return (user) => {
            const storeProduct = useProductStore();
            const activeProducts = storeProduct.products.filter(
                (item) =>
                    item.users.find((item) => item === user.id) &&
                    item.payer !== user.username,
            );
            activeProducts.forEach((item) => {
                const count = +(item.price / item.users.length).toFixed(2);
                if (user.creditors.has(item.payer))
                    user.creditors.set(
                        item.payer,
                        user.creditors.get(item.payer) + count,
                    );
                else user.creditors.set(item.payer, count);
            });
        };
    });

    const addUser = () => {
        users.value.push({
            id: Date.now(),
            username: '',
            debtors: new Map(),
        });
    };
    const removeUser = (id) => {
        users.value = users.value.filter((item) => item?.id !== id);
    };

    return {
        users,
        totalCountUsers,
        checkDataUsers,
        fillCreditors,
        addUser,
        removeUser,
    };
});
