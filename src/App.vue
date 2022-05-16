<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="w-full h-full">
    <!-- Navigation starts -->
    <Navbar />
    <!-- Navigation ends -->
    <!-- Page title ends -->
    <div class="container mx-auto px-6">
      <!-- Remove class [ h-64 ] when adding a card block -->
      <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
        <router-view></router-view>
    </div>
  </div>
  <div class="container mx-auto">
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400&display=swap');

body {
  font-family: 'Fredoka', sans-serif;
}
</style>
