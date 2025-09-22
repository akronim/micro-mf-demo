<template>
  <div class="app">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
  </div>

</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #f7fafc;
  color: #2d3748;
}

#app {
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>