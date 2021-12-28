<template>
  <div>
    <table>
      <thead>
        <th>MSSV</th>
        <th>Tên SV</th>
        <th>Giới Tính</th>
        <th>Sở Thích</th>
        <th>Xóa</th>
      </thead>
      <tr v-for="(sv, index) in danhsachSV" :key="index">
        <td>{{ sv.mssv }}</td>
        <td>{{ sv.Ten }}</td>
        <td>{{ sv.gioitinh }}</td>
        <td>{{ sv.sothich }}</td>
        <td
          @click="sv.checked = !sv.checked"
          :class="{ checked: sv.checked }"
        ></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["danhsachSV"],
};
</script>

<style scoped>
table {
  width: 1400px;
  margin: 0px auto;
  border: 1px solid black;
}

th {
  width: 340px;
  border: 1px solid black;
}

th:last-child {
  width: 50px;
}

tr {
  /* display: inline-block; */
  width: 1400px;
  border: 1px solid black;
}

tr:hover {
    background-color: #F2FFF1;
}

td {
  border: 1px solid black;
  width: 340px;
}

td:last-child {
  width: 50px;
}

.checked {
  background-color: red;
}
</style>