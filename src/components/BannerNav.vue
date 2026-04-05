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

    <v-spacer />

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
        <v-app-bar-title class="banner-title"> The Mermaid Bar </v-app-bar-title>
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
