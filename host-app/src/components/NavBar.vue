<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-brand">
        🏠 Microfrontend Demo
      </router-link>
      
      <div class="nav-links">
        <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">
          Home
        </router-link>
        <router-link to="/products" class="nav-link" :class="{ active: $route.path === '/products' }">
          Products
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 20px;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: #4f46e5;
}
</style>