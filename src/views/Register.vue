<template>
  <body class="body-login">
    <div class="container container_p">
      <form class="login m-auto" @submit.prevent="register">
        <div
          class="login-wrap d-flex justify-content-center align-items-center flex-column form-group"
        >
          <h1 class>Регистрация</h1>
          <label for="email">Введите email:</label>
          <input
            type="email"
            name="email"
            placeholder="email:"
            class="form-control form-input login-input mt-3 p-3"
            v-model="email"
          />
          <span>
            {{ errArray['email'] ? errArray['email'].toString() : '' }}
          </span>
          <label for="password">Введите пароль:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            class="form-control form-input email-input mt-3 p-3"
            v-model="password"
          />
          <span>
            {{ errArray['name'] ? errArray['password'].toString() : '' }}
          </span>
          <label for="password_confirmation">Повторите пароль:</label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password"
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
          <div class="radio-buttons">
            <div class="radio-buttons-role">
              <input
                class="radio-buttons-role__input"
                type="radio"
                id="user"
                name="role"
                value="user"
                checked
              />
              <label for="user" class="radio-buttons-role__label"
                >Хочу тренироваться</label
              >
            </div>
            <div class="radio-buttons-role">
              <input
                class="radio-buttons-role__input"
                type="radio"
                id="trainer"
                name="role"
                value="trainer"
              />
              <label for="trainer" class="radio-buttons-role__label"
                >Хочу тренировать</label
              >
            </div>
          </div>
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

<style lang="scss">
.radio-buttons {
  display: flex;
  flex-direction: row;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  letter-spacing: 0.05em;
}

.radio-buttons-role {
  margin-bottom: 36px;
}
.radio-buttons-role__label {
  margin-right: 20px;
}
.radio-buttons-role__input:checked,
.radio-buttons-role__input:not(:checked) {
  position: absolute;
  left: -9999px;
}
.radio-buttons-role__input:checked + .radio-buttons-role__label,
.radio-buttons-role__input:not(:checked) + .radio-buttons-role__label {
  position: relative;
  display: inline-block;
  padding-left: 30px;
  cursor: pointer;
  line-height: 20px;
}
.radio-buttons-role__input:checked + .radio-buttons-role__label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 14px;
  height: 14px;
  border: 1px solid #e0e0e0;
  color: #cbf74f;
  background: #fff;
  box-sizing: border-box;
  border-radius: 10px;
}
.radio-buttons-role__input:not(:checked) + .radio-buttons-role__label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 14px;
  height: 14px;
  border: 1px solid #e0e0e0;
  color: red;
  background: #fff;
  box-sizing: border-box;
  border-radius: 100%;
}
.radio-buttons-role__input:checked + .radio-buttons-role__label:after {
  position: absolute;
  top: 2px;
  left: 2px;
  content: '';
  width: 10px;
  height: 10px;
  background-color: #cbf74f;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.radio-buttons-role__input:not(:checked) + .radio-buttons-role__label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
  color: #cbf74f;
}
.radio-buttons-role__input:checked + .radio-buttons-role__label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>
