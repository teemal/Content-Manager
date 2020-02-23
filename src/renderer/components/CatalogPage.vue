<template>
  <div id="wrapper">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <input type="file" @change="getFiles" webkitdirectory directory multiple />
      </div>
    </div>
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <img id="send-icon" src="@/assets/send.png" @click="uploadDir()" width="60" />
      </div>
    </div>
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <p>content</p>
        <button @click="getGenres">All Genres</button><br>
        <input type="text" name="" id="" v-model="genre">
        <button @click="getArtistsByGenre">Artists by Genre</button><br>
        <input type="text" name="" id="" v-model="artist">
        <button @click="getAlbumsByArtist">Albums by Artist</button><br>
        <input type="text" name="" id="" v-model="album">
        <button @click="getSongByAlbum">Songs by Album</button><br>
        <!-- <div v-for="(elm, idx) in this.data" v-bind:key="idx">
          <ArtistCard :name="idx" :albs="elm" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import ArtistCard from "./ArtistCard";
import axios from 'axios';
export default {
  data() {
    return {
      data: {},
      bois: [],
      genre: '',
      artist: '',
      album: ''
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
    },
    getGenres(){
      axios.get('http://localhost:3000/genres')
      .then((err,res)=>{
        if(err){
          console.log(err)
        }
        else{
          res.forEach(element => {
            console.log(res.data)
          });
        }
      })
    },
    getArtistsByGenre(){
      axios.get('http://localhost:3000/artists/for/genre?genre=' + this.genre)
      .then((err,res)=>{
        if(err){
          console.log(err)
        }
        else{
          res.forEach(element => {
            console.log(res.data)
          });
        }
      })
    },
    getAlbumsByArtist(){
      axios.get('http://localhost:3000/albums/for/artist?artist=' + this.artist)
      .then((err,res)=>{
        if(err){
          console.log(err)
        }
        else{
          res.forEach(element => {
            console.log(res.data)
          });
        }
      })
    },
    getSongByAlbum(){
      axios.get('http://localhost:3000/songs/for/album?album=' + this.album)
      .then((err,res)=>{
        if(err){
          console.log(err)
        }
        else{
          res.forEach(element => {
            console.log(res.data)
          });
        }
      })
    }
  },
  components: {
    ArtistCard
  },
  mounted () {
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

.cards {
  margin-top: 20px;
}
#send-icon:hover {
  cursor: pointer;
}
#wrapper {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>