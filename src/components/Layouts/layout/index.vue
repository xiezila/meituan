<template>
  <div class="app-container">
    <Header></Header>
    <div class="app-main">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  export default {
    name: "index",
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped>

</style>
