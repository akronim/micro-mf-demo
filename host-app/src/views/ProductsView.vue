<template>
  <div class="products-page">
    <header class="page-header">
      <h1>Products</h1>
      <p>Powered by Product Catalog Microfrontend</p>
    </header>

    <div v-if="!selectedProduct" class="product-list-container">
      <Suspense>
        <template #default>
          <ProductList @product-selected="handleProductSelected" />
        </template>
        <template #fallback>
          <div class="loading">Loading products...</div>
        </template>
      </Suspense>
    </div>

    <div v-else class="product-detail-container">
      <Suspense>
        <template #default>
          <ProductDetail 
            :product-id="selectedProduct.id" 
            @back="selectedProduct = null" 
            @addedToCart="onAddedToCart"
          />
        </template>
        <template #fallback>
          <div class="loading">Loading product details...</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

const ProductList = defineAsyncComponent(async () => await import('product-catalog/ProductList'))
const ProductDetail = defineAsyncComponent(async () => await import('product-catalog/ProductDetail'))

interface Product {
  id: number
  name: string
  price: number
  description: string
  category: string
  image: string
}

const selectedProduct = ref<Product | null>(null)

const handleProductSelected = (product: Product) => {
  selectedProduct.value = product
  console.log(selectedProduct.value)
}

const onAddedToCart = (product: Product) => {
  console.log("onAddedToCart", product)
}
</script>

<style scoped>
.products-page {
  min-height: calc(100vh - 120px);
}

.page-header {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 8px;
}

.page-header p {
  opacity: 0.9;
}

.loading {
  text-align: center;
  padding: 60px 20px;
  color: #718096;
  font-size: 18px;
}

.product-list-container,
.product-detail-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>