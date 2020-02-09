<template>
  <div id="wrapper">
    <div class="columns">
      <div class="column is-6 is-offset-6">
        <input type="file" @change="getFiles" webkitdirectory directory multiple/>
      </div>
    </div>
    <div class="columns">
      <div class="column is-6 is-offset-6">
        <img id="send-icon" src="@/assets/send.png" @click="uploadDir()" width="60"/>
      </div>
    </div>
    <p>content</p>
    <div class="columns" v-for="(value, key) in this.$store.getters.getArtists" v-bind:key="key">
      <div class="column is-4 is-offset-4">
        <Artists />
        {{value}}
      </div>
    </div>
  </div>
</template>

<script>
import Artists from "./Card/Artist";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
        fileLocation: '',
        fileName: '',
        artists: []
    };
  },
  methods: {
      getFiles(event){
          console.log(event.target.files);
          this.fileName = event.target.files[0].name
          this.fileLocation = event.target.files[0].path;
      },
    uploadDir(){
        this.$electron.ipcRenderer.send('uploadDir', [this.fileLocation, this.fileName]);
    }
  },
  components: {
    Artists
  },
  mounted() {
    
  },
  computed: {
    ...mapGetters(["getArtists"]),
  },
  mounted() {
      this.$electron.ipcRenderer.on('success', (event, data) => {
        alert('success!');
        // console.log(data)
    })
  }
};
</script>

<style>
.cards {
  margin-top: 20px;
}
#send-icon:hover{
    cursor: pointer;
}
</style>