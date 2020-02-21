<template>
  <div id="wrapper">
    <div class="columns">
      <div class="column is-6 is-offset-6">
        <input type="file" @change="getFiles" webkitdirectory directory multiple />
      </div>
    </div>
    <div class="columns">
      <div class="column is-6 is-offset-6">
        <img id="send-icon" src="@/assets/send.png" @click="uploadDir()" width="60" />
      </div>
    </div>
    <div class="columns">
      <div class="column is-6 is-offset-6">
        <p>content</p>
        <div v-for="(elm, idx) in this.data" v-bind:key="idx">
          <ArtistCard :name="idx" :albs="elm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArtistCard from "./ArtistCard";

export default {
  data() {
    return {
      data: {}
    }
  },
  methods: {
    getFiles(event) {
      console.log(event.target.files);
      this.fileName = event.target.files[0].name;
      this.fileLocation = event.target.files[0].path;
    },
    uploadDir() {
      this.$electron.ipcRenderer.send("uploadDir", [
        this.fileLocation,
        this.fileName
      ]);
    }
  },
  components: {
    ArtistCard
  },
  mounted () {
    axios
      .get('http://ec2-54-165-246-254.compute-1.amazonaws.com:3000/entities')
      .then((response) => {
        this.data = response.data
      })
  }
};
</script>

<style>
.cards {
  margin-top: 20px;
}
#send-icon:hover {
  cursor: pointer;
}
</style>