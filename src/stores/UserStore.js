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
                    item.payer.id !== user.id,
            );
            activeProducts.forEach((item) => {
                const count = +(item.price / item.users.length).toFixed(2);
                if (user.creditors.has(item.id))
                    user.creditors.set(
                        item.payer.id,
                        user.creditors.get(item.payer.id) + count,
                    );
                else user.creditors.set(item.payer.id, count);
            });
        };
    });
    const komyKto = computed(() => {
        return (user) => {
            if (user.creditors.size === 0) return '';
            user.creditors.forEach((value, key) => alert(key));
            //     const userStore = useUserStore();
            //     const deb = userStore.getUserById(key);
            //     if (deb.creditors.has(user.id)) return value;
            //     else {
            //         const we = deb.creditors.get(user.id);
            //         const he = user.creditors.get(key);
            //         if (we < he) return we - he;
            //         else return 0;
            //     }
            // });
        };
    });
    const ktoKomy = computed(() => {});
    const getUserById = computed(() => {
        return (userId) => {
            return users.value.find((item) => item?.id === userId);
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
        komyKto,
        getUserById,
        addUser,
        removeUser,
    };
});
