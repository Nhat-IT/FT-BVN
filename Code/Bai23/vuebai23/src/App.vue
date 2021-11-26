<template>
  <div id="app">
    <h1>Nguyen Tan Nhat</h1>
    <div>{{name}}</div>
    <input v-model="name" type="text"/>
    <input type="radio" value="hn" v-model="cities"> HaNoi
    <input type="radio" value="hcm" v-model="cities"> TPHCM
    <br>
    <input type="checkbox" v-model="show" value="false">
    <div v-show="show">Nguyen Tan Nhat</div>

    <input type="checkbox" value="A" v-model="dapan">A
    <input type="checkbox" value="B" v-model="dapan">B
    <input type="checkbox" value="C" v-model="dapan">C
    <input type="checkbox" value="D" v-model="dapan">D
    <div v-if="dapan == 'B'">Dung</div>
    <div v-else>Sai</div>
    <br>
    <div v-for="(monhoc, index) in monhocs" v-bind:key="index">
      <span v-show="!monhoc.editing">
        {{monhoc.name}}
        <span @click="monhoc.editing = true">Sua</span>
      </span>
      <div v-show="monhoc.editing">
        <input type="text" v-model="monhoc.name">
        <button @click="monhoc.editing = false">Xong</button>
      </div>
    </div>

    <a v-bind:href="link" v-bind:class="name">link</a>

    <br>

    <input v-bind:type="shPass">
    <button @click="shPass = shPass == 'password'?'text':'password'">show pass</button>
    <br><br>
    <div v-for="(language, index) in languages" :key="index" @click="language.selected = !language.selected" :class="{dangChon: language.selected}">
      {{language.nameLan}}
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      show: true,
      name: 'Nhat',
      cities: 'hn',
      dapan: [],
      monhocs: [
        {name:"Toan", editing: false},
        {name:"Tieng Viet", editing: false},
      ],
      link: "www.google.com",
      shPass: 'password',
      languages : [
        {nameLan: 'php', selected: true},
        {nameLan: 'html', selected: false},
        {nameLan: 'java', selected: false},
        {nameLan: 'c#', selected: false}
      ],
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

.dangChon{
  background-color: #2c3e50;
  color: aliceblue;
}
</style>
