<template>
  <div id="wrapper">
    <div class="columns is-desktop is-vcentered">
      <div class="column is-3 is-offset-6 text-is-centered">
        <IntroTyper class="typer"/>
      </div>
    </div>
  </div>
</template>

<script>
import IntroTyper from './IntroTyper/Introtyper'
export default{
  components: {
    IntroTyper
  }
}
</script>

<style>
.columns.is-vcentered {
  padding-top: 20%;
}
</style>
