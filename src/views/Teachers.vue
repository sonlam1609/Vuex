<template>
  <div></div>
</template>

<script>
export default {
  name: "Teachers",
  props: {},
  data() {
    return {};
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