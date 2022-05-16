<template>
  <nav class="w-full mx-auto bg-white shadow sticky top-0 z-50">
    <div class="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
      <div class="h-full flex items-center">
        <div class="mr-10 flex items-center">
          <h3 class="text-base me-color font-bold tracking-normal leading-tight ml-3">justinjap.com</h3>
        </div>

        <ul class="pr-12 xl:flex items-center h-full hidden">
          <li class="mr-10"><a href="#profile">Profile</a></li>
          <li class="mr-10"><a href="#portfolio">Portfolio</a></li>
          <li class="mr-10"><a href="#skills">Skills</a></li>
          <li class="mr-10"><a href="#education">Education</a></li>
          <li class="mr-10"><a href="#achievements">Achievements</a></li>
          <li class="mr-10"><a href="#experiences">Experiences</a></li>
        </ul>
      </div>

      <div class="visible xl:hidden flex items-center">
        <ul class="z-40 p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
          <li class="flex xl:hidden cursor-pointer text-gray-600 text-base leading-3 tracking-normal mt-2 py-3 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
              <a class="leading-6 ml-2 font-bold" href="#profile">Profile</a>
          </li>
          <li class="xl:hidden cursor-pointer text-gray-600 text-base leading-3 tracking-normal py-3 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
            <a class="leading-6 ml-2 font-bold" href="#portfolio">Portfolio</a>
          </li>
          <li class="xl:hidden cursor-pointer text-gray-600 text-base leading-3 tracking-normal py-3 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
            <a class="leading-6 ml-2 font-bold" href="#skills">Skills</a>
          </li>
          <li class="xl:hidden cursor-pointer text-gray-600 text-base leading-3 tracking-normal py-3 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
            <a class="leading-6 ml-2 font-bold" href="#education">Education</a>
          </li>
          <li class="xl:hidden cursor-pointer text-gray-600 text-base leading-3 tracking-normal py-3 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
            <a class="leading-6 ml-2 font-bold" href="#achievements">Achievements</a>
          </li>
          <li class="xl:hidden cursor-pointer text-gray-600 text-base leading-3 tracking-normal py-3 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
            <a class="leading-6 ml-2 font-bold" href="#experiences">Experiences</a>
          </li>
        </ul>

        <svg @click="MenuHandler($event, true)" aria-haspopup="true" aria-label="Main Menu" v-bind:xmlns="xmlns" class="show-m-menu icon icon-tabler icon-tabler-menu" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <line x1="4" y1="8" x2="20" y2="8"></line>
          <line x1="4" y1="16" x2="20" y2="16"></line>
        </svg>
        <div class="hidden close-m-menu" @click="MenuHandler($event, false)">
          <svg aria-label="Close" v-bind:xmlns="xmlns" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('activea');
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('notactivea');
      } else {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('activea');
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('notactivea');
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });

});

export default {
  name: "Navbar",
  data(){
    return{
      xmlns: "http://www.w3.org/2000/svg",
      xlink: "http://www.w3.org/1999/xlink",
    }
  },
  methods: {
    dropdownHandler(event) {
      let single = event.currentTarget.getElementsByTagName("ul")[0];
      single.classList.toggle("hidden");
    },
    MenuHandler(el, val) {
      let MainList = el.currentTarget.parentElement.getElementsByTagName("ul")[0];
      let closeIcon = el.currentTarget.parentElement.getElementsByClassName("close-m-menu")[0];
      let showIcon = el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
      if (val) {
        MainList.classList.remove("hidden");
        el.currentTarget.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      } else {
        showIcon.classList.remove("hidden");
        MainList.classList.add("hidden");
        el.currentTarget.classList.add("hidden");
      }
    },
  },
}
</script>

<style>

</style>