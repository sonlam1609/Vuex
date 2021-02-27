<template>
  <div class="bs-button">
    <button @click="buttonClick">
      <slot name="icon" class="icon"></slot>
      <slot name="student" v-bind:student="student">{{ student.name }}</slot>
    </button>
  </div>
</template> 
  
<script>
export default {
  data() {
    return {
      student: {
        name: "Lam Son",
        age: 21,
      },
    };
  },
  methods: {
    buttonClick() {
      this.$emit("button-Click", "something in base");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: #4caf50;
  height: 40px;
  width: 90px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}
button:hover {
  background-color: #115a14;
}
</style>