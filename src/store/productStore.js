import { ref } from "vue";
import { generateNewId } from '../config/globals';

export function productStore() {
  const products = ref([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/json/products.json");

      if (!response.ok) {
        console.error("Failed to fetch products: ", response.statusText);
        return;
      }

      products.value = await response.json();
      console.log("Fetched products:", products.value);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const modifyProductList = (action, product) => {
    let productIndex;
    switch (action) {
      case "add":
        products.value.push({ ...product, id: generateNewId(products) });
        console.log("Add product:", product);
        break;
      case "update":
        productIndex = products.value.findIndex((p) => p.id === product.id);
        
        if (productIndex === -1) {
          console.error("Product not found for update: ", product);
          return;
        }

        products.value[productIndex] = { ...product };
        console.log("Update product: ", product);

        break;
      case "delete":
        productIndex = products.value.findIndex((p) => p.id === product.id);

        if (productIndex === -1) {
          console.error("Deleted product: ", deleteProduct);
          return;
        }

        const [deletedProduct] = products.value.splice(productIndex, 1);
        console.log("Deleted product: ", deleteProduct);

        break;
      default:
        console.error("Unknown action:", action);
    }
  };

  const addProduct = async (product) => modifyProductList("add", product);
  const updateProduct = async (product) => modifyProductList("update", product);
  const deleteProduct = async (order) => modifyProductList("delete", order);

  return {
    products,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
  };
}