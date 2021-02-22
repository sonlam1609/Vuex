<template>
  <div>
    <h2>Danh sách lớp học</h2>
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" name="checkAll" />
          </th>
          <th>Code</th>
          <th>Tên lóp</th>
          <th>Vị trí</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cla, index) in classes" :key="index">
          <td><input type="checkbox" name="name1" v-model="cla.checked" /></td>
          <td>{{ cla.code }}</td>
          <td>{{ cla.class }}</td>
          <td>{{ cla.location }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Classes",
  props: {},
  data() {
    return {
      classes: [
        {
          code: "C001",
          class: "Web12",
          location: "A8-404",
          checked: false,
        },
        {
          code: "C002",
          class: "Web01",
          location: "A8-405",
          checked: false,
        },{
          code: "C003",
          class: "Web02",
          location: "A8-404",
          checked: false,
        },{
          code: "C004",
          class: "Web10",
          location: "A8-404",
          checked: false,
        },{
          code: "C005",
          class: "Web11",
          location: "A8-405",
          checked: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
/**.Table */
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}
th {
  border-bottom: 1px solid black;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr:hover {
  background-color: #302a2a;
  color: white;
}
</style>