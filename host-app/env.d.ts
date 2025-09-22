/// <reference types="vite/client" />

declare module '*.vue' {
  import type { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>;
  export default component
}

declare module 'product-catalog/ProductList' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>;
  export default component
}

declare module 'product-catalog/ProductDetail' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>;
  export default component
}