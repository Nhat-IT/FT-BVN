<template>
  <div id="formThemMoi" v-if="clicked">
    <h3>Thêm Sinh Viên Mới</h3>
    <div>
      <div class="item">
        <p>MSSV</p>
        <input type="text" v-model="mssv" />
      </div>
      <div class="item">
        <p>Tên SV</p>
        <input type="text" v-model="tensv" />
      </div>

      <div class="item">
        <p>Giới Tính</p>
        <input type="text" v-model="gioitinh" />
      </div>

      <div class="item">
        <p>Sở Thích</p>
        <input type="text" v-model="sothich" />
      </div>

      <div id="thaotac">
        <button id="thaotac1">Hủy Bỏ</button>
        <button id="thaotac2" @click="themSV">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["danhsachSV", "clicked"],
  data() {
    return {
      mssv: "",
      tensv: "",
      gioitinh: "",
      sothich: "",
    };
  },
  methods: {
    themSV() {
      this.danhsachSV.push({
        mssv: this.mssv,
        Ten: this.tensv,
        gioitinh: this.gioitinh,
        sothich: this.sothich,
        checked: false,
      });
      this.mssv = this.tensv = this.gioitinh = this.sothich = "";
    },
  },
};
</script>

<style scoped>
#formThemMoi {
  width: 470px;
  height: 430px;
  border: 1px solid black;
  background-color: rgb(241, 226, 226);
}
h3 {
  text-align: center;
}
.item {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 358px;
}
.item input {
  width: 350px;
  line-height: 25px;
}
#thaotac {
  display: block;
  justify-content: space-evenly;
  width: 200px;
  margin-top: 15px;
  margin-right: auto;
  margin-left: auto;
}
#thaotac1
{
    margin-right: 30px;
}
#thaotac2
{
    margin-left: 30px;
}
#thaotac button {
    width: 70px;
    height: 30px
}
</style>