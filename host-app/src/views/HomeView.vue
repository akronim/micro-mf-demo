<template>
  <div class="home">
    <h1 class="title">Welcome to Microfrontend Demo</h1>
    <div class="hero-section">
      <p class="description">
        This is a demonstration of microfrontend architecture using Module Federation
        with Vue 3, TypeScript, and Vite.
      </p>
      <router-link to="/products" class="cta-button">
        View Products
      </router-link>
    </div>
    
    <div class="features">
      <div class="feature">
        <h3>🎯 Module Federation</h3>
        <p>Seamless integration of remote microfrontends</p>
      </div>
      <div class="feature">
        <h3>⚡ Vue 3 + Vite</h3>
        <p>Lightning-fast development with modern tooling</p>
      </div>
      <div class="feature">
        <h3>🔷 TypeScript</h3>
        <p>Type-safe development across microfrontends</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

.title {
  font-size: 3rem;
  color: #2d3748;
  margin-bottom: 24px;
}

.hero-section {
  margin-bottom: 60px;
}

.description {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-block;
  background: #4f46e5;
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s;
}

.cta-button:hover {
  background: #4338ca;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.feature {
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.feature h3 {
  color: #2d3748;
  margin-bottom: 12px;
}

.feature p {
  color: #718096;
}
</style>