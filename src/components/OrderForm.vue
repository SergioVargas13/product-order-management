<template>
    <form @submit.prevent="handleSubmit" class="mt-2 space-y-2">
        <div>
            <label for="customer" class="block text-sm font-medium text-gray-700">Cliente</label>
            <input type="text" id="customer" v-model="formData.customer" required class="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-indigo-500">
        </div>
        <div>
            <label for="total" class="block text-sm font-medium text-gray-700">Total</label>
            <input type="number" id="total" v-model="formData.total" required step="0.01" class="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-indigo-500">
        </div>
        <div class="flex justify-end space-x-2">
            <button type="button" @click="$emit('cancel')" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                Cancelar
            </button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                {{ order.id ? 'Actualizar' : 'Guardar' }}
            </button>
        </div>
    </form>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  order: { type: Object, default: () => ({ customer: '', total: 0 }) }
});

const emit = defineEmits(['save', 'cancel']);

const formData = ref({ ...props.order });

watch(() => props.order, (newOrder) => {
    formData.value = { ...newOrder };
}, { deep: true });

const handleSubmit = () => {
    emit('save', { ...formData.value });
};
</script>