<template>
  <div>
    <nav>
      <router-link to="/">Discover</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/profile">Profile</router-link>
    </nav>
    <slot />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "DefaultLayout",
});
</script>

<style lang="scss" scoped>

</style>