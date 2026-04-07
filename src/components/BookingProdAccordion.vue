<script setup>
const tempState = ''
</script>

<template>
  <v-row class="justify-center">
    <v-col cols="10">
      <v-expansion-panels variant="inset">
        <v-expansion-panel
          color="mermPanel"
          bg-color="mermBannerBlue"
          max-height="3.3rem"
          rounded="shaped"
        >
          <v-expansion-panel-title>
            <template v-slot:default="{ expanded }">
              <v-row density="compact">
                <v-col cols="2">
                  <img
                    src="@/assets/booking/hairwraps.svg"
                    alt=""
                    class="merm-accordion-icon"
                  />
                </v-col>

                <v-col
                  class="d-flex align-center justify-start"
                  cols="4"
                >
                  <span class="accordion-title text-title-medium font-weight-semibold"
                    >Hair Wraps</span
                  >
                </v-col>
                <v-col
                  class="text-teal d-flex align-center"
                  cols="6"
                >
                  <v-fade-transition leave-absolute>
                    <span
                      v-if="expanded"
                      key="0"
                    >
                      Versatile and Stylish!
                    </span>
                    <span
                      v-else
                      key="1"
                    >
                      {{ tempState }}
                    </span>
                  </v-fade-transition>
                </v-col>
              </v-row>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-card
              color="accent"
              elevation="0"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-title-medium"> Hair Wraps </v-card-title>

                  <v-card-subtitle>Buy three get one free!</v-card-subtitle>

                  <v-card-text>
                    We wrap your hair like never before! Our hair wraps are designed to keep you
                    cool and stylish during your beach adventures. Whether you're lounging by the
                    pool or dancing under the stars, our wraps will add a touch of flair to your
                    look. Choose from a variety of colors and patterns to match your vibe!
                  </v-card-text>
                </div>

                <v-avatar
                  class="ma-3"
                  rounded="0"
                  size="125"
                >
                  <v-img src="@/assets/booking/hairwrapphoto.jpg"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<style scoped>
.accordion-title {
  color: #004a79;
}
.merm-accordion-icon {
  width: 3rem;
  height: 3rem;
  display: block;
}
</style>
