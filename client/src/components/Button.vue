<template>
  <button @click="onClick()" class="btn">
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    },
  },
}
</script>

<style>

</style>