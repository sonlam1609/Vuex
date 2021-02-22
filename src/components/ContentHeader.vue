<template>
  <div class="header-content">
    <div class="title">{{ msg }}</div>
    <div class="content-fearture">
      <input type="button" value="Thêm" @click="openForm" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  methods: {
    openForm: function () {
      this.$emit("clickedOpenForm");
    },
  },
};
</script>

<style lang="scss" scoped>
.header-content {
  padding: 16px;
  display: flex;
  align-items: center;
}

.header-content .title {
  font-weight: bold;
  font-size: 20px;
}

.header-content .content-fearture {
  position: absolute;
  right: 16px;
}
input[type="button"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
</style>