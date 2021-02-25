<template>
  <div class="content">
    <h2>Tổng quan</h2>
    <BaseButton>
      <template v-slot:student="{ student }" @click="baseBtnClick"
        >{{ student.name }} Dz</template
      >
      <template v-slot:hello>kkk</template>
    </BaseButton>
  </div>
</template>

<script>
// @ is an alias to /src
import EventBus from "@/EventBus.js";
import BaseButton from "@/components/BaseButton.vue";
export default {
  name: "Home",
  components: { BaseButton },
  methods: {
    busClick() {
      EventBus.$emit("hello", "i hear you");
    },
    baseBtnClick() {
      console.log("base button click");
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
