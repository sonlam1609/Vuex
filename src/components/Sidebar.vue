<template>
  <div class="navbar">
    <div class="logo-site">
      <div class="toggle-icon"></div>
      <div class="amis-logo">
        <img
          style="width: 100%"
          class="logo"
          alt="Vue logo"
          src="../assets/unnamed.png"
        />
      </div>
    </div>
    <div class="navbar-content">
      <div class="nav-item">
        <div class="nav-item-icon"></div>
        <div class="nav-item-text">
          <router-link to="/">Tổng quan</router-link>
        </div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon"></div>
        <div class="nav-item-text">
          <router-link to="/students">Danh sách học sinh</router-link>
        </div>
      </div>
      <a class="nav-item" href="customer.html">
        <div class="nav-item-icon"></div>
        <div class="nav-item-text">
          <router-link to="/teachers">Danh sách giáo viên</router-link>
        </div>
      </a>
      <div class="nav-item">
        <div class="nav-item-icon"></div>
        <div class="nav-item-text">
          <router-link to="/subject">Danh sách mon hoc</router-link>
        </div>
      </div>
      <a class="nav-item" href="employee.html">
        <div class="nav-item-icon"></div>
        <div class="nav-item-text">
          <router-link to="/user">Tài khoản</router-link>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/**New */
.navbar {
  float: left;
  width: 220px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #e5e5e5;
}

.navbar .logo-site {
  display: flex;
  width: 100%;
  height: 48px;
  background-color: #ffffff;
  position: relative;
}

.navbar .logo-site .toggle-icon {
  position: absolute;
  top: 15px;
  left: 16px;
  width: 20px;
  height: 20px;
  background-image: url("/content/img/toggle.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.navbar .logo-site .amis-logo {
  position: absolute;
  top: 12px;
  left: 50px;
  height: 30px;
  width: 65%;
  background-image: url("/content/img/cukcuk-logo.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.nav-item {
  display: flex;
  height: 44px;
  padding-left: 16px;
  line-height: 44px;
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

.nav-item:hover {
  background-color: #e5e5e5;
  color: #000000;
}

.nav-item .nav-item-icon {
  background-image: url("/content/icon/document-online.png");
  width: 24px;
  height: 24px;
  margin: auto 0;
  background-repeat: no-repeat;
  background-size: contain;
}

.nav-item .nav-item-text {
  margin-left: 12px;
}
</style>