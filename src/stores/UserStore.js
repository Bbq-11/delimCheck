import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useUserStore = defineStore('userStore', () => {
    const users = ref([
        {
            id: 1,
            username: 'admin1',
        },
        {
            id: 2,
            username: 'admin2',
        },
    ]);

    const totalCountUsers = computed(() => {
        return users.value.length;
    });
    const checkDataUsers = computed(() => {
        return users.value.find((item) => item.username.length === 0);
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
