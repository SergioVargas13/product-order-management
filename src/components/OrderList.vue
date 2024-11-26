<template>
    <div class="bg-white p-6">
        <h2 class="text-xl font-semibold mb-4">Lista de Pedidos</h2>
        <ul class="space-y-2">
            <li v-for="order in orders" :key="order.id" class="flex justify-between items-center">
                <span>Pedido #{{ order.id }} - ${{ order.total }}</span>
                <div>
                    <button @click="addOrUpdateOrder(order)" class="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">Editar</button>
                    <button @click="deleteOrder(order)" class="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600">Eliminar</button>
                </div>
            </li>
        </ul>
        <button @click="addOrUpdateOrder" class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Agregar Pedido
        </button>
        <OrderForm v-if="showAddOrderForm" :order="editingOrder" @save="saveOrUpdateOrder" @cancel="resetForm" />
    </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue';
import OrderForm from './OrderForm.vue';

const { orders, fetchOrders, addOrder, updateOrder, deleteOrder } = inject('orders');
const showAddOrderForm = ref(false);
const editingOrder = ref(null);

onMounted(fetchOrders);

const addOrUpdateOrder = (order) => {
  editingOrder.value = order.id ? { ...order } : { customer: '', total: 0 };
  showAddOrderForm.value = true;
};

const saveOrUpdateOrder = async (order) => {
    await (order.id) ? updateOrder(order) : addOrder(order);
    resetForm();
};

const resetForm = () => {
    showAddOrderForm.value = false;
    editingOrder.value = null;
};
</script>