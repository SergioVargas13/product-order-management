<template>
  <div class="bg-white p-6">
    <h2 class="text-xl font-semibold mb-4">Lista de Productos</h2>
    <ul class="space-y-2">
      <li v-for="product in products" :key="product.id" class="flex justify-between items-center">
        <span>{{ product.name }} - ${{ product.price }}</span>
        <div>
          <button @click="addOrUpdateProduct(product)" class="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">Editar</button>
          <button @click="deleteProduct(product)" class="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600">Eliminar</button>
        </div>
      </li>
    </ul>
    <button @click="addOrUpdateProduct" class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
      Agregar Producto
    </button>
    <ProductForm v-if="showAddProductForm" :product="editingProduct" @save="saveOrUpdateProduct" @cancel="resetForm" />
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue';
import ProductForm from './ProductForm.vue';

const { products, fetchProducts, addProduct, updateProduct, deleteProduct } = inject('products');
const showAddProductForm = ref(false);
const editingProduct = ref(null);

onMounted(fetchProducts);

const addOrUpdateProduct = (product) => {
  editingProduct.value = product.id ? { ...product } : { name: '', price: 0 };
  showAddProductForm.value = true;
};

const saveOrUpdateProduct = async (product) => {
  await (product.id) ? updateProduct(product) : addProduct(product);
  resetForm();
};

const resetForm = () => {
  showAddProductForm.value = false;
  editingProduct.value = null;
};
</script>