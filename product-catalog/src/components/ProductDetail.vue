<template>
  <div class="product-detail">
    <div v-if="product" class="product-content">
      <button class="back-button" @click="$emit('back')">← Back to List</button>
      <div class="product-layout">
        <div class="product-image-container">
          <img :src="product.image" :alt="product.name" class="product-image" />
        </div>
        <div class="product-info">
          <h1 class="product-title">{{ product.name }}</h1>
          <p class="product-category">Category: {{ product.category }}</p>
          <p class="product-price">${{ product.price }}</p>
          <p class="product-description">{{ product.description }}</p>
          <button class="add-to-cart" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
    <div v-else class="not-found">
      <p>Product not found</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProducts } from '@/composables/useProducts'
import type { Product } from '@/types/product'

interface Props {
  productId: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  back: [],
  addedToCart: [product: Product | undefined]
}>()

const { getProductById } = useProducts()

const product = computed(() => getProductById(props.productId))

const addToCart = () => {
  alert(`Added ${product.value?.name} to cart!`)
  emit("addedToCart", product.value)
}
</script>

<style scoped>
.product-detail {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.back-button {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}

.back-button:hover {
  background: #4338ca;
}

.product-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.product-image-container {
  text-align: center;
}

.product-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
}

.product-title {
  color: #2d3748;
  margin-bottom: 16px;
}

.product-category {
  color: #718096;
  margin-bottom: 12px;
}

.product-price {
  font-size: 24px;
  font-weight: 700;
  color: #4f46e5;
  margin-bottom: 16px;
}

.product-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 24px;
}

.add-to-cart {
  background: #059669;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.add-to-cart:hover {
  background: #047857;
}

.not-found {
  text-align: center;
  color: #718096;
  font-size: 18px;
}

@media (max-width: 768px) {
  .product-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>