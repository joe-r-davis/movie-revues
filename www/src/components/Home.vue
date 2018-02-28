<template>
  <div class="hello">
    <form @submit.prevent='movieSearch'>
      <input type="text" v-model="title"placeholder="Movie Title">
      <button type="submit">Search MovieDB</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    movieSearch(){
      this.$store.dispatch('getMovies', this.title)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
