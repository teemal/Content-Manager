<template>
  <div class="card" id="artist">
    <header class="card-header">
      <p class="card-header-title">{{name}}</p>
    </header>
    <div class="card-content">
      <div class="content" v-for="(elm, idx) in albs" v-bind:key="idx">
          <Albums :name="idx" :song="elm"/>
      </div>
    </div>
  </div>
</template>
<script>
import Albums from './AlbumCard'
export default {
  props: ["name", "albs"],
  components: {
      Albums
  },
  data(){
      return{
          elm: elm,
          idx: idx
      }
  }
};
</script>
<style scoped>
#artist{
    background: #1ccf9f;
    margin-top: 30px;
}
</style>