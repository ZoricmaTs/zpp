<template>
  <div class="reviews">
    <VueSlickCarousel
      v-bind="settings"
      class="mt-5 mb-5"
      v-if="allReviews.length"
    >
      <div class="main__review" v-for="item in allReviews" :key="item.id">
        <img
          src="@/assets/img/stub.png"
          alt="photo"
          class="card-img-top img-fluid mt-3 mx-auto d-block"
        />
        <div class="card-body">
          <p class="card-title">Имя, возраст, участница</p>
          <p class="card-text">
            {{ item.comment }}
          </p>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import { mapGetters } from 'vuex'

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 1,
        centerMode: true
      }
    }
  },
  methods: {},
  created() {
    this.$store.dispatch('getReviews')
  },
  computed: { ...mapGetters(['allReviews']) }
}
</script>

<style lang="scss"></style>
