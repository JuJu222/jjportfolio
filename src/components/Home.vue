<template>
  <div class="flex flex-row justify-center gap-x-34">
    <div class="mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div class="sm:text-center lg:text-left">
        <h2 class="block xl:inline text-4xl text-center">Hi, I'm</h2>
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block text-indigo-600 xl:inline">Justin Jap</span>
        </h1>
        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Get started </a>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Live demo </a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img class="home-img" src="img/justinjapweb.png" alt="" />
    </div>
  </div>
  <div>
    <h2 class="text-5xl text-center">Skills</h2>
    <div class="flex h-60 my-10 flex-wrap justify-center">
      <PortfolioCard class="m-5 z-10"/>
      <PortfolioCard class="m-5 z-10"/>
      <PortfolioCard class="m-5 z-10"/>
    </div>
  </div>
  <div>
    <h2 class="text-5xl text-center">Skills</h2>
    <div class="flex my-10 mb-96 flex-wrap justify-center">
      <SkillCard class="m-5 z-10" title="Android" icon="img/icons/android.svg"/>
      <SkillCard class="m-5 z-10" title="CSS" icon="img/icons/css3.svg"/>
      <SkillCard class="m-5 z-10" title="HTML" icon="img/icons/html5.svg"/>
      <SkillCard class="m-5 z-10" title="Java" icon="img/icons/java.svg"/>
      <SkillCard class="m-5 z-10" title="Javascript" icon="img/icons/javascript.svg"/>
      <SkillCard class="m-5 z-10" title="Kotlin" img-class="w-16" icon="img/icons/kotlin.svg"/>
      <SkillCard class="m-5 z-10" title="Laravel" icon="img/icons/laravel.svg"/>
      <SkillCard class="m-5 z-10" title="PHP" icon="img/icons/php.svg"/>
      <SkillCard class="m-5 z-10" title="Python" icon="img/icons/python.svg"/>
      <SkillCard class="m-5 z-10" title="Next.js" icon="img/icons/next.svg"/>
      <SkillCard class="m-5 z-10" title="Vue" icon="img/icons/vue.svg"/>
      <SkillCard class="m-5 z-10" title="MySQL" icon="img/icons/mysql.svg"/>
      <SkillCard class="m-5 z-10" title="Firebase" icon="img/icons/firebase.svg" @click="() => togglePopup('buttonTrigger')"/>
      <Modal v-if="modalTriggers.buttonTrigger" :togglePopup="() => togglePopup('buttonTrigger')" />
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import PortfolioCard from "./PortfolioCard.vue";
  import SkillCard from "./SkillCard.vue";
  import Modal from "./Modal.vue";

  export default {
    name: "Home",
    components: {
      Modal,
      SkillCard,
      PortfolioCard,
      Popover,
      PopoverButton,
      PopoverPanel,
    },
    setup() {
      const modalTriggers = ref({
        buttonTrigger: false
      });

      const togglePopup = (trigger) => {
        modalTriggers.value[trigger] = !modalTriggers.value[trigger]
      }

      return {
        Modal,
        modalTriggers,
        togglePopup
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