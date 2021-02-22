<template>
  <div class="content">
    <h2>Tổng quan</h2>
    <button @click="busClick">Click</button>
  </div>
</template>

<script>
// @ is an alias to /src
import EventBus from "@/EventBus.js";

export default {
  name: "Home",
  components: {},
  methods: {
    busClick() {
      EventBus.$emit("hello", "i hear you");
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  top: 49px;
  left: 221px;
  width: calc(100% - 221px);
  height: calc(100vh - 61px);
}
</style>
