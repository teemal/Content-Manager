<template>
  <div id="app">
    <NavBar />
    <router-view class="dark"></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar/Navbar'
  export default {
    name: 'content-manager',
    components: {
      NavBar,
    }
  }
</script>

<style>
  /* CSS */
  .app{
    background-color: #00D1B2;
    height: 96vh;
  }
  .dark{
    background-color: #00D1B2;
    color: white;
    height: 96vh;
  }
</style>
