<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  flashText: {
    type: String,
    required: true,
  },
  expandedTitle: {
    type: String,
    required: true,
  },
  expandedSubtitle: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  cardImage: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
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
                    :src="icon"
                    alt=""
                    class="merm-accordion-icon"
                  />
                </v-col>

                <v-col
                  class="d-flex align-center justify-start"
                  cols="4"
                >
                  <span class="accordion-title text-title-medium font-weight-semibold">{{
                    title
                  }}</span>
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
                      {{ flashText }}
                    </span>
                    <span
                      v-else
                      key="1"
                    >
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
                  <v-card-title class="text-title-medium"> {{ expandedTitle }} </v-card-title>

                  <v-card-subtitle> {{ expandedSubtitle }} </v-card-subtitle>

                  <v-card-text>
                    {{ description }}
                  </v-card-text>
                </div>

                <v-avatar
                  class="ma-3"
                  rounded="0"
                  size="125"
                >
                  <v-img :src="cardImage"></v-img>
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
