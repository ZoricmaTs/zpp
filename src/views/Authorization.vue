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
          <span>
            {{
            errArray['email'] ? errArray['email'].toString() : ''
            }}
          </span>
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
          <span>
            {{
            errArray['name'] ? errArray['password'].toString() : ''
            }}
          </span>
        </div>
        <div class="form-modal__link">У Вас нет аккаунта? Зарегистрируйтесь</div>
        <button type="submit" @click="login" class="btn header__btn-large">ВОЙТИ</button>
      </form>
    </div>
  </Modal>
</body>
</template>

<script>
import Modal from '@/views/Modal.vue'
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
            // eslint-disable-next-line prefer-destructuring
            alert(resp.data[0])
            this.errArray = resp.data[0]
          } else {
            //this.$router.push('/login')
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

<style lang="scss"></style>
