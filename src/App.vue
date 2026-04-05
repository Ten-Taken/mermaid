<script setup>
import { RouterView } from 'vue-router'

const navItems = [
  { title: 'Home', to: '/', icon: 'mdi-home-outline' },
  { title: 'About', to: '/about', icon: 'mdi-information-outline' },
]
</script>

<template>
  <v-app>
    <v-app-bar
      border="sm"
      class="px-2"
      color="surface"
      elevation="0"
    >
      <template #prepend>
        <v-avatar
          color="primary"
          rounded="lg"
          size="40"
          variant="tonal"
        >
          <img alt="Vue logo" src="@/assets/logo.svg" width="24" height="24" />
        </v-avatar>
      </template>

      <v-app-bar-title class="font-weight-semibold">
        Mermaid Control Room
      </v-app-bar-title>

      <v-spacer />

      <v-btn
        v-for="item in navItems"
        :key="item.to"
        :prepend-icon="item.icon"
        :to="item.to"
        class="ml-2"
        rounded="pill"
        variant="text"
      >
        {{ item.title }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="py-8">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
