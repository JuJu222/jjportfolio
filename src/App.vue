<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <div class="container mx-auto">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400&display=swap');

body {
  font-family: 'Fredoka', sans-serif;
}
</style>
