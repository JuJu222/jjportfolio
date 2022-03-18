<template>
  <div class="shadow-lg rounded-3xl p-5 transition duration-500 ease-in-out hover:shadow-xl hover:scale-105">
    <div class="w-24 h-24 flex justify-center">
      <img :src="icon" alt="" :class="imgClass">
    </div>
    <h3 class="text-xl text-center">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    icon: String,
    title: String,
    imgClass: {
      type: String,
      default: 'w-full h-full'
    }
  }
};
</script>

<style scoped>

</style>