<template>
  <div
      class="wrapper max-w-xs bg-gray-50 rounded-b-md shadow-lg card"
  >
    <div>
      <img :src="'/img/portfolio/' + portfolio.img" alt="montaña"/>
    </div>
    <div class="p-3 space-y-3 card-body">
      <h3 class="text-gray-700 font-semibold text-md">
        {{ portfolio.title }}
      </h3>
      <p class="text-sm text-gray-900 leading-sm">
        {{ portfolio.description }}
      </p>
    </div>
    <div
        class="bg-teal-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500"
    >

      <h3 class="font-semibold text-md">
        {{ portfolio.title }}
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

  .card:hover > .card-body {
    opacity: 1;
    height: 200px;
  }

  .card-body {
    transition: all 1s ease;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }
</style>