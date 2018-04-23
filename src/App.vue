<template>
  <div id="q-app">
    <app-header></app-header>
    <router-view />
  </div>
</template>

<script>
import AppHeader from 'components/AppHeader'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
@import './styles/main';
</style>
