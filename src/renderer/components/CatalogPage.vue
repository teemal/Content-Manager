<template>
  <div id="wrapper">
      <p>single file</p>
    <div class="columns">
      <div class="column is-6 is-offset-6">
        <input type="file" @change="getFiles" multiple/>
      </div>
    </div>
    <div class="columns">
      <div class="column is-6 is-offset-6">
        <img id="send-icon" src="@/assets/send.png" @click="uploadFiles()" width="60"/>
      </div>
    </div>
    <p>directory</p>
    <div class="columns">
      <div class="column is-6 is-offset-6">
        <input type="file" @change="getFiles" webkitdirectory directory multiple/>
      </div>
    </div>
    <div class="columns">
      <div class="column is-6 is-offset-6">
        <img id="send-icon" src="@/assets/send.png" @click="uploadFiles()" width="60"/>
      </div>
    </div>
    <p>content</p>
    <div class="columns" v-for="(artist, key) in getArtists" v-bind:key="key">
      <div class="column is-4 is-offset-4">
        <Cards class="cards" :artists="getArtists" />
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "./Cards";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
        fileLocation: '',
        fileName: ''
    };
  },
  methods: {
      getFiles(event){
          console.log(event.target.files[0].name);
          this.fileName = event.target.files[0].name
          this.fileLocation = event.target.files[0].path;
      },
    uploadFiles(){
        this.$electron.ipcRenderer.send('sendFiles', [this.fileLocation, this.fileName]);
    }
  },
  components: {
    Cards
  },
  computed: {
    ...mapGetters(["getArtists"])
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