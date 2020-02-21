<template>
<div class="columns">
          <div class="column is-10 is-offset-1">
              <div class="card" id="song">
    <img class="play" src="@/assets/play_button.png" alt width="40px" @click="playSong()" />
    <p>{{title}}</p>
    <audio controls autoplay v-if="this.play">
      <source v-bind:src="song" type="audio/mpeg" />
    </audio>
  </div>
          </div>
      </div>
</template>
<script>
export default {
  props: ["title", "song"],
  data() {
    return {
      play: false
    };
  },
  methods: {
    playSong() {
      this.play = true;
    }
  }
};
</script>
<style scoped>
#song{
    background: #6b1de9;
    color: white;
}
.play{
    margin-top: 10px;
}
.play:hover {
  cursor: pointer;
}
.card{
    box-shadow: 1px 3px 3px #7ee4d3;
    border: 1 solid blue;
    border-radius: .6em;
}
</style>