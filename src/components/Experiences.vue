<template>
  <section class="mb-5">
    <h3 class="section-title" style="margin-left: 10px;">Education</h3>
    <ul class="timeline">
      <li v-for="(experience,index) in experiences" :key="index" class="timeline-item rounded ml-3 p-4 shadow">
        <div class="timeline-arrow"></div>
        <p class="h5 bold">
          <!-- <i class="fa fa-university mr-1"></i> -->
          {{experience.school}}
        </p>
        <span style="font-style: italic;">{{experience.location}}</span><br>
        <span style="font-style: italic;">{{experience.duration}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
  const experiences = [
    {
      school: 'Cita Hati Elementary School East Campus',
      location: 'Surabaya, Indonesia',
      duration: '2008 – 2014',
    },
    {
      school: 'Cita Hati Junior High School West Campus',
      location: 'Surabaya, Indonesia',
      duration: '2014 – 2017',
    },
    {
      school: 'Cita Hati Senior High School West Campus',
      location: 'Surabaya, Indonesia',
      duration: '2017 – 2020',
    },
    {
      school: 'Informatics - School of Information Technology, Ciputra University',
      location: 'Surabaya, Indonesia',
      duration: '2020 – Present',
    },
  ]

  export default {
    name: "Experiences",
    data() {
      return {
        experiences
      }
    }
  };
</script>

<style scoped>

</style>