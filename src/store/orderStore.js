import { ref } from "vue";
import { generateNewId } from '../config/globals';

export function orderStore() {
  const orders = ref([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("/json/orders.json");
      
      if (!response.ok) {
        console.error("Failed to fetch orders: ", response.statusText);
        return;
      }

      orders.value = await response.json();
      console.log("Fetched orders: ", orders.value);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const modifyOrderList = (action, order) => {
    let orderIndex;
    switch (action) {
      case "add":
        orders.value.push({ ...order, id: generateNewId(orders) });
        console.log("Add order: ", order);
        break;
      case "update":
        orderIndex = orders.value.findIndex((o) => o.id === order.id);
        
        if (orderIndex === -1) {
          console.error("Order not found for update: ", order);
          return;
        }

        orders.value[orderIndex] = { ...order };
        console.log("Updated order: ", order);

        break;
      case "delete":
        orderIndex = orders.value.findIndex((p) => p.id === order.id);

        if (orderIndex === -1) {
          console.error("Deleted order: ", deleteOrder);
          return;
        }

        const [deleteOrder] = orders.value.splice(orderIndex, 1);
        console.log("Deleted order: ", deleteOrder);

        break;
      default:
        console.error("Unknown action:", action);
    }
  };

  const addOrder = async (order) => modifyOrderList("add", order);
  const updateOrder = async (order) => modifyOrderList("update", order);
  const deleteOrder = async (order) => modifyOrderList("delete", order);

  return {
    orders,
    fetchOrders,
    addOrder,
    updateOrder,
    deleteOrder,
  };
}