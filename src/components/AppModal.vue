<template>
  <div>
    <!-- create new modal body -->
    <div class="modal-content-fix" v-if="!data.item && !data.edit">
      <div class="modal-body-fix wrapper">
        <h5 class="modal-title">Add new item</h5>
        <svg class="close" @click="$emit('close')" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 224.512 224.512" style="enable-background:new 0 0 224.512 224.512;" xml:space="preserve" width="25px" height="25px" fill="#fff">
          <polygon points="224.507,6.997 217.521,0 112.256,105.258 6.998,0 0.005,6.997 105.263,112.254    0.005,217.512 6.998,224.512 112.256,119.24 217.521,224.512 224.507,217.512 119.249,112.254  "/>
        </svg>
        <form style="width:100%" v-on:submit.prevent="addItem('addScope')" data-vv-scope="addScope">
          <div class="form-group">
            <p :class="{ 'control': true }">
              <input ref="input" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('addScope.name') }" name="name" v-model="name" type="text" placeholder="Name">
              <span v-show="errors.has('addScope.name')" class="help is-danger">{{ errors.first('addScope.name') }}</span>
            </p>
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 406.834 406.834" style="enable-background:new 0 0 406.834 406.834;" xml:space="preserve" width="25px" height="25px" fill="#ffffff">
                <polygon points="385.621,62.507 146.225,301.901 21.213,176.891 0,198.104 146.225,344.327 406.834,83.72 "/>
            </svg>
          </button>
        </form>
      </div>
    </div>
    <!-- edit item modal body -->
    <div class="modal-content-fix" v-if="data.item && data.edit">
      <div class="modal-body-fix wrapper">
        <h5 class="modal-title">Edit item</h5>
        <svg class="close" @click="$emit('close')" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 224.512 224.512" style="enable-background:new 0 0 224.512 224.512;" xml:space="preserve" width="25px" height="25px" fill="#ffffff">
          <polygon points="224.507,6.997 217.521,0 112.256,105.258 6.998,0 0.005,6.997 105.263,112.254    0.005,217.512 6.998,224.512 112.256,119.24 217.521,224.512 224.507,217.512 119.249,112.254  "/>
        </svg>
        <form style="width:100%" v-on:submit.prevent="editItem('editScope')" data-vv-scope="editScope">
          <div class="form-group">
            <p :class="{ 'control': true }">
              <input ref="input" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('editScope.name') }" name="name" v-model="name" type="text" placeholder="Name">
              <span v-show="errors.has('editScope.name')" class="help is-danger">{{ errors.first('editScope.name') }}</span>
            </p>
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 406.834 406.834" style="enable-background:new 0 0 406.834 406.834;" xml:space="preserve" width="25px" height="25px" fill="#ffffff">
                <polygon points="385.621,62.507 146.225,301.901 21.213,176.891 0,198.104 146.225,344.327 406.834,83.72 "/>
            </svg>
          </button>
        </form>
      </div>
    </div>
    <!-- add to cart modal body -->
    <div class="modal-content-fix" v-if="data.item && !data.edit">
      <div class="modal-body-fix wrapper">
        <h5 class="modal-title">{{ this.data.item.name }}</h5>
        <svg class="close" @click="$emit('close')" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 224.512 224.512" style="enable-background:new 0 0 224.512 224.512;" xml:space="preserve" width="25px" height="25px" fill="#ffffff">
          <polygon points="224.507,6.997 217.521,0 112.256,105.258 6.998,0 0.005,6.997 105.263,112.254    0.005,217.512 6.998,224.512 112.256,119.24 217.521,224.512 224.507,217.512 119.249,112.254  "/>
        </svg>
        <form style="width:100%" v-on:submit.prevent="addToStock('stockScope')" data-vv-scope="stockScope">
          <div class="form-group">
            <p :class="{ 'control': true }">
              <input ref="input" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('stockScope.price') }" name="price" v-model="price" type="number" placeholder="Price">
              <span v-show="errors.has('stockScope.price')" class="help is-danger">{{ errors.first('stockScope.price') }}</span>
            </p>
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 406.834 406.834" style="enable-background:new 0 0 406.834 406.834;" xml:space="preserve" width="25px" height="25px">
                <polygon points="385.621,62.507 146.225,301.901 21.213,176.891 0,198.104 146.225,344.327 406.834,83.72 " fill="#FFFFFF"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
export default {
  name: 'app-modal',
  props: ['data'],
  data () {
    return {
      name: null,
      index: null,
      price: null,
      errorrs: null
    }
  },
  methods: {
    addItem (scope) {
      // validation
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          // add item to store
          this.$store.dispatch('addItem', { name: this.name })
          // reset form
          this.name = null
          // change route
          this.$emit('close')
        }
      })
    },
    editItem (scope) {
      // validation
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          // add item to store
          this.$store.dispatch('editItem', {id: this.data.item.item.id, name: this.name})
          // change route
          this.$emit('close')
          // update view
          this.$emit('update', {id: this.data.item.item.id, name: this.name, index: this.index})
          this.name = null
          this.index = null
        }
      })
    },
    addToStock (scope) {
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          this.data.item.purchaseDate = new Date()
          // set item price
          this.data.item.price = this.price
          // add item to store
          this.$store.dispatch('addTooStock', this.data.item)
          // reset form
          this.price = null
          // remove item from shopping list
          this.$store.dispatch('deleteItem', this.data.item.id)
          // change route
          this.$emit('close')
        }
      })
    }
  },
  mounted () {
    // focus input on modal mounting
    this.$refs.input.focus()
    if (this.data.edit) {
      this.name = this.data.item.item.name
      this.index = this.data.item.index
    }
  }
}
</script>

<style lang="scss">
.modal-content-fix {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #6563a3; /* Old browsers */
    background: -moz-linear-gradient(top,  #6563a3 0%, #000000 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #6563a3 0%,#000000 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #6563a3 0%,#000000 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6563a3', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
    opacity: .9;
  }
  .modal-body-fix {
    position: relative;
    height: 100%;
    form {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    h5 {
      color: #fff;
      font-size: 22px;
      line-height: 68px;
      text-align: center;
    }
    .close {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
      -webkit-tap-highlight-color: transparent;
    }
    .form-group {
      margin-top: auto;
    }
    input {
      margin: 10px auto;
      width: 90%;
      border: none;
      background: transparent;
      display: block;
      border-bottom: 1px solid rgba(255, 255, 255, 0.6);
      color: #fff;
      font-size: 20px;
      font-weight: 300;
      font-family: 'Roboto', sans-serif;
      line-height: 28px;
      outline: none;
    }
    .is-danger {
      color: rgba(255, 51, 102, 0.64);
      margin: 15px auto;
      width: 90%;
      display: block;
    }
    button {
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      padding: 15px;
      margin: 30px auto;
      margin: auto;
      display: block;
      outline: none;
      &:hover {
        // background-color: #fff;
        svg {
          fill: rgb(255, 51, 102);
        }
      }
      svg {
        display: block;
      }
    }
  }
}
</style>
