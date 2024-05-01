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

    const totalCountUsers = computed(() => users.value.length);
    const checkDataUsers = computed(() => {
        if (users.value.find((item) => !item?.username.length)) return false;
        const uniqueNames = new Set();
        users.value.forEach((item) => uniqueNames.add(item.username));
        return uniqueNames.size === users.value.length;
    });
    const getUserById = computed(() => (userId) => users.value.find((item) => item?.id === userId));

    const addUser = () => {
        users.value.push({
            id: Date.now(),
            username: '',
            transactions: new Map(),
            creditors: new Map(),
            debtors: new Map(),
        });
    };
    const removeUser = (id) => (users.value = users.value.filter((item) => item?.id !== id));
    const fillTransactions = (user) => {
        const storeProduct = useProductStore();
        const activeProducts = storeProduct.products.filter(
            (item) => item.users.find((item) => item === user.id) && item.payer.id !== user.id,
        );
        activeProducts.forEach((item) => {
            const amount = +(item.price / item.users.length).toFixed(2);
            if (user.transactions.has(item.id))
                user.transactions.set(item.payer.id, user.transactions.get(item.payer.id) + amount);
            else user.transactions.set(item.payer.id, amount);
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
        const userStore = useUserStore();
        creditor.transactions.forEach((value, key) => {
            const debtor = userStore.getUserById(key);
            if (!debtor.transactions.has(creditor.id)) creditor.debtors.set(debtor.username, value);
            else {
                const deb = debtor.transactions.get(creditor.id);
                if (value < deb) creditor.debtors.set(debtor.username, deb - value);
            }
        });
    };
    const fillCreditors = (debtor) => {
        const userStore = useUserStore();
        debtor.transactions.forEach((value, key) => {
            const creditor = userStore.getUserById(key);
            if (!creditor.transactions.has(debtor.id)) debtor.creditors.set(creditor.username, value);
            else {
                const credit = creditor.transactions.get(debtor.id);
                if (value > credit) debtor.creditors.set(creditor.username, value - credit);
            }
        });
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
