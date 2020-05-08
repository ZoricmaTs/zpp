<template>
  <div class="Reviews"></div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted() {
    this.$store.dispatch('getReviews')
  },
  computed: { ...mapGetters['allReviews'] }
}
</script>

<style lang="scss"></style>
