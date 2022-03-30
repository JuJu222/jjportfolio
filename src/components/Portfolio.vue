<template>
  <div class="flex flex-row justify-center gap-x-34">
    <div>
      <h2 class="text-5xl text-center">Portfolios</h2>
      <div class="flex h-60 my-10 flex-wrap justify-center">
        <PortfolioCard v-for="portfolio in portfolios" class="m-5 z-10" :portfolio="portfolio"/>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioCard from "./PortfolioCard.vue";

const portfolios = [
  {
    title: "Vesting",
    year: "2020",
    technologies: [
      { name: "Vue", src: "vue.svg" }
    ],
    description: ""
  },
  {
    title: "MOCISCHOOL",
    year: "2021",
    technologies: [
      { name: "Vue", src: "vue.svg" }
    ],
    description: ""
  }
]

export default {
  name: "Portfolio",
  components: {
    PortfolioCard
  },
  data() {
    return {
      portfolios
    }
  }
};
</script>

<style scoped>

</style>