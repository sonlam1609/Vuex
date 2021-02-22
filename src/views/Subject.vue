<template>
  <div class="content">
    <h2>Danh sách môn học</h2>
    <button @click="handler">EventBus</button>
  </div>
</template>

<script>
import EventBus from "@/EventBus.js";
export default {
  created() {
    // Listening the event hello
    EventBus.$on("hello", this.handler);
  },
  destroyed() {
    // Stop listening the event hello with handler
    EventBus.$off("hello", this.handler);
  },
  methods: {
    handler(text) {
      console.log("recieved: ", text);
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