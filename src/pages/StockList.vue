<template>
  <div>
    <ul class="list">
      <transition-group appear name="list">
        <li v-for="(item, index) in items"
            :key="index">
          <a>{{ item.name }}</a>
          <span class="price">
            {{ item.price }} $
          </span>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    items () {
      return this.$store.state.stock
    }
  },
  mounted () {
    this.$store.dispatch('totalInStock')
  }
}
</script>
