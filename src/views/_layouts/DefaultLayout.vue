<template>
  <main class="flex" aria-label="content">
    <section aria-label="sidebar" class="w-52 flex-shrink-0">
      <slot name="sidebar" />
    </section>
    <section aria-label="content" class="flex-grow">
      <nav aria-label="navigation">
        <router-link to="/">Discover</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/profile">Profile</router-link>
      </nav>
      <slot name="content" />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
});
</script>
