import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useProductStore } from './ProductStore.js';

export const useUserStore = defineStore('userStore', () => {
    const users = ref([
        {
            id: 1,
            username: 'Илья',
            transactions: new Map(),
            creditors: new Map(),
            debtors: new Map(),
        },
        {
            id: 2,
            username: 'Егор',
            transactions: new Map(),
            creditors: new Map(),
            debtors: new Map(),
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

    const fillTransactions = (user) => {
        const storeProduct = useProductStore();
        const activeProducts = storeProduct.products.filter(
            (item) =>
                item.users.find((item) => item === user.id) && item.payer.id !== user.id,
        );
        activeProducts.forEach((item) => {
            const count = +(item.price / item.users.length).toFixed(2);
            if (user.transactions.has(item.id))
                user.transactions.set(
                    item.payer.id,
                    user.transactions.get(item.payer.id) + count,
                );
            else user.transactions.set(item.payer.id, count);
        });
    };
    const clearTransactions = () => {
        users.value.forEach((item) => {
            item.transactions.clear();
            item.creditors.clear();
            item.debtors.clear();
        });
    };
    const fillDebtors = (creditor) => {
        creditor.transactions.forEach((value, key) => {
            const userStore = useUserStore();
            const debtor = userStore.getUserById(key);
            if (!debtor.transactions.has(creditor.id))
                creditor.debtors.set(debtor.username, value);
            else {
                const deb = debtor.transactions.get(creditor.id);
                const credit = value;
                if (credit < deb) creditor.debtors.set(debtor.username, deb - credit);
            }
        });
    };
    const fillCreditors = (debtor) => {
        const userStore = useUserStore();
        debtor.transactions.forEach((value, key) => {
            const creditor = userStore.getUserById(key);
            if (!creditor.transactions.has(debtor.id))
                debtor.creditors.set(creditor.username, value);
            else {
                const credit = creditor.transactions.get(debtor.id);
                const deb = value;
                if (deb > credit) debtor.creditors.set(creditor.username, deb - credit);
            }
        });
    };

    // const komyKto = computed(() => {
    //     return (user) => {
    //         const resultDebs = new Map();
    //         if (user.creditors.size === 0) return resultDebs;
    //         user.creditors.forEach((value, key) => {
    //             const userStore = useUserStore();
    //             const deb = userStore.getUserById(key);
    //             if (!deb.creditors.has(user.id)) resultDebs.set(key, value);
    //             else {
    //                 const we = deb.creditors.get(user.id);
    //                 const he = user.creditors.get(key);
    //                 if (he < we) resultDebs.set(key, we - he);
    //             }
    //         });
    //         return resultDebs;
    //     };
    // });
    // const komyKto = computed(() => {
    //     return (user, debs) => {
    //         // user.creditors.forEach((value, key) => alert(key));
    //         const userStore = useUserStore();
    //         const userDeb = userStore.getUserById(debs[0]);
    //         if (!userDeb.creditors.has(user.id))
    //             return `${userDeb.username} - ${debs[1]}`;
    //         else {
    //             const we = userDeb.creditors.get(user.id);
    //             const he = user.creditors.get(debs[0]);
    //             if (he < we) return `${userDeb.username} - ${we - he}`;
    //             else return 0;
    //         }
    //         // });
    //     };
    // });
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
            transactions: new Map(),
            creditors: new Map(),
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
        fillTransactions,
        fillDebtors,
        fillCreditors,
        getUserById,
        addUser,
        removeUser,
        clearTransactions,
    };
});
