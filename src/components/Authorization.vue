<template>
<body class>
  <Modal :showCloseCross="true" :showActionButton="false" :showCloseButton="false" @close="onClose">
    <span slot="header" class="form-modal__heading">ВХОД</span>
    <span slot="actionButtonText">---ЗАРЕГИСТРИРОВАТЬСЯ</span>
    <span slot="closeButtonText">---Меня не видно</span>
    <div class slot="body">
      <form class @submit.prevent="login">
        <div class="form-block">
          <label for="email" class="form-modal__label">Введите email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email:"
            class="form-modal__input"
            v-model="email"
          />
          <div class="form-modal__err">{{ errArray['email'] ? errArray['email'].toString() : '' }}</div>
        </div>
        <div class="form-block">
          <label for="password" class="form-modal__label">Введите пароль:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            class="form-modal__input"
            v-model="password"
          />
          <div
            class="form-modal__err"
          >{{ errArray['password'] ? errArray['password'].toString() : '' }}</div>
        </div>
        <div class="form-modal__link">У Вас нет аккаунта? Зарегистрируйтесь</div>
        <button type="submit" @click="login" class="btn header__btn-large">ВОЙТИ</button>
      </form>
    </div>
  </Modal>
</body>
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
  name: 'authorization',
  components: {
    Modal
  },
  data() {
    return {
      email: '',
      password: '',
      errArray: {}
    }
  },

  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password
      }

      this.$store
        .dispatch('login', data)
        .then(resp => {
          if (resp.data[0]) {
            this.errArray = resp.data['0']
          } else {
            this.$emit('registration')
          }
        })
        .catch(err => console.log(err))
    },
    onClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/registers.scss';
</style>
