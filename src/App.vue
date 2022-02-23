<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "./views/layouts/DefaultLayout.vue";

export default defineComponent({
  components: {
    DefaultLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout || DefaultLayout;
    },
  },
});
</script>

<style lang="scss"></style>
