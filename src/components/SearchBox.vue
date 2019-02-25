<template lang="pug">
  .search-box
    input(placeholder="Search movie by name" class="search-box-input" :value="value" @input="onValueChange")  
</template> 

<script>
export default {
	name: 'search-box',
  props: {
    value: String
  },
  methods: {
    onValueChange(event) {
      this.$emit('input', event.target.value)
    }
  }
}


</script>

<style lang="scss">
@import "../styles/base";
.search-box {
  input {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    text-align: center;
    background: rgba(255, 255, 255, .9);
    border: none;
    border-radius: 10px;
    color: #000;
    font-family: $font-default;
  }
}
</style>