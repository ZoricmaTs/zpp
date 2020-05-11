<template>
  <div class="reviews">
    <VueSlickCarousel v-bind="settings" class="mt-5 mb-5">
      <div class="main__review">
        <img
          src="@/assets/img/stub.png"
          alt="photo"
          class="card-img-top img-fluid mt-3 mx-auto d-block"
        />
        <div class="card-body">
          <p class="card-title">Имя, возраст, участница</p>
          <p class="card-text">
            Либидо имеет деструктивный психологический параллелизм. Эмпирическая
            история искусств трансформирует невротический инвариант. Как было
            показано выше, мера свободна. Канон изящно изящно продолжает гений.
            Художественное опосредование имеет фактографический фабульный
            каркас. Художественная видимость, на первый взгляд, возможна
          </p>
        </div>
      </div>
      <div class="main__review">
        <img
          src="@/assets/img/stub.png"
          alt="photo"
          class="card-img-top img-fluid mt-3 mx-auto d-block"
        />
        <div class="card-body">
          <p class="card-title">Имя, возраст, участница</p>
          <p class="card-text">
            Либидо имеет деструктивный психологический параллелизм. Эмпирическая
            история искусств трансформирует невротический инвариант. Как было
            показано выше, мера свободна. Канон изящно изящно продолжает гений.
            Художественное опосредование имеет фактографический фабульный
            каркас. Художественная видимость, на первый взгляд, возможна
          </p>
        </div>
      </div>
      <div class="main__review">
        <img
          src="@/assets/img/stub.png"
          alt="photo"
          class="card-img-top img-fluid mt-3 mx-auto d-block"
        />
        <div class="card-body">
          <p class="card-title">Имя, возраст, участница</p>
          <p class="card-text">
            Либидо имеет деструктивный психологический параллелизм. Эмпирическая
            история искусств трансформирует невротический инвариант. Как было
            показано выше, мера свободна. Канон изящно изящно продолжает гений.
            Художественное опосредование имеет фактографический фабульный
            каркас. Художественная видимость, на первый взгляд, возможна
          </p>
        </div>
      </div>
            <div class="main__review">
        <img
          src="@/assets/img/stub.png"
          alt="photo"
          class="card-img-top img-fluid mt-3 mx-auto d-block"
        />
        <div class="card-body">
          <p class="card-title">Имя, возраст, участница</p>
          <p class="card-text">
            Либидо имеет деструктивный психологический параллелизм. Эмпирическая
            история искусств трансформирует невротический инвариант. Как было
            показано выше, мера свободна. Канон изящно изящно продолжает гений.
            Художественное опосредование имеет фактографический фабульный
            каркас. Художественная видимость, на первый взгляд, возможна
          </p>
        </div>
      </div>
            <div class="main__review">
        <img
          src="@/assets/img/stub.png"
          alt="photo"
          class="card-img-top img-fluid mt-3 mx-auto d-block"
        />
        <div class="card-body">
          <p class="card-title">Имя, возраст, участница</p>
          <p class="card-text">
            Либидо имеет деструктивный психологический параллелизм. Эмпирическая
            история искусств трансформирует невротический инвариант. Как было
            показано выше, мера свободна. Канон изящно изящно продолжает гений.
            Художественное опосредование имеет фактографический фабульный
            каркас. Художественная видимость, на первый взгляд, возможна
          </p>
        </div>
      </div>
      <template #prevArrow="arrowOption">
        <button class="btn-reset btn-left">
          {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
        </button>
      </template>
      <template #nextArrow="arrowOption">
        <button class="btn-reset btn-rigth">
          {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
        </button>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

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
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5
      }
    }
  }
}
</script>

<style lang="scss"></style>
