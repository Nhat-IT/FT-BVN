<template>
  <div id="app">
    <div>
      {{ user }}
      <button @click="setUser(tenNguoiDung)">Click Me!</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  data(){
    return{
      tenNguoiDung: 'Nguyen Tan Tai'
    }
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    ...mapMutations(['setUser']),
    ...mapActions(['setUser'])
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
