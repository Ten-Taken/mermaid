<script setup>
import { RouterView } from 'vue-router'
import BannerNav from '@/components/BannerNav.vue'
</script>

<template>
  <v-app>
    <banner-nav />
    <v-main>
      <v-container class="py-8">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
