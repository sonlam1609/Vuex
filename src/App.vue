<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="index">
      <Sidebar />
      <Header />
      <Content />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Content from "./components/Content.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Content,
  },
};
</script>

<style lang="scss">
input,
select {
  padding: 10px 16px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #bbbbbb;
  // width: 100%;
  height: 40px;
  box-sizing: border-box;
}

input[type="radio"] {
  height: 20px;
  width: 20px;
}

input:focus,
select:focus {
  border-color: #019160;
}

.input-search {
  padding-left: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.index {
  display: flex;
}
</style>
