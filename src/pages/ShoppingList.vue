<template>
  <div>
    <span class="add-new" @click="toggleModal('new')">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
        <polygon points="612,286.893 325.116,286.893 325.116,0.296 286.903,0.296 286.903,286.893 0,286.893 0,325.107 286.903,325.107      286.903,611.704 325.116,611.704 325.116,325.107 612,325.107    " fill="#FFFFFF"/>
      </svg>
    </span>
    <items-list v-if="items" :data="items" @add="addToStock" @edit="editItem"></items-list>
    <transition name="fade">
      <app-modal v-if="isModalOpen" @close="toggleModal('new')" @update="updateView" :data="{item: stockItem, edit: isModalEdit}"></app-modal>
    </transition>
  </div>
</template>

<script>
import ItemsList from 'components/ItemsList'
import AppModal from 'components/AppModal'
export default {
  name: 'ShoppingList',
  components: {
    ItemsList,
    AppModal
  },
  data () {
    return {
      items: [],
      isModalOpen: false,
      isModalEdit: false,
      stockItem: null
    }
  },
  methods: {
    toggleModal (modal) {
      if (modal === 'new') {
        this.isModalEdit = false
        this.stockItem = null
        this.isModalOpen = !this.isModalOpen
      } else if (modal === 'add') {
        this.isModalEdit = false
        this.isModalOpen = !this.isModalOpen
      } else if (modal === 'edit') {
        this.isModalEdit = true
        this.isModalOpen = !this.isModalOpen
      }
    },
    addToStock (item) {
      this.stockItem = item
      this.toggleModal('add')
    },
    editItem (item) {
      this.stockItem = item
      this.toggleModal('edit')
    },
    updateView (data) {
      // view should update automatic
      // this is quick bug fix
      // this.items = this.$store.state.items
      this.items.splice(data.index, 1, {id: data.id, name: data.name})
    }
  },
  mounted () {
    this.items = this.$store.state.items
  }
}
</script>

<style lang="scss">
.add-new {
  position: relative;
  // right: 40px;
  // top: 22%;
  float: right;
  margin-right: 40px;
  margin-top: -45px;
  background-color: #FF3366;
  box-sizing: border-box;
  padding: 15px;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  svg {
    display: block;
  }
}
</style>
