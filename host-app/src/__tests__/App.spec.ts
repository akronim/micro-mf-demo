import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'

const Home = { template: '<div>Home Page</div>' }
const Products = { template: '<div>Products Page</div>' }

describe('App', () => {
  it('mounts and renders NavBar + router-view', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: Home },
        { path: '/products', component: Products },
      ],
    })

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await router.isReady()

    expect(wrapper.findComponent(Home).exists()).toBe(true)
    expect(wrapper.html()).toContain('Home Page')

    await router.push('/products')
    await router.isReady()
    expect(wrapper.findComponent(Home).exists()).toBe(false)
    expect(wrapper.findComponent(Products).exists()).toBe(true)
    expect(wrapper.html()).toContain('Products Page')
  })
})
