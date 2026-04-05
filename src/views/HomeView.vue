<script setup>
const navItems = [
  { title: 'Book Services', to: '/booking', icon: 'mdi-home-outline' },
  { title: 'Shop Jewelry & Hair Charms', to: '/shop', icon: 'mdi-information-outline' },
  { title: `Today's Location`, to: '/location', icon: 'mdi-home-outline' },
  { title: 'Contact Us', to: '/contact', icon: 'mdi-home-outline' },
]

const items = [
  'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
  'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
  'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
]
</script>

<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <v-card border color="surface" rounded="xl">
          <v-card-text class="text-body-1">
            Hair Wraps, Tinsel, Yarn Braids & Jewelry. I can come to you, (fees may apply) or visit
            me at today's location. Contact me for details.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card border color="surface" rounded="xl">
          <v-row class="flex-column ga-2">
            <v-btn
              v-for="item in navItems"
              :key="item.to"
              :prepend-icon="item.icon"
              :to="item.to"
              rounded="pill"
              variant="text"
              justify="start"
            >
              {{ item.title }}
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-container>
        <v-carousel
          height="200"
          cycle
          interval="3000"
          direction="vertical"
          vertical-arrows="left"
          vertical-delimiters="right"
        >
          <v-carousel-item
            v-for="(src, i) in items"
            :key="i"
            :src="src"
            reverse-transition="cross-scale"
            transition="cross-scale"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-container>
    </v-row>
    <v-row>
      <v-button color="primary" variant="tonal" rounded="pill"> Book Now </v-button>
    </v-row>
  </div>
</template>

<style scoped>
.cross-scale-enter-active,
.cross-scale-leave-active {
  transition: 0.5s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition-property: opacity, transform;
}

.cross-scale-leave-from,
.cross-scale-leave-to {
  position: absolute !important;
  top: 0;
  width: 100%;
}

.cross-scale-enter-from,
.cross-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

@media (prefers-reduced-motion: reduce) {
  .cross-scale-enter-from,
  .cross-scale-leave-to {
    transform: none;
  }
}

.reduced-motion-info {
  display: none;
}
@media (prefers-reduced-motion: reduce) {
  .reduced-motion-info {
    display: block;
  }
}
</style>
