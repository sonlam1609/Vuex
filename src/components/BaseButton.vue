<template>
  <div class="bs-button">
    <button>
      <slot name="student" v-bind:student="student">{{ student.name }}</slot>
    </button>
    <p><slot name="hello">Xin chào</slot></p>
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
};
</script>

<style lang="scss" scoped>
button {
  background-color: #4caf50;
  height: 40px;
  width: 55px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}
button:hover {
  background-color: #115a14;
}
</style>