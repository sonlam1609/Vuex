<template>
  <div></div>
</template>

<script>
export default {
  name: "Teachers",
  props: {},
  data() {
    return {
      teachers: [
        {
          teacherCode: "T001",
          name: "Nguyễn Lam Sơn",
          email: "nguyenlamson1609@gmail.com",
          phonenumber: "0987330448",
          gender: 1,
          address: "Hà Nội",
          class: "Web12",
          checked: false,
        },
        {
          teacherCode: "T002",
          name: "Nguyễn Thanh Trà",
          email: "nguyenthanhtra@gmail.com",
          phonenumber: "0987330448",
          gender: 0,
          address: "Cần Thơ",
          class: "Web01",
          checked: false,
        },
        {
          teacherCode: "T003",
          name: "Nguyễn Minh Nguyệt",
          email: "nguyenminhnguyet@gmail.com",
          phonenumber: "0987330448",
          gender: 0,
          address: "Hải Phòng",
          class: "Web02",
          checked: false,
        },
        {
          teacherCode: "T004",
          name: "Nguyễn Hà THu",
          email: "nguyenhathu@gmail.com",
          phonenumber: "0987330448",
          gender: 0,
          address: "Hà Nội",
          class: "Web02",
          checked: false,
        },
        {
          teacherCode: "T005",
          name: "Bùi Công Minh",
          email: "buicongminh@gmail.com",
          phonenumber: "0987330448",
          gender: 1,
          address: "Hải Phòng",
          class: "Web01",
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