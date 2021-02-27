<template>
  <div class="content">
    <h2>Tổng quan</h2>
    <BaseButton @button-Click="homeClick">
      <i slot="icon" class="fa fa-home icon"></i>
      <template v-slot:student="{ student }" @click="baseBtnClick">{{
        student.name
      }}</template>
    </BaseButton>
    <BaseInput placeholder="Your Name" v-model="name" label="Họ và tên">
      <i slot="icon" class="fa fa-home icon"></i>
    </BaseInput>
    <p>{{ name }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import EventBus from "@/EventBus.js";
import BaseButton from "@/control/BaseButton.vue";
import BaseInput from "@/control/BaseInput.vue";

export default {
  name: "Home",
  components: { BaseButton, BaseInput },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    busClick() {
      EventBus.$emit("hello", "i hear you");
    },
    baseBtnClick() {
      console.log("base button click");
    },
    homeClick(value) {
      console.log(value);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.icon {
  padding-right: 5px;
}
.content {
  position: absolute;
  top: 49px;
  left: 221px;
  width: calc(100% - 221px);
  height: calc(100vh - 61px);
}
</style>
