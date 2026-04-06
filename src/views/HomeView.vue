<script setup>
const navItems = [
  {
    title: 'Book Services',
    to: '/booking',
    class: 'glossy-nav-btn book-services-btn',
  },
  {
    title: 'Shop Jewelry & Hair Charms',
    to: '/shop',
    class: 'glossy-nav-btn shop-charms-btn',
  },
  {
    title: `Today's Location`,
    to: '/location',
    class: 'glossy-nav-btn todays-location-btn',
  },
  {
    title: 'Contact Us',
    to: '/contact',
    class: 'glossy-nav-btn contact-us-btn',
  },
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
      <v-col cols="6">
        <v-card
          border
          color="background"
          rounded="xl"
        >
          <v-card-text class="text-body-1">
            Hair Wraps, Tinsel, Yarn Braids & Jewelry. I can come to you, (fees may apply) or visit
            me at today's location. Contact me for details.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-img
          :width="300"
          aspect-ratio="16/9"
          cover
          src="@/assets/mermaid3.png"
        ></v-img>
      </v-col>
    </v-row>

    <v-row class="align-center justify-center">
      <v-col cols="10">
        <v-row class="flex-column ga-2">
          <v-btn
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :class="item.class"
            rounded="lg"
            size="large"
            block
            elevation="5"
            justify="start"
          >
            {{ item.title }}
          </v-btn>
        </v-row>
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
      <v-button
        color="primary"
        variant="tonal"
        rounded="pill"
      >
        Book Now
      </v-button>
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

.glossy-nav-btn {
  color: white;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background-blend-mode: screen, normal;
  box-shadow:
    inset 0 2px 0 rgba(255, 255, 255, 0.35),
    inset 0 -3px 0 rgba(0, 0, 0, 0.12),
    0 2px 0 rgba(0, 73, 104, 0.45),
    0 6px 14px rgba(0, 58, 88, 0.2);
  text-shadow:
    0 1px 0 rgba(0, 0, 0, 0.28),
    0 0 4px rgba(255, 255, 255, 0.18);
  overflow: hidden;
}

.glossy-nav-btn:hover {
  filter: brightness(1.04);
  transform: translateY(-1px);
}

.glossy-nav-btn:active {
  filter: brightness(0.98);
  transform: translateY(1px);
}

.book-services-btn {
  background-image:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.34) 0%,
      rgba(255, 255, 255, 0.12) 34%,
      rgba(255, 255, 255, 0) 35%
    ),
    linear-gradient(to bottom, #78e5e9 0%, #33cfd8 28%, #00c1c8 56%, #008aae 100%);
}

.shop-charms-btn {
  background-image:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.32) 0%,
      rgba(255, 255, 255, 0.1) 34%,
      rgba(255, 255, 255, 0) 35%
    ),
    linear-gradient(to bottom, #6bdcf3 0%, #27c6ea 28%, #00b9d5 58%, #007bb8 100%);
}

.todays-location-btn {
  background-image:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.28) 0%,
      rgba(255, 255, 255, 0.08) 34%,
      rgba(255, 255, 255, 0) 35%
    ),
    linear-gradient(to bottom, #63b9ff 0%, #3a95f0 26%, #2c74df 58%, #2455b8 100%);
}

.contact-us-btn {
  background-image:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.32) 0%,
      rgba(255, 255, 255, 0.1) 34%,
      rgba(255, 255, 255, 0) 35%
    ),
    linear-gradient(to bottom, #66d7ef 0%, #1eb6df 28%, #008aae 58%, #007bb8 100%);
}
</style>
