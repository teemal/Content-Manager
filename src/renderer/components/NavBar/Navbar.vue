<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="src/renderer/assets/logo.png" height="60" @click="$router.push('/')"/>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">Credentials</a>
        <a class="navbar-item" @click="$router.push('/catalog')">Catalog</a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    methods: {
    }
};
</script>

<style scoped>
</style>