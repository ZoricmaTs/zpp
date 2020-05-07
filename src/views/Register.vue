<template>
<body class>
  <Modal :showCloseCross="true" :showActionButton="false" :showCloseButton="false" @close="onClose">
    <span slot="header" class="form-modal__heading">Регистрация</span>
    <span slot="actionButtonText">---ЗАРЕГИСТРИРОВАТЬСЯ</span>
    <span slot="closeButtonText">---Меня не видно</span>
    <div class slot="body">
      <form class @submit.prevent="register">
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
        <div class="form-block">
          <label for="password_confirmation" class="form-modal__label">Повторите пароль:</label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password"
            class="form-modal__input"
            v-model="password_confirmation"
          />
          <span>
            {{
            errArray['password_confirmation']
            ? errArray['password_confirmation'].toString()
            : ''
            }}
          </span>
        </div>
        <div class="radio-buttons">
          <div class="radio-buttons-role">
            <input
              class="radio-buttons-role__input"
              type="radio"
              id="user"
              name="role"
              value="user"
              v-model="role"
              checked
            />
            <label for="user" class="radio-buttons-role__label">Хочу тренироваться</label>
          </div>
          <div class="radio-buttons-role">
            <input
              class="radio-buttons-role__input"
              type="radio"
              id="trainer"
              name="role"
              value="trainer"
              v-model="role"
            />
            <label for="trainer" class="radio-buttons-role__label">Хочу тренировать</label>
          </div>
        </div>
        <label class="check option-check">
          <input class="check__input" type="checkbox" />
          <span class="check__box"></span>
          <div class="check__text">
            <span class>Согласен с политикой конфиденциальности</span>
          </div>
        </label>
        <button
          type="submit"
          @click="register"
          class="btn ml-5 header__btn-large mt-3 pt-2 pb-2"
        >ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </form>
    </div>
  </Modal>
</body>
</template>

<script>
import Modal from '@/views/Modal.vue'
export default {
  name: 'register',
  components: {
    Modal
  },
  data() {
    return {
      email: '',
      password: '',
      password_confirmation: '',
      role: '',
      errArray: {}
    }
  },

  methods: {
    register() {
      const data = {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        role: this.role //
      }

      this.$store
        .dispatch('register', data)
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

<style lang="scss">
.radio-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
}

.radio-buttons-role {
}
.radio-buttons-role__label {
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
  padding-left: 20px;
  cursor: pointer;
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
  border-radius: 100%;
}
.radio-buttons-role__input:not(:checked) + .radio-buttons-role__label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 14px;
  height: 14px;
  border: 1px solid #e0e0e0;
  background: #fff;
  box-sizing: border-box;
  border-radius: 100%;
}
.radio-buttons-role__input:checked + .radio-buttons-role__label:after {
  position: absolute;
  top: 3px;
  left: 3px;
  content: '';
  width: 8px;
  height: 8px;
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
//--------------------------------------
.check {
  padding-left: 20px;
  &__input {
    position: absolute;
    width: 1px; /*firefox*/
    height: 1px; /*firefox*/
    overflow: hidden; /*firefox*/
    clip: rect(0 0 0 0); /*firefox*/
  }

  &__box {
    position: absolute;
    margin-top: 0px;
    margin-left: -20px;
    width: 13px;
    height: 13px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
  }

  &__text {
    display: flex;
    flex-direction: column;
    margin-left: 2px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.05em;
    color: #333333;
  }

  &__input:checked + &__box {
    fill: white;
    background: url('../assets/img/checked.svg') center no-repeat;
  }
}
.header__btn-large {
  max-width: 333px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.1em;
  width: 100%;
  padding: 10px 0;
  color: white !important;
  background: #cbf74f;
  border: #cbf74f solid 3px;
  box-sizing: border-box;
  border-radius: 30px;

  &:focus {
    background: #cbff35;
    border: #cbff35 solid 3px;
  }
  &:hover {
    background: #bbf417;
    border: #bbf417 solid 3px;
  }
}
.form-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__heading {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #333333;
  }
  &__label {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #333333;
  }
  &__input {
    font-family: 'Montserrat-Italic';
    font-size: 11px;
    color: #828282;
    letter-spacing: 0.05em;
    padding: 10px;
    margin-bottom: 30px;
    outline: none;
    background: #ffffff;
    border: 1px solid #cbf74f;
    box-sizing: border-box;
    border-radius: 18px;
    &:hover {
      outline: none;
      border: 1px solid #8fff00;
      box-sizing: border-box;
    }
    &:focus {
      outline: none;
      border: 1px solid #30b700;
      box-sizing: border-box;
    }
  }
}
</style>
