<template>
  <div id="wrapper">
    <div class="columns is-desktop is-vcentered">
      <div class="column is-4 is-offset-4 text-is-centered">
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
  },
  data(){
    return{
      artists: []
    }
  },
  mounted(){
    this.$electron.ipcRenderer.on('sendArtists', (event, artists) => {
      this.artists = artists;
      // alert(this.artists);
      this.$store.dispatch('setArtists', artists)
    })
  }
}
</script>

<style>
.columns.is-vcentered {
  padding-top: 20%;
}
</style>
