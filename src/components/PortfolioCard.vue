<template>
  <div
      class="wrapper max-w-xs bg-gray-50 rounded-xl shadow-lg card overflow-hidden"
  >
    <div>
      <img :src="'/img/portfolio/' + portfolio.img" alt="montaña"/>
    </div>
    <div class="p-3 space-y-2 card-body">
      <h3 class="text-gray-700 font-semibold text-md">
        {{ portfolio.title }}
      </h3>
      <div class="flex flex-row">
        <h2 class="text-gray-900">{{ portfolio.year }}</h2>
        <p class="mx-2 me-color">&#9679;</p>
        <div class="flex flex-row">
          <img v-for="technology in portfolio.technologies" :src="'/img/icons/' + technology.img" :alt="technology" class="w-7 h-7" />
        </div>
      </div>
      <p class="text-sm text-gray-900 leading-sm text-ellipsis">
        {{ portfolio.description }}
      </p>
    </div>
    <div
        class="me-bg w-full flex justify-center py-2 text-white font-semibold transition duration-300"
    >

      <h3 class="font-medium text-md">
        Click to Show More
      </h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PortfolioCard",
    props: {
      portfolio: Object
    }
  };
</script>

<style scoped>
  .card:hover {
    transform: scale(1.1);
  }

  .card {
    transition: transform 1s ease;
    min-width: 400px;
    height: min-content;
  }
</style>