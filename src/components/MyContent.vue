<template>
  <div id="content">

    <!-- COMPONENTE BARRA DI RICERCA -->
    <SearchBar @search="searchNewResults" />

    <!-- COMPONENTE LISTA FILM -->
    <MyMovies :list="filmList" />

    <!-- COMPONENTE LISTA SERIE TV -->
    <MyShows :list="tvShowsList" />

  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from './SearchBar.vue';
import MyMovies from './MyMovies.vue';
import MyShows from './MyShows.vue';
export default {
    name: "MyContent",
    components: { SearchBar, MyMovies, MyShows },
    data () {
      return {
        // IMPORTO API DA THEMOVIEDB
        apiUrlMovies : 'https://api.themoviedb.org/3/search/movie?api_key=9a1f1b500f27b1739ad066bae2ae67ba&language=it-IT&query=',
        apiUrlShows : 'https://api.themoviedb.org/3/search/tv?api_key=9a1f1b500f27b1739ad066bae2ae67ba&language=it_IT&query=',
        filmList : [],
        tvShowsList : [],
        userInput : '',
        userUrl : ''
      }
    },

    methods : {
      // CHIAMATA AD AXIOS
      searchFilm() {
          this.userUrl= this.apiUrlMovies + this.userInput;
          axios.get(this.userUrl)
          .then((result) => {
            this.filmList = result.data.results;
            console.log(this.filmList);
          })
          .catch((error) => {
            console.log('error', error);
          })
      },

      searchShows() {
          this.userUrl = this.apiUrlShows + this.userInput;
          axios.get(this.userUrl)
          .then((result) => {
            this.tvShowsList = result.data.results;
            console.log(this.tvShowsList);
          })
          .catch((error) => {
            console.log('error', error);
          })
      },

      // EMIT DEL VALORE DELLA RICERCA DAL COMPONENT SEARCHBAR
      searchNewResults (newInput) {
        this.userInput = newInput;
        this.searchFilm();
        this.searchShows();
      }
    },

    // STAMPO I RISULTATI DELLA RICERCA
    unmounted () {
      this.searchFilm();
      this.searchShows();
    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#content {
  width: calc(100% - 200px);
  min-height: calc(100vh);
  background-color: #222;
}
</style>
