<template>
  <div>
    <div class="overview">
      <div class="overview-item">
        <transition name="slide-fade">
          <div :key="spentOnItems" class="overview-item-value">
            {{ spentOnItems }}
          </div>
        </transition>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 5" width="45" height="5" fill="#fbab53">
          <path id="Indicator" class="shp0" d="M0,4h44v-4h-44z" />
        </svg>
        <div class="overview-item-name">
          spent on items
        </div>
      </div>
      <div class="overview-item">
        <transition name="slide-fade">
          <div :key="items.length" class="overview-item-value">
            {{ items.length }}
          </div>
        </transition>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 5" width="45" height="5" fill="#8c88ff">
          <path id="Indicator" class="shp0" d="M0,4h44v-4h-44z" />
        </svg>
        <div class="overview-item-name">
          purchased products
        </div>
      </div>
    </div>
    <ul class="list">
      <transition-group name="list">
        <li
            v-for="(item, index) in items"
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
import moment from 'moment'

export default {
  data () {
    return {
      items: [],
      spentOnItems: 0
    }
  },
  methods: {
    getItemList () {
      this.items = []
      this.spentOnItems = 0
      this.$store.state.stock.forEach(el => {
        if (moment(this.$store.state.selectedDate).format('DD.MM.YYYY') === moment(el.purchaseDate).format('DD.MM.YYYY')) {
          this.items.push(el)
          this.spentOnItems += Number(el.price)
        }
      })
    }
  },
  mounted () {
    this.$store.dispatch('totalInStock')
    this.getItemList()
  },
  watch: {
    '$store.state.selectedDate': function (val1, val2) {
      this.getItemList()
    }
  }
}
</script>

<style lang="scss">
@import '../styles/main';
.overview {
  display: flex;
  justify-content: center;
  .overview-item {
    padding: 40px 20px;
    text-align: center;
    user-select: none;
    .overview-item-value {
      font-size: 22px;
      line-height: 26px;
    }
    .overview-item-name {
      text-transform: uppercase;
      color: #1d1d26;
      line-height: 35px;
      font-size: 12px;
      font-weight: 300;
    }
  }
}
.slide-fade-enter-active {
  transition: all 2s ease;
}
.slide-fade-leave-active {
  position: absolute;
  opacity: 0;
  // transition: opacity .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transition: opacity .5s;
  opacity: 0;
}
</style>
