<template>
  <body class="body-login">
    <div class="container container_p">
      <form class="login m-auto" @submit.prevent="register">
        <div
          class="login-wrap d-flex justify-content-center align-items-center flex-column form-group"
        >
          <h1 class>Регистрация</h1>
          <div class="login-line mb-3"></div>
          <input
            type="email"
            placeholder="email"
            class="form-control form-input login-input mt-3 p-3"
            v-model="email"
          />
          <span>
            {{ errArray['email'] ? errArray['email'].toString() : '' }}
          </span>
          <input
            type="password"
            placeholder="Введите пароль"
            class="form-control form-input email-input mt-3 p-3"
            v-model="password"
          />
          <span>
            {{ errArray['name'] ? errArray['password'].toString() : '' }}
          </span>
          <input
            type="password"
            placeholder="Повторите пароль"
            class="form-control form-input email-input mt-3 mb-5 p-3"
            v-model="password_confirmation"
          />
          <span>
            {{
              errArray['password_confirmation']
                ? errArray['password_confirmation'].toString()
                : ''
            }}
          </span>
          <span class="mb-2">
            Уже есть аккаунт?
            <router-link to="/login">Войти</router-link>
          </span>
          <button type="submit" class="btn btn-success mb-5">
            ЗАРЕГИСТРИРОВАТЬСЯ
          </button>
        </div>
      </form>
    </div>
  </body>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      email: '',
      password: '',
      password_confirmation: '',
      errArray: {}
    }
  },
  methods: {
    register() {
      const data = {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        role: 'trainer'
      }
      this.$store
        .dispatch('register', data)
        .then(resp => {
          if (resp.data[0]) {
            // eslint-disable-next-line prefer-destructuring
            this.errArray = resp.data[0]
          } else this.$router.push('/login')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.container_p {
  padding-top: 5%;
}
</style>
