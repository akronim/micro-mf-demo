<template>
  <div class="product-list">
    <h2 class="title">Product Catalog</h2>
    <div class="products-grid">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
        @click="$emit('product-selected', product)"
      >
        <img :src="product.image" :alt="product.name" class="product-image" />
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-category">{{ product.category }}</p>
          <p class="product-price">${{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProducts } from '@/composables/useProducts'
import type { Product } from '@/types/product'

defineEmits<{
  'product-selected': [product: Product]
}>()

const { products } = useProducts()
</script>

<style scoped>
.product-list {
  padding: 20px;
}

.title {
  color: #2d3748;
  margin-bottom: 24px;
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
}

.product-info {
  text-align: center;
}

.product-name {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 4px;
}

.product-category {
  color: #718096;
  font-size: 14px;
  margin-bottom: 8px;
}

.product-price {
  font-size: 18px;
  font-weight: 700;
  color: #4f46e5;
}
</style>