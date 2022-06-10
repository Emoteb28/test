<template>
  <div class="container--fluid">
    <v-card
        class="mb-3 ml-0 mr-3"
        max-width="344"
        min-height="300"
    >
      <v-card-text>
        <div>{{ airport.name }}</div>
        <p class="text-h4 text--primary exemple">
          {{ airport.shortdesc }}
        </p>
        <div class="text--primary">
          {{ airport.price }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
            text
            color="teal accent-4"
            @click="reveal = true"
        >
          Learn More
        </v-btn>
      </v-card-actions>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Evan You</v-list-item-title>
          </v-list-item-content>
          <!--          @click="like"-->
          <!--          resetName-->
          <!--          @click="updateName('Marc')"-->
          <v-row
              align="center"
              justify="end"
          >
            <v-icon class="mr-1"
                    v-bind:style="{ color: activeColor}"
                    @click="gotToPage()"
            >
              mdi-heart
            </v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1"
                    @click="addShare">
              mdi-share-variant
            </v-icon>
            <span class="subheading"
                  v-text="share"></span>
          </v-row>
        </v-list-item>
      </v-card-actions>
      <v-expand-transition>
        <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%;"
        >
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary">
              Origin
            </p>
            <p>
              {{ airport.shortdesc }}
            </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
                text
                color="teal accent-4"
                @click="reveal = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
    <!--      {{ this.firstName}}-->
    <!--    {{this.fullName }}-->

    <!--    {{ this.age }}-->
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  props: {
    airport: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    reveal: false,
    activeColor: 'blue',
    share: 0,
  }),
  methods: {
    gotToPage() {
      this.$router.push({
        path: `/detail/${this.airport.id}`
      })
    },
    like() {
      (this.activeColor === 'blue') ? this.activeColor = 'pink' : this.activeColor = 'blue'
    },
    addShare() {
      this.share++
    },
    ...mapMutations([
      // 'updateFirstName',
    ]),
    ...mapActions([
      'addToFavorite',
      'updateFirstName',
      'resetName',
      'updateName'
    ]),
    // updateNameFin(name) {
    //   // this.updateName(name)
    //   this.$store.dispatch('updateName', name)
    // }
    change(name) {
      this.$store.commit("changeName", name);
    }
  },
  computed: {
    ...mapState(['name']),
    // ...mapState(['firstName', 'age', 'dob']),
    // ...mapGetters(['fullName'])
    // Now you can read the name by using this.firstName
  },
  mounted() {

  }
}

</script>
<style>
.exemple {
  min-height: 20vh;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

</style>
