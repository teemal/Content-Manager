<template>
  <div class="card" id="album">
    <header class="card-header">
      <p class="card-header-title">{{name}}</p>
    </header>
    <div class="card-content">
      <div class="content" v-for="(elm, idx) in song" v-bind:key="idx">
          <Song :title="idx" :song="elm"/>
      </div>
    </div>
  </div>
</template>
<script>
import Song from './Song'
export default {
  props: ["name", "song"],
  components: {
      Song
  }
};
</script>
<style scoped>
#album{
    background: #1de9b6;
}
</style>