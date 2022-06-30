<template>
  <section>
    <section id="profile" class="pt-8 lg:flex items-center relative z-10 container mx-auto">
      <div class="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
        <img class="mx-auto home-img" src="/img/justinjapweb.png" />
      </div>
      <div class="w-full lg:w-1/2 h-full">
        <p class="me-color text-4xl mb-4">Hi, I'm</p>
        <h1 class="text-gray-900 text-4xl md:text-7xl mb-8">Justin Jap</h1>
        <p class="text-gray-500 font-regular text-xl mb-8 md:pr-32">I am currently an informatics student studying in Ciputra University Surabaya. I love technology and I like to explore new things, especially if it is related with programming. I would describe myself as creative, discipline, persistent, and hard-working.</p>
      </div>
    </section>
    <section id="portfolio">
      <h2 class="text-5xl text-center me-color">Portfolio</h2>
      <div class="flex my-10 flex-wrap justify-center items-stretch">
        <PortfolioCard v-for="(portfolio, index) in portfolios" class="m-5 z-10" :portfolio="portfolio" @click="open[index] = true"/>
      </div>
    </section>
    <section id="skills">
      <h2 class="text-5xl text-center me-color">Skills</h2>
      <div class="flex my-10 flex-wrap justify-center">
        <template v-for="(skill, index) in skills">
          <SkillCard v-if="index === 'Kotlin'" class="m-5" :title="index" img-class="w-16" :icon="'/img/icons/' + skill.img"/>
          <SkillCard v-else class="m-5" :title="index" :icon="'/img/icons/' + skill.img"/>
        </template>
      </div>
    </section>
    <div class="flex flex-wrap justify-center">
      <section id="education" class="w-96 md:w-1/3">
        <Education></Education>
      </section>
      <section id="achievements" class="w-96 md:w-1/3">
        <Achievements></Achievements>
      </section>
      <section id="experiences" class="w-96 md:w-1/3">
        <Experiences></Experiences>
      </section>
    </div>
    <Modal v-for="(portfolio, index) in portfolios" :portfolio="portfolio" :open="open[index]" @clicked="open[index] = false"/>
  </section>
</template>

<script>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import PortfolioCard from "./PortfolioCard.vue";
  import SkillCard from "./SkillCard.vue";
  import Modal from "./Modal.vue";
  import Education from "./Education.vue";
  import Experiences from "./Experiences.vue";
  import Achievements from "./Achievements.vue";
  import { portfolios } from "../assets/Portfolios";
  import { skills } from "../assets/Skills";

  const open = new Array(portfolios.length).fill(false);

  export default {
    name: "Home",
    components: {
      Achievements,
      Education,
      Experiences,
      Modal,
      SkillCard,
      PortfolioCard,
      Popover,
      PopoverButton,
      PopoverPanel,
    },
    data() {
      return {
        portfolios,
        skills,
        open
      }
    }
  };
</script>

<style scoped>
  .home-img {
    height: 500px;
    filter: drop-shadow(0 20px 20px rgba(0, 0, 0, 0.15)) contrast(90%);
  }
</style>