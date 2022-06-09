<template>
  <div class="container--fluid">
    <Menu />
    <div class="container">
      <div class="row mt-3">

        <div v-for="airport in airports" :key="airport.abbreviation">
          <airport-card :airport="airport" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import allAirports from './data/airports.js'
import AirportCard from './AirportCard.vue'
import Menu from './Menu.vue';
import {mapState} from "vuex";
export default {
  components: {
    AirportCard,
    Menu
  },
  data :() => ({
      message: "A list of words",
    airports: []
  }),
  mounted(){
    this.airports =  allAirports
  },
  computed: {
    ...mapState({
      cart : state => state.a
    }),
  }
}
</script>
