<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-heading">
            <slot name="header"></slot>
            <a href="#" class="modal-close" v-show="showCloseCross" @click.prevent="close">
              <img
                src="../assets/img/close-modal.svg"
                width="10"
                heigth="10"
                alt="closed registation form"
              />
            </a>
          </div>

          <div class>
            <slot name="body"></slot>
          </div>

          <div class="modal-fo">
            <slot name="footer">
              <button
                v-show="showActionButton"
                :disabled="disabledActionButton"
                class="btn-default btn-action"
                @click="action"
              >
                <slot name="actionButtonText">Confirm</slot>
              </button>
              <button v-show="showCloseButton" class="btn-default btn-close" @click="close">
                <slot name="closeButtonText">Close</slot>
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: '',
  props: {
    showActionButton: { type: Boolean },
    showCloseButton: { type: Boolean },
    showCloseCross: { type: Boolean },
    disabledActionButton: { type: Boolean }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    action() {
      this.$emit('action')
    }
  }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 408px;
  margin: 0px auto;
  padding: 30px 40px 40px 40px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;

  //   @include media('<phone') {
  //     width: auto;
  //     margin: 0 20px;
  //   }
}
.modal-heading {
  text-align: center;
  margin-bottom: 35px;
}
.modal-close {
  margin: -20px -10px -10px 0px;
  float: right;
}

.modal-header h3 {
}

.modal-body {
  //margin: 20px 0;
}
/*
.modal-footer {
  display: flex;
  justify-content: center;
}*/

/*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn-default {
  font-size: 14px;
  line-height: 27px;
  width: 136px;
  height: 30px;

  transition: all 0.4s ease;
  display: block;
  border: 2px solid #015a7a;
  background: #015a7a;
  color: white;
  border-radius: 3px;
  margin-left: 15px;

  //   @include media('<tablet') {
  //     width: 115px;
  //   }

  .help-active & {
    display: none;
  }

  &:hover {
    background: none;
    color: #015a7a;
  }

  &:disabled {
    opacity: 0.5;
  }
}

.payment-prompt {
  .modal-container {
    width: 1060px;
    background: #f6f9fc !important;

    // @include media('<phone') {
    //   width: auto;
    // }

    iframe {
      width: 100%;
      height: 560px;
      border: 0px none;
      background: #f6f9fc !important;

      html {
        overflow-y: hidden !important;
        background: #f6f9fc !important;

        // @include media('<phone') {
        //   overflow: auto;
        // }
      }
    }
  }
}
</style>
