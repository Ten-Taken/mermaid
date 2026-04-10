<script setup>
// import flyer from '@/assets/flierlogo.png'
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
        sm="10"
        md="10"
        lg="8"
        xl="6"
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
</style>
