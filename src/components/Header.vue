<template>
  <div class="header">
    <div class="m-header">
      <div class="m-header-left">
        <select class="m-select">
          <option>Water 7</option>
          <option>Thriller Bark</option>
          <option>Cối xay gió</option>
        </select>
      </div>
      <div class="right">
        <div class="m-header-right">
          <div class="notify margin-right-16"></div>
          <div class="avatar-admin margin-right-16"></div>
          <div class="margin-right-16"><span>Trần Đức Bo</span></div>
          <div class="option margin-right-16"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  float: left;
  width: calc(100% - 221px);
  height: 48px;
  border-bottom: 1px solid #e5e5e5;
}
.m-header {
  margin: 0 16px;
  height: 48px;
  display: flex;
  align-items: center;
}
/*Header Left*/
.m-header .m-header-left select {
  padding: 0;
  width: 200px;
  border: none;
  font-size: 15px;
}
.m-header .m-header-left option {
}
/*Header Right*/
.m-header .right {
  position: absolute;
  right: 0;
}
.m-header-right {
  display: flex;
  align-items: center;
}
.m-header-right .notify {
  background-image: url("/content/icon/notify.png");
  width: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  height: 24px;
  cursor: pointer;
}
.m-header-right .avatar-admin {
  background-image: url("/content/icon/avatar-default.png");
  width: 34px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 34px;
  height: 34px;
  cursor: pointer;
}
.m-header-right .option {
  background-image: url("/content/icon/option.png");
  width: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px;
  height: 24px;
  cursor: pointer;
}
.margin-right-16 {
  margin-right: 16px;
}
</style>