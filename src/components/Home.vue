<template>
  <section>
    <section id="profile" class="flex flex-row justify-center gap-x-34">
      <div class="mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h2 class="block xl:inline text-4xl text-center">Hi, I'm</h2>
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block text-indigo-600 xl:inline">Justin Jap</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">I am currently an informatics student studying in Ciputra University Surabaya. I love technology and I like to explore new things, especially if it is related with programming. I would describe myself as creative, discipline, persistent, and hard-working.</p>
        </div>
      </div>
      <div>
        <img class="home-img" src="/img/justinjapweb.png" alt="" />
      </div>
    </section>
    <section id="portfolio">
      <h2 class="text-5xl text-center">Portfolio</h2>
      <div class="flex my-10 flex-wrap justify-center">
        <PortfolioCard v-for="(portfolio, index) in portfolios" class="m-5 z-10" :portfolio="portfolio" @click="open[index] = true"/>
      </div>
    </section>
    <section id="skills">
      <h2 class="text-5xl text-center">Skills</h2>
      <div class="flex my-10 flex-wrap justify-center">
        <SkillCard class="m-5" title="Android" icon="/img/icons/android.svg"/>
        <SkillCard class="m-5" title="CSS" icon="/img/icons/css3.svg"/>
        <SkillCard class="m-5" title="HTML" icon="/img/icons/html5.svg"/>
        <SkillCard class="m-5" title="Java" icon="/img/icons/java.svg"/>
        <SkillCard class="m-5" title="Javascript" icon="/img/icons/javascript.svg"/>
        <SkillCard class="m-5" title="Kotlin" img-class="w-16" icon="/img/icons/kotlin.svg"/>
        <SkillCard class="m-5" title="Laravel" icon="/img/icons/laravel.svg"/>
        <SkillCard class="m-5" title="PHP" icon="/img/icons/php.svg"/>
        <SkillCard class="m-5" title="Python" icon="/img/icons/python.svg"/>
        <SkillCard class="m-5" title="Next.js" icon="/img/icons/next.svg"/>
        <SkillCard class="m-5" title="Vue" icon="/img/icons/vue.svg"/>
        <SkillCard class="m-5" title="MySQL" icon="/img/icons/mysql.svg"/>
        <SkillCard class="m-5" title="Firebase" icon="/img/icons/firebase.svg"/>
        <Modal v-for="(portfolio, index) in portfolios" :portfolio="portfolio" :open="open[index]" @clicked="open[index] = false"/>
      </div>
    </section>
    <section id="education">
      <Education class="w-2/4"></Education>
    </section>
    <section id="experiences">
      <Experiences class="w-2/4"></Experiences>
    </section>
  </section>
</template>

<script>
  import { ref } from 'vue';
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import PortfolioCard from "./PortfolioCard.vue";
  import SkillCard from "./SkillCard.vue";
  import Modal from "./Modal.vue";
  import Education from "./Education.vue";
  import Experiences from "./Experiences.vue";

  const portfolios = [
    {
      title: "Vesting",
      year: "2020",
      technologies: [
        { name: "Vue", src: "vue.svg" }
      ],
      description: "Vesting is an Android application that allows users to simulate buying and selling shares without having to worry about the actual risk of losing real money in the stock market. Users are able to see the share price of up to 500 companies from the US stock market along with their statistics and other important information. Vesting also provides the hottest news available to help you make your decision on which stocks to buy or sell. This project is built with Java using Android Studio with the latest market data from Alpha Vantage. Vesting has been granted a copyright by Ciputra University.\n",
      img: "vesting.png"
    },
    {
      title: "MOCISCHOOL",
      year: "2021",
      technologies: [
        { name: "Vue", src: "vue.svg" }
      ],
      description: "MOCISCHOOL is a website built to help optimize the operational field of schools, especially for the maintenance of school buildings. It is equipped with a system to easily view, add, edit, report, and delete maintenance data. It also allows the user to schedule meetings along with reporting the result of past meetings. User roles are added (between admins and regular users) to limit access to certain features. This project is built with PHP using Laravel along with MySQL as the database. MOCISCHOOL has been granted a copyright by Ciputra University.",
      img: "mocischool.png"
    },
    {
      title: "Technopreneurship Workshop",
      year: "2022",
      technologies: [
        { name: "Vue", src: "vue.svg" }
      ],
      description: "Technopreneurship Workshop is a technology-themed workshop hosted annually by IMT Student Union Ciputra University that aims to improve relationships between students as well as train and prepare participants to become young technopreneurs with integrity and professionalism. This web application allows participating investors to invest in different projects created by the students and show which team is currently leading the game. This project is built with Vue.js and Tailwind CSS on the front-end along with PHP using Laravel with MySQL database as the back-end.",
      img: "technoshop.png"
    },
    {
      title: "PhysX",
      year: "2022",
      technologies: [
        { name: "Vue", src: "vue.svg" }
      ],
      description: "PhysX is an application (Android based and also web-based) which aims to help 10th graders in Indonesia to better understand the 2022 physics curriculum set by the Indonesian government. This project is designed to accelerate the understanding of basic physics theory along with day-to-day implementations using a gamified quiz system. Some of the topics that are covered in this project include vectors, straight line motion, and Newton's laws of motion. This project is built with Java using Android Studio and with PHP using Laravel along with MySQL as the database.",
      img: "physx.png"
    },
    {
      title: "StartNow",
      year: "2021",
      technologies: [
        { name: "Vue", src: "vue.svg" }
      ],
      description: "StartNow is an android and web-based application that aims to provide easier access for Indonesian startups to\n" +
          "collaborate with each other along with connecting them to investors who want to look and invest in startups that matches their interest. StartNow acts as a forum that focuses on supporting the growth of startups in Indonesia by expanding their network and providing easier access to obtain extra capital. This project is built with Java using Android Studio and with PHP using Laravel along with MySQL as the database. StartNow was a finalist in the LO Kreatif 2021 Competition, Mobile/Web Application category.",
      img: "startnow.png"
    },
  ]

  const open = new Array(portfolios.length).fill(false);

  export default {
    name: "Home",
    components: {
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