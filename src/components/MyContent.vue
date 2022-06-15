<template>
  <div id="content">
    <SearchBar @search="searchNewFilm" />

    <ul id="movie-list">
      <li class="movie-card" v-for="(film,i) in filmList" :key="i" >
        <ul>
          <li>{{film.original_title}}</li>
          <li>{{film.title}}</li>
          <li>{{film.original_language}}</li>
          <li>{{film.vote_average}}</li>
        </ul>
      </li>
    </ul>
    
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from './SearchBar.vue';
export default {
    name: "MyContent",
    components: { SearchBar },
    data () {
      return {
        // IMPORTO API DA THEMOVIEDB
        apiUrl : 'https://api.themoviedb.org/3/search/movie?api_key=9a1f1b500f27b1739ad066bae2ae67ba&language=it-IT&query=',
        filmList : [],
        userInput : '',
      }
    },

    methods : {
      // CHIAMATA AD AXIOS
      searchFilm() {
          var userUrl = this.apiUrl + this.userInput;
          axios.get(userUrl)
          .then((result) => {
            this.filmList = result.data.results;
            console.log(this.filmList);
            console.log('ciao');
          })
          .catch((error) => {
            console.log('error', error);
          })
      },

      // EMIT DEL VALORE DELLA RICERCA DAL COMPONENT SEARCHBAR
      searchNewFilm (newInput) {
        this.userInput = newInput;
        this.searchFilm();
      }
    },

    // STAMPO I RISULTATI DELLA RICERCA
    created () {
      this.searchFilm();
    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#content {
  width: calc(100% - 200px);
  min-height: calc(100vh - 100px);
  background-color: #222;

  #movie-list {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    

     .movie-card {
      background-color: #fff;
      flex-basis: 12%;
      height: 150px;
      margin: 20px calc((100% - (12% * 6)) / 12);
     }
  }

}
</style>
