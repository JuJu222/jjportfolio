<template>
  <section class="mb-5">
    <h3 class="section-title text-2xl" style="margin-left: 10px;">Education</h3>
    <ul class="timeline">
      <li v-for="(education,index) in educationInfo" :key="index" class="timeline-item rounded ml-3 p-4 shadow">
        <div class="timeline-arrow"></div>
        <p class="font-bold me-color">
          <!-- <i class="fa fa-university mr-1"></i> -->
          {{education.school}}
        </p>
        <div style="font-style: italic;">{{education.location}}</div>
        <div>{{education.duration}}</div>
      </li>
    </ul>
  </section>
</template>

<script>
  const educationInfo = [
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
    name: "Education",
    data() {
      return {
        educationInfo
      }
    }
  };
</script>

<style scoped>

</style>