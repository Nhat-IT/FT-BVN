<template>
  <div id="app">
    <h1>Accordion menu</h1>
    <ul>
      <li @click="selected = 1">
        <a>Languages</a>
        <ul v-show="selected == 1">
          <li>
            <a href="#">HTML</a>
          </li>
          <li>
            <a href="#">CSS</a>
          </li>
          <li>
            <a href="#">JS</a>
          </li>
          <li>
            <a href="#">PHP</a>
          </li>
        </ul>
      </li>
      <li @click="selected = 2">
        <a href="#">Adobe</a>
        <ul v-show="selected == 2">
          <li>
            <a href="#">PTS</a>
          </li>
          <li>
            <a href="#">IIIuslator</a>
          </li>
          <li>
            <a href="#">Dreamwaver</a>
          </li>
        </ul>
      </li>
      <li @click="selected = 3">
        <a href="#">Adobe</a>
        <ul v-show="selected == 3">
          <li>
            <a href="#">PTS</a>
          </li>
          <li>
            <a href="#">IIIuslator</a>
          </li>
          <li>
            <a href="#">Dreamwaver</a>
          </li>
        </ul>
      </li>
      <li @click="selected = 4">
        <a href="#">Adobe</a>
        <ul v-show="selected == 4">
          <li>
            <a href="#">PTS</a>
          </li>
          <li>
            <a href="#">IIIuslator</a>
          </li>
          <li>
            <a href="#">Dreamwaver</a>
          </li>
        </ul>
      </li>
    </ul>
    <br><br>
    <h3>Search suggest</h3>
    <div id="search">
      <input type="text" v-model="searchKey"
        @keypress="resultLanguages = languages.filter(language => language.includes(searchKey))"
      >
      <ul v-for="(ite, index) in resultLanguages" :key="index">
        {{ite}}
      </ul>
    </div>
    <br/><br/>
    <div id="multipleSelect">
      <div id="left">
        <div v-for="(item, index) in languages2"
         v-show="item.pos == 'left'" @click="item.selected = !item.selected"
         :class ="{selected: item.selected}" :key="index">
          {{item.name}}
        </div>
      </div>
      <div id="actions">
        <button
        @click="languages2.filter(lang => lang.pos == 'left' && lang.selected).forEach(lang => {lang.pos = 'right'; lang.selected = false})"
        >&gt;</button>
        <button
        @click="languages2.filter(lang => lang.pos == 'right' && lang.selected).forEach(lang => {lang.pos = 'left'; lang.selected = false})"
        >&lt;</button>
      </div>
      <div id="right">
        <div v-for="(item, index) in languages2"
         v-show="item.pos == 'right'"
         @click="item.selected = !item.selected"
         :class ="{selected: item.selected}"
          :key="index">
          {{item.name}}
        </div>
      </div>
    </div>
    <br><br>
    <div v-for="(lang, index) in languages2" 
    :key = "index" :class="{selected: lang.selected}"
    @click="chon(lang)"
    >
      {{lang.name}}
      <a href="#" @click.prevent="xoa(index)">Xoa</a>
    </div>
    <br><br>
    <Search />
  </div>
</template>

<script>
import Search from './components/Search.vue'
export default {
  data () {
    return{
      selected: 1,
      languages:[
        'php', 'css', 'php 5', 'php 7', 'java', 'js', 'nodejs', 'flutter', 
        'python', 'pygame'
      ],
      searchKey: '',
      resultLanguages: [],
      languages2:[
        {name: 'php', selected: false, pos: 'right'},
        {name: 'js', selected: false, pos: 'left'},
        {name: 'c++', selected: false, pos: 'left'},
        {name: 'c#', selected: false, pos: 'left'},
        {name: 'java', selected: false, pos: 'left'},
        {name: 'bash', selected: false, pos: 'left'},
        {name: 'react', selected: false, pos: 'left'},
      ],
      selected1: false
    }
  },
  methods: {
    chon: function(lang){
      lang.selected = !lang.selected;
    },
    xoa(index){
      this.languages2.splice(index, 1)
    }
  },
  components:{
    Search
  }
}
</script>

<style>
#app {
  font-family: Avenir;
  color: #2c3e50;
  margin-top: 60px;
}

#multipleSelect{
  display: flex;
}
#left, #right{
  border: 1px solid black;
  width: 200px;
  margin: 5px;
}
.selected{
  background-color: red;
  color: white;
}

</style>
