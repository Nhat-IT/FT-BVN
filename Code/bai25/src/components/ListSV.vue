<template>
  <div id="listsv">
    <SV :danhsachSV="danhsachSV" />
    <div id="thaotac">
      <button id="addNew" @click="clicked = !clicked">&#43; Thêm Sinh Viên</button>
      <button id="xoaSV" @click="xoasinhvien">	&#215; Xóa Sinh Viên</button>
    </div>
    <themSVMoi :danhsachSV="danhsachSV" :clicked="clicked"/>
  </div>
</template>

<script>
import SV from "./SV.vue";
import themSVMoi from './themSVMoi.vue'
export default {
  data() {
    return {
      clicked: false,
      danhsachSV: [
        {
          mssv: "102190130",
          Ten: "NguyenTanNhat",
          gioitinh: "Nam",
          sothich: "DaBong",
          checked: false,
        },
        {
          mssv: "102190133",
          Ten: "NguyenTanA",
          gioitinh: "Nu",
          sothich: "Da",
          checked: false,
        },
        {
          mssv: "102190135",
          Ten: "NguyenTanB",
          gioitinh: "Nu",
          sothich: "Da",
          checked: false,
        },
        {
          mssv: "102190136",
          Ten: "NguyenTanC",
          gioitinh: "Nu",
          sothich: "Da",
          checked: false,
        },
      ],
    };
  },
  methods: {
    xoasinhvien() {
      this.danhsachSV = this.danhsachSV.filter((sv) => sv.checked == false);
    },
  },
  components: {
    SV,
    themSVMoi
  },
};
</script>

<style scoped>
#thaotac {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
#addNew {
  margin-right: 5px;
}
#xoaSV {
  margin-left: 5px;
}
</style>