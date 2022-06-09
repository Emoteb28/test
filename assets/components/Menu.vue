<template>
  <v-toolbar
      color="purple"
      dark
  >
    <v-toolbar-title>Title</v-toolbar-title>

    <v-divider
        class="mx-4"
        vertical
    ></v-divider>

    <span class="subheading">My Home</span>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text @click="goToHome">
        Home
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text @click="goToDemo">
        Demo
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>
        Music
      </v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-toolbar>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods:{
    goToDemo() {
      this.$router.push('/demo');
    },
    goToHome(){
      this.$router.push('/');
      //if the route accepts params, you can also use
      // this.$router.push({name:'home', params: {id: '[paramdata]'}});
    }
  }
}
</script>