<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import homeBanner from '@/assets/appbeachbanner.jpg'
import shopBanner from '@/assets/19201.jpg'
import bookingBanner from '@/assets/58767.jpg'
import locationBanner from '@/assets/30594.jpg'
import contactBanner from '@/assets/7930358_445.jpg'

const route = useRoute()

const bannerConfig = computed(() => {
  switch (route.name) {
    case 'booking':
      return {
        title: 'Book Services',
        image: bookingBanner,
        imagePosition: '50% 65%',
        appBarDensity: 'default',
        homeIconColor: 'mermParaText',
      }
    case 'shop':
      return {
        title: 'Shop Jewelry & Hair Charms',
        image: shopBanner,
        imagePosition: '50% 65%',
        appBarDensity: 'default',
        homeIconColor: 'white',
      }
    case 'location':
      return {
        title: "Today's Location",
        image: locationBanner,
        imagePosition: '50% 75%',
        appBarDensity: 'default',
        homeIconColor: 'mermBannerBlue',
      }
    case 'contact':
      return {
        title: 'Contact Us',
        image: contactBanner,
        imagePosition: '50% 75%',
        appBarDensity: 'default',
        homeIconColor: 'mermBannerBlue',
      }
    default:
      return {
        title: 'The Mermaid Bar',
        image: homeBanner,
        imagePosition: '50% 25%',
        appBarDensity: 'prominent',
        homeIconColor: 'white',
      }
  }
})
</script>

<template>
  <v-app-bar
    border="sm"
    class="px-2"
    color="surface"
    :image="bannerConfig.image"
    elevation="3"
    :density="bannerConfig.appBarDensity"
  >
    <template v-slot:image>
      <v-img
        :cover="true"
        :position="bannerConfig.imagePosition"
      ></v-img>
    </template>

    <v-spacer />

    <template
      v-slot:append
      v-if="bannerConfig.title != 'The Mermaid Bar'"
    >
      <v-tooltip text="Return Home">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            :to="{ name: 'home' }"
            density="comfortable"
            :color="bannerConfig.homeIconColor"
            icon="mdi-home"
            size="x-large"
          ></v-btn>
        </template>
      </v-tooltip>
    </template>

    <v-row class="align-self-center justify-center">
      <v-col cols="2">
        <img
          alt="Seashell logo 1"
          src="@/assets/shell3.png"
          width="74"
          height="74"
        />
      </v-col>
      <v-col
        class="d-flex align-center"
        cols="auto"
      >
        <v-app-bar-title class="banner-title"> {{ bannerConfig.title }} </v-app-bar-title>
      </v-col>
      <v-col cols="1">
        <img
          alt="Whale logo 2"
          src="@/assets/whale4.png"
          width="74"
          height="74"
        />
      </v-col>
    </v-row>

    <v-spacer />
  </v-app-bar>
</template>

<style scoped>
.banner-title {
  font-family: 'Tales', serif;
  font-size: clamp(2rem, 4vw, 3.15rem);
  color: rgb(23, 23, 166);
  line-height: 1;
}
</style>
