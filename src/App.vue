<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>Shop</v-toolbar-title>

      <v-spacer />

      <v-btn to="/" variant="text">Shop</v-btn>
      <v-btn to="/categories" variant="text">Categories</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
