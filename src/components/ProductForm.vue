<template>
    <form @submit.prevent="handleSubmit" class="mt-2 space-y-2">
        <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Nombre del Producto</label>
            <input type="text" id="name" v-model="formData.name" required class="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-indigo-500">
        </div>
        <div>
            <label for="price" class="block text-sm font-medium text-gray-700">Precio</label>
            <input type="number" id="price" v-model="formData.price" required step="0.01" class="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-indigo-500">
        </div>
        <div class="flex justify-end space-x-2">
            <button type="button" @click="$emit('cancel')" class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Cancelar
            </button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                {{ product.id ? 'Actualizar' : 'Guardar' }}
            </button>
        </div>
    </form>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  product: { type: Object, default: () => ({ name: '', price: 0 }) }
});

const emit = defineEmits(['save', 'cancel']);

const formData = ref({ ...props.product });

watch(() => props.product, (newProduct) => {
    formData.value = { ...newProduct };
}, { deep: true });

const handleSubmit = () => {
    emit('save', { ...formData.value });
};
</script>