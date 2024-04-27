import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useUserStore = defineStore('userStore', () => {
    const users = ref([
        {
            id: 1,
            username: 'Илья',
        },
        {
            id: 2,
            username: 'Егор',
        },
    ]);

    const totalCountUsers = computed(() => {
        return users.value.length;
    });
    const checkDataUsers = computed(() => {
        return users.value.find((item) => !item.username.length);
        // if (empty) return empty;
        // const names = [];
        // users.value.forEach((item) => names.push(item.username));
        // const uniqueNames = new Set(names);
        // return uniqueNames.size !== users.value.length;
    });

    const addUser = () => {
        users.value.push({
            id: Date.now(),
            username: '',
        });
    };
    const removeUser = (id) => {
        users.value = users.value.filter((item) => item.id !== id);
    };

    return {
        users,
        totalCountUsers,
        checkDataUsers,
        addUser,
        removeUser,
    };
});
