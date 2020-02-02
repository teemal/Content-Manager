<template>
  <div id="wrapper">
    <div class="columns" v-for="(artist, key) in getArtists" v-bind:key="key">
      <div class="column is-4 is-offset-4">
        <Cards class="cards" :artists="getArtists"/>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "./Cards";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
    };
  },
  methods: {
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