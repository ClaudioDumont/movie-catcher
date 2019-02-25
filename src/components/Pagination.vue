<template lang="pug">
  .pagination-wrapper
    ul 
      li.first-page First Page
      li.pagition-item(v-for="page in step" @click="onPageClick(getComputedPage(page))") {{getComputedPage(page)}}
      li.last-page Last Page
</template>

<script>
export default {
	name: 'pagination',
  props: {
    offset: Number,
    step: {
      type: Number,
      default: 5
    }
  },
  methods: {
    onPageClick(page) {
      this.$emit('page-changed', page)
    },
    getComputedPage(page){
      return this.offset + page
    }
  }
}
</script>

<style lang="scss">
@import "../styles/base";
.pagination-wrapper {
  margin: 50px 0 20px;
   
  ul {
    display: flex;
    justify-content: center;
    align-items: center;  
    
    li {
      display: block;
      padding: 10px 15px;
      background: rgba(255,255,255, 0.9);
      border-radius: 4px;
      margin: 0 10px;
      cursor: pointer;
      font-family: $font-alternative;
      font-weight: 700;
      @include transition (all 100ms);
      
      &:hover {
        background: #12A2F2;
        color: #fff;
      }

      @include breakpoint(mobileonly) {
        &.first-page,
        &.last-page {
          display: none;
        }
      }
    }
  }
}
</style>