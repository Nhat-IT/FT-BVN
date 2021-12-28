<template>
  <div id="app">
    <h1>Quản Lí Sinh Viên</h1>
    <ListSV/>
  </div>
</template>

<script>
import ListSV from './components/ListSV.vue'
export default {
  data(){
    return{
      
    }
  },
  components: {
    ListSV
  }
}
</script>

<style>
h1{
  text-align: center;
}
</style>
