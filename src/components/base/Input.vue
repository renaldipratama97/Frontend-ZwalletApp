<template>
    <div>
        <input :type="type" :id="id" :value="value" :placeholder="placeHolder" @input="$emit('input', $event.target.value)">
    </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeHolder: String,
    value: String,
    id: String,
    type: String
  }
}
</script>

<style scoped>
input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 0;
    border-color: rgba(169, 169, 169, 0.6) !important;
    border-style: solid !important;
    border-width: 0 0 1px 0 !important;
    outline: none;
    background: white;
    padding-left: 60px;
}
</style>
