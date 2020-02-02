<template>
  <div id="wrapper">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <Cards class="cards" />
      </div>
    </div>
    <button @click="test()">shit</button>
  </div>
</template>

<script>
import Cards from "./Cards";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
        artists: {}
    };
  },
  methods: {
      test(){
      }
  },
  components: {
    Cards
  },
  computed: {
      ...mapGetters([
          'getArtists',
      ]),
  }
};
</script>

<style>
.cards {
  margin-top: 20px;
}
</style>