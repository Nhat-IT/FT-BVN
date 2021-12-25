<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Fullstack 6</h1>
    <button @click="show = !show">Click</button>
    <div v-show="show">Nguyen Tan Nhat</div>
    <div>{{ name }}</div>
    <input v-model="name " type="text"/>
    <input type="checkbox" value="hn" v-model="cities">Ha Noi
    <input type="checkbox" value="dn" v-model="cities"/> Da Nang
    <input type="checkbox" value="hcm" v-model="cities">Ho Chi Minh
    <div v-if="cities.length > 0"> Da di {{cities.length}} thanh pho</div>
    <div v-else>ban chua chon thanh pho</div>
    <input type="radio" v-model="lecture" value="1"/> math
    <input type="radio" v-model="lecture" value="2"/> bio
    <br> 
    <div v-for="ite in subject" :key="ite.item">
      <div v-show="!ite.editing">
        {{ite.item}}
        <span @click = "ite.editing = true">Sua</span>
      </div>
      <div v-show="ite.editing">
        <input type="text" v-model="ite.item">
        <button @click = "ite.editing = false">Xong</button>
      </div>
    </div>
    <a :href="link">Link</a>
  </div>
</template>

<script>

export default {
  data(){
    return{
      show: true,
      name: "Nhat",
      cities: ["hn"],
      lecture: 2,
      subject: [
        {item: "math", editing: false},
        {item: "art", editing: false},
        {item: "science", editing: false},
        {item: "bio", editing: false}
      ],
      link: "http://google.com"  
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
