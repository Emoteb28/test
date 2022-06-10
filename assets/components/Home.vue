<template>
  <div class="container--fluid">
    <Menu/>
    <div class="container">
      <div class="row mt-3">
        <div v-for="airport in this.allAirport" :key="airport.id">
          <airport-card :airport="airport"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AirportCard from './AirportCard.vue'
import Menu from './Menu.vue';
import {mapGetters} from "vuex";

export default {
  components: {
    AirportCard,
    Menu
  },
  data: () => ({
    message: "A list of words",
    // airports: ''
  }),
  mounted() {
    // this.airports = this.allAirport
  },
  computed: {
    ...mapGetters([
      "allAirport"
    ])
  }
}
</script>
