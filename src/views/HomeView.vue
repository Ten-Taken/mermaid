<template>
  <v-row>
    <v-col cols="12" md="8">
      <v-card
        border
        color="surface"
        rounded="xl"
        subtitle="Starter status"
        title="Vuetify is now the UI foundation"
      >
        <v-card-text class="text-body-1">
          This starter shell replaces the earlier Tailwind experiment and gives us a clean Vuetify
          base for layout, forms, navigation, and theming as the app grows.
        </v-card-text>

        <v-card-text class="pt-0">
          <v-chip-group column>
            <v-chip color="primary" variant="tonal">Vue 3</v-chip>
            <v-chip color="primary" variant="tonal">Vue Router</v-chip>
            <v-chip color="primary" variant="tonal">Pinia</v-chip>
            <v-chip color="primary" variant="tonal">Vuetify</v-chip>
            <v-chip color="primary" variant="tonal">MDI Icons</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card border color="surface" rounded="xl" title="Next good moves">
        <v-list lines="two">
          <v-list-item
            prepend-icon="mdi-palette-outline"
            title="Define the product theme"
            subtitle="Settle colors, density, typography, and component defaults."
          />
          <v-list-item
            prepend-icon="mdi-view-dashboard-outline"
            title="Build real route content"
            subtitle="Replace placeholders with the first useful screens and flows."
          />
          <v-list-item
            prepend-icon="mdi-package-variant-closed-plus"
            title="Extract shared UI pieces"
            subtitle="Create reusable cards, toolbars, dialogs, and form patterns."
          />
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
