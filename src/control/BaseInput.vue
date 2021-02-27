<template>
  <div class="baseInput">
    <input
      type="text"
      :value="value"
      @input="$emit('update', $event.target.value)"
    />
    <slot name="icon" class="icon"></slot>
  </div>
</template>

<script>
export default {
  props: ["value"],

  model: {
    prop: "value",
    event: "update",
  },
};
</script>

<style lang="scss" scoped>
label {
  padding-right: 16px;
}
input {
  padding: 10px 30px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #bbbbbb;
  height: 40px;
  box-sizing: border-box;
}
.baseInput {
  display: flex;
  position: relative;
}
.icon {
  position: absolute;
  top: 10px;
  padding-left: 5px;
}
</style>