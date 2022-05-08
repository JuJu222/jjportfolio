<template>
  <nav class="fixed">
    <ul class="h-screen flex flex-col justify-around ml-10">
      <li><a href="#profile">Profile</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#experiences">Experiences</a></li>
    </ul>
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

    }
  },
  mounted(){
    let icon1 = document.getElementById("icon1");
    let menu1 = document.getElementById("menu1");

    let icon2 = document.getElementById("icon2");


    let icon3 = document.getElementById("icon3");



    let Main = document.getElementById("Main");
    let open = document.getElementById("open");
    let close = document.getElementById("close");



  },
  methods:{
    showMenu1(flag){
      if (flag) {
        icon1.classList.toggle("rotate-180");
        menu1.classList.toggle("hidden");
      }
    },
    showMenu2(flag){
      if (flag) {
        icon2.classList.toggle("rotate-180");
      }
    },
    showMenu3(flag){
      if (flag) {
        icon3.classList.toggle("rotate-180");
      }
    },
    showNav(flag){
      if (flag) {
        Main.classList.toggle("-translate-x-full");
        Main.classList.toggle("translate-x-0");
        open.classList.toggle("hidden");
        close.classList.toggle("hidden");
      }
    },
  }
}
</script>

<style>

</style>