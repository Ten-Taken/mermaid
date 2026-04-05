<template>
  <v-app-bar
    border="sm"
    class="px-2"
    color="surface"
    image="@/assets/appbeachbanner.jpg"
    elevation="3"
    density="prominent"
  >
    <template v-slot:image>
      <v-img
        :cover="true"
        position="50% 25%"
      ></v-img>
    </template>

    <template #prepend>
      <img
        alt="Vue logo"
        src="@/assets/shell3.png"
        width="24"
        height="24"
      />
    </template>

    <v-app-bar-title class="font-weight-semibold"> The Mermaid Bar </v-app-bar-title>

    <!-- <v-spacer /> -->

    <!-- <v-btn
      v-for="item in navItems"
      :key="item.to"
      :prepend-icon="item.icon"
      :to="item.to"
      class="ml-2"
      rounded="pill"
      variant="text"
    >
      {{ item.title }}
    </v-btn> -->
  </v-app-bar>
</template>
