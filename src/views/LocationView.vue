<script setup>
const actionButtons = [
  {
    title: 'Get Directions',
    class: 'glossy-nav-btn get-directions-btn',
  },
  {
    title: 'Book at Location',
    class: 'glossy-nav-btn book-at-location-btn',
  },
  {
    title: `Request Mobile Service`,
    class: 'glossy-nav-btn request-mobile-service-btn',
  },
]
</script>

<template>
  <v-container
    class="pa-0"
    fluid
  >
    <v-row class="ma-0 align-center justify-center">
      <v-col
        cols="12"
        xs="12"
        sm="8"
        md="8"
        lg="6"
        xl="4"
        class="pa-0"
      >
        <v-card
          theme="mermLocationTheme"
          variant="elevated"
        >
          <v-card-title class="location-card-title text-headline-medium"
            >Harry T's Harbor</v-card-title
          >
          <v-divider
            :thickness="1.4"
            class="border-opacity-50 mx-6"
          />
          <v-card-text class="text-body-large location-card-text"
            >Tuesday 6:00 PM - 9:30 PM
          </v-card-text>
          <v-card-text class="text-body-large location-card-text"
            >Thursday 6:00 PM - 9:30 PM
          </v-card-text>
          <v-card-text class="text-body-large location-card-text"
            >Friday 6:00 PM - 9:30 PM
          </v-card-text>
          <v-divider
            :thickness="1.4"
            class="border-opacity-50 mx-6"
          />
          <v-card-text class="text-title-large location-card-catch-phrase"
            >Catch the Sunset with Us!</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row class="align-center justify-center">
      <v-col
        cols="10"
        xs="10"
        sm="8"
        md="8"
        lg="6"
        xl="4"
      >
        <v-row class="flex-column ga-2">
          <v-btn
            v-for="button in actionButtons"
            :key="button.title"
            :class="button.class"
            rounded="lg"
            size="large"
            block
            elevation="5"
            justify="start"
          >
            {{ button.title }}
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.location-card-title {
  color: rgb(var(--v-theme-secondary));
  text-align: center;
  font-weight: 700;
}

.location-card-text {
  color: rgb(var(--v-theme-primary));
  text-align: center;
  font-weight: 600;
}

.location-card-catch-phrase {
  color: rgb(var(--v-theme-primary));
  text-align: center;
  font-weight: 400;
  font-style: italic;
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

.get-directions-btn {
  background-image:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.34) 0%,
      rgba(255, 255, 255, 0.12) 34%,
      rgba(255, 255, 255, 0) 35%
    ),
    linear-gradient(to bottom, #78e5e9 0%, #33cfd8 28%, #00c1c8 56%, #008aae 100%);
}

.book-at-location-btn {
  background-image:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.28) 0%,
      rgba(255, 255, 255, 0.08) 34%,
      rgba(255, 255, 255, 0) 35%
    ),
    linear-gradient(to bottom, #63b9ff 0%, #3a95f0 26%, #2c74df 58%, #2455b8 100%);
}

.request-mobile-service-btn {
  background-image:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.32) 0%,
      rgba(255, 255, 255, 0.1) 34%,
      rgba(255, 255, 255, 0) 35%
    ),
    linear-gradient(to bottom, #6bdcf3 0%, #27c6ea 28%, #00b9d5 58%, #007bb8 100%);
}
</style>
