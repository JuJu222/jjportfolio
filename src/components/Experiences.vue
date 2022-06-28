<template>
  <section class="mb-5">
    <h3 class="section-title text-2xl" style="margin-left: 10px;">Experiences</h3>
    <ul class="timeline">
      <li v-for="(experience,index) in experiences" :key="index" class="timeline-item rounded ml-3 p-4 shadow">
        <div class="timeline-arrow"></div>
        <p class="font-bold me-color">
          <!-- <i class="fa fa-university mr-1"></i> -->
          {{experience.organization}}
        </p>
        <div style="font-style: italic;">{{experience.position}}</div>
        <div style="font-style: italic;">{{experience.location}}</div>
        <div>{{experience.duration}}</div>
      </li>
    </ul>
  </section>
</template>

<script>
  const experiences = [
    {
      organization: 'Era Kita Lontar',
      position: 'Intern',
      location: 'Surabaya, Indonesia',
      duration: '2019',
    },
    {
      organization: '8TH NPLC Ciputra University',
      position: 'Programming Division Member',
      location: 'Surabaya, Indonesia',
      duration: '2020',
    },
    {
      organization: 'Leadership 101 Training Ciputra University',
      position: 'Participant',
      location: 'Surabaya, Indonesia',
      duration: '2021',
    },
    {
      organization: 'IMT (Informatics) Student Union Ciputra University',
      position: 'Treasurer',
      location: 'Surabaya, Indonesia',
      duration: '2021 - 2022',
    },
    {
      organization: 'MOCISCHOOL Research & Community Service Project',
      position: 'Full Stack Developer',
      location: 'Surabaya, Indonesia',
      duration: '2022',
    },
    {
      organization: 'Technopreneurship Workshop 2022',
      position: 'Full Stack Developer',
      location: 'Surabaya, Indonesia',
      duration: '2022',
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