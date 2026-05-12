<script setup lang="ts">
import { useCartStore } from './stores/cartStore'

const cart = useCartStore()
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>Shop</v-toolbar-title>

      <div class="nav-links">
        <RouterLink to="/" class="nav-link">Shop</RouterLink>
        <RouterLink to="/categories" class="nav-link">
          Categories
        </RouterLink>

       <RouterLink to="/cart" class="nav-link">
          Cart ({{ cart.totalCount }})
        </RouterLink>
      </div>

      <v-spacer />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: 40px;
}

.nav-link {
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  font-weight: 500;
  transition: opacity 0.2s;
}

.nav-link:hover {
  opacity: 0.7;
}
</style>
