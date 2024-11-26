<template>
  <div class="min-h-screen bg-gray-300 flex flex-col">
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-4">
        <h1 class="text-2xl font-bold text-gray-800">Gestión de Productos y Pedidos</h1>
      </nav>
    </header>
    <main class="flex-1 container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductList />
        <OrderList />
      </div>
    </main>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import ProductList from './components/ProductList.vue';
import OrderList from './components/OrderList.vue';
import { productStore } from './store/productStore';
import { orderStore } from './store/orderStore';

const { products, fetchProducts, addProduct, updateProduct, deleteProduct } = productStore();
const { orders, fetchOrders, addOrder, updateOrder, deleteOrder } = orderStore();


provide('products', {
  products,
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct
});

provide('orders', {
  orders,
  fetchOrders,
  addOrder,
  updateOrder,
  deleteOrder
});
</script>