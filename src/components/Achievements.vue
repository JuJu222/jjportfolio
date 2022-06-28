<template>
  <section class="mb-5">
    <h3 class="section-title text-2xl" style="margin-left: 10px;">Achievements</h3>
    <ul class="timeline">
      <li v-for="(achievement,index) in achievements" :key="index" class="timeline-item rounded ml-3 p-4 shadow">
        <div class="timeline-arrow"></div>
        <p class="font-bold me-color">
          <!-- <i class="fa fa-university mr-1"></i> -->
          {{achievement.name}}
        </p>
        <div class="font-bold text-yellow-700">{{achievement.place}}</div>
        <div>{{achievement.category}}</div>
        <div style="font-style: italic;">{{achievement.scope}}</div>
        <div>{{achievement.year}}</div>
      </li>
    </ul>
  </section>
</template>

<script>
  const achievements = [
    {
      name: 'International Competitions and Assessments for Schools (ICAS)',
      place: 'Gold Medal (High Distinction)',
      category: 'Digital Technologies',
      scope: 'International',
      year: '2017',
    },
    {
      name: 'International Competitions and Assessments for Schools (ICAS)',
      place: 'Distinction',
      category: 'Digital Technologies',
      scope: 'International',
      year: '2018',
    },
    {
      name: 'Science Your Future Competition (SYFC)',
      place: 'Top 15 Finalist',
      category: 'STEM',
      scope: 'National (Indonesia)',
      year: '2018',
    },
    {
      name: 'LO Kreatif 2021',
      place: 'Finalist',
      category: 'Mobile/Web Application',
      scope: 'National (Indonesia)',
      year: '2021',
    },
    {
      name: 'Sahabat Ganjar Hackathon',
      place: '2nd Place',
      category: 'Hackathon',
      scope: 'Regional (East Java, Indonesia)',
      year: '2021',
    },
  ]

  export default {
    name: "Achievements",
    data() {
      return {
        achievements
      }
    }
  };
</script>

<style scoped>

</style>