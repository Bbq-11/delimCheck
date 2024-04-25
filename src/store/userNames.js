// import { defineStore } from 'pinia';
// import { useProductStore } from 'products.js';
//
//
// export const useUserStore = defineStore('user', {
//     state: (): State => ({
//     users: [],
// }),
//     getters: {
//     getUserById: (state) => {
//         return (id: number) => {
//             return state.users.find((item) => item.id === id);
//         };
//     },
//         userExpenses: () => {
//         return (userId: number) => {
//             const productStore = useProductStore();
//             let result = 0;
//
//             if (!productStore.products.length) return;
//
//             productStore.products.forEach((product) => {
//                 if (product.payer.id === userId) {
//                     if (!product.price) return;
//                     result += product.price;
//                 }
//             });
//
//             return result;
//         };
//     },
//         userConsumption: () => {
//         return (userId) => {
//             const productStore = useProductStore();
//             let result = 0;
//
//             if (!productStore.products.length) return;
//
//             productStore.products.forEach((product) => {
//                 if (!product.price) return;
//                 if (productStore.productUser(product.id, userId)) {
//                     result += product.price / product.users.length;
//                 }
//             });
//
//             return result;
//         };
//     },
// },
// actions: {
//     initUser() {
//         this.users.push({
//             id: Date.now(),
//             name: '',
//         });
//     },
//     updateUsernamen(id, username) {
//         const user = this.getUserById(id);
//
//         if (!user) return;
//
//         user.name = username;
//     },
//     remove(id) {
//         this.users = this.users.filter((item) => item.id !== id);
//     },
// },
// });
