import { ref, computed } from 'vue'
import type { Product } from '@/types/product'

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation',
    category: 'Electronics',
    image: 'https://placehold.co/200x200/4F46E5/white?text=Headphones'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 299.99,
    description: 'Feature-rich smartwatch with health tracking',
    category: 'Electronics',
    image: 'https://placehold.co/200x200/059669/white?text=Watch'
  },
  {
    id: 3,
    name: 'Coffee Maker',
    price: 149.99,
    description: 'Automatic coffee maker with programmable settings',
    category: 'Home',
    image: 'https://placehold.co/200x200/DC2626/white?text=Coffee'
  }
])

export function useProducts() {
  const getProducts = computed(() => products.value)
  
  const getProductById = (id: number) => {
    return products.value.find(product => product.id === id)
  }
  
  const getProductsByCategory = (category: string) => {
    return products.value.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    )
  }

  return {
    products: getProducts,
    getProductById,
    getProductsByCategory
  }
}