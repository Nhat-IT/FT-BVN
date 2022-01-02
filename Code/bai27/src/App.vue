<template>
  <div id="app">
      <!-- <UseFilter></UseFilter> -->

      <ul>
        <li><router-link :to="{name: 'inbox'}">Inbox</router-link></li>
        <li><router-link :to="{name: 'read', params: {id: 1}}">Read</router-link></li>
        <li><router-link :to="{name: 'draft'}">Draft</router-link></li>
        <li><router-link :to="{name: 'spam'}">Spam</router-link></li>
      </ul>

      <div>
        <div>
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
// import UseFilter from './components/UseFilter.vue'
export default {
  data(){
    return{
      
    }
  },
  components: {
    // UseFilter
  },
}
</script>

<style>
#app {

}
ul {
  list-style-type: none;
}
a{
    text-decoration: none
}
</style>
