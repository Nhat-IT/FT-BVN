<template>
  <div id="app">
    Giá từ <input type="text" v-model="filters.giaThapNhat" /> Đến
    <input type="text" v-model="filters.giaCaoNhat" />
    <br />
    Khối lượng
    <select v-model="filters.khoiluong">
      <option value="10kg">10kg</option>
      <option value="25kg">25kg</option>
    </select>
    <br /><br />
    <div v-for="(data, index) in hasFilter" :key="index">
      {{ data.name }}
    </div>
    <br><br>
    <input type="text" ref="inputName" v-model="name">
    <div>{{name}}</div>
    <button @click="setFocus()">Click</button>
    <br><br>
    <Search @searchaa ="searching"/>
    <List />
    <br><br>
    <Dropdown @select="receiveEmit()"/>
    <br><br>
    <Modal :title="'Day la modal'">
      <div>hello slot</div>
    </Modal>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Dropdown from './components/Dropdown.vue'
import List from './components/List.vue'
import Modal from './components/Modal.vue'
export default {
  data() {
    return {
      hasFilter: [],
      products: [
        { name: "10Vang", Gia: "125000", KhoiLuong: "10kg" },
        { name: "10MTHtrang", Gia: "135000", KhoiLuong: "10kg" },
        { name: "10MTHdo", Gia: "150000", KhoiLuong: "10kg" },
        { name: "25Vang", Gia: "410000", KhoiLuong: "25kg" },
        { name: "25MTHdo", Gia: "460000", KhoiLuong: "25kg" },
      ],
      filters: {
        giaThapNhat: 0,
        giaCaoNhat: 0,
        khoiluong: "10kg",
      },
      name: 'nhat'
    };
  },
  methods: {
    setFocus() {
      this.$refs.inputName.focus();
      console.log(this.$refs.inputName)
    },
    searching(){
      console.log("Searching");
    },
    receiveEmit(){
      console.log("id")
    }
  },
  watch: {
    filters: { 
      deep: true,
      handler() {
        console.log("change");
        this.hasFilter = this.products.filter((data) => {
          return (
            this.filters.khoiluong == data.KhoiLuong &&
            this.filters.giaThapNhat <= data.Gia &&
            this.filters.giaCaoNhat >= data.Gia
          );
        });
      },
    },
  },
  components: {
    Search,
    Dropdown, 
    List, 
    Modal
  }
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
