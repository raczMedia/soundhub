<template>
  <component :is="layout">
    <template #content>
      <router-view name="content" />
    </template>
    <template #sidebar>
      <router-view name="sidebar" />
    </template>
  </component>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import DefaultLayout from "./views/_layouts/DefaultLayout.vue";
import {useRoute} from "vue-router";

export default defineComponent({
  components: {
    DefaultLayout,
  },
  setup() {
    const route = useRoute();
    const layout = computed(() => {
      return route.meta.layout || DefaultLayout;
    })

    return { layout };
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
html,
body {
  font-family: "Poppins", sans-serif;
}

#app {
  font-family: "Poppins", sans-serif;
}
</style>
