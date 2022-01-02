<template>
  <div>
    <div>
      {{tien | dinhdangTien}}
    </div>
    <button @click="tien += 1000">+</button>
    <button @click="tien -= 1000">-</button>
  </div>
</template>

<script>


export default {
  filters: {
    dinhdangTien(soTien){
      return soTien.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    }
  },
  data(){
    return{
      tien: 1000000
    }
  }
}
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