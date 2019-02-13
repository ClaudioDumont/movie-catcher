<template lang="pug">
content
  header
    .main-container
      h1(class="page-title" id="page-title") Movie CaTcher
      search-box(v-model="query")
  .main-container
    .cards-movies-container
      movie-card(v-for="movie in movies" :id="movie.id" :title="movie.title" :gender="movie.gender" :url="movie.url" :description="movie.description" :poster="movie.poster" @view-details="onViewDetails")
    movie-card-detail(v-if="selectedMovie" :id="selectedMovie.id" :title="selectedMovie.title" :gender="selectedMovie.gender" :url="selectedMovie.url" :description="selectedMovie.description" :poster="selectedMovie.poster" :released="selectedMovie.released" :year="selectedMovie.year" :boxOffice="selectedMovie.boxOffice" :duration="selectedMovie.duration" :director="selectedMovie.director"  @close-modal="onClose")

    pagination(:offset="page" @page-changed="onPageChange")
  footer
    | develop by: 
    a(href="https://github.com/ClaudioDumont" target="_blank") ClaudioDumont
</template>

<script>

import MovieCard from './components/MovieCard.vue';
import MovieCardDetail from './components/MovieCardDetail.vue';
import Pagination from './components/Pagination.vue';
import SearchBox from './components/SearchBox.vue';
import Movies from './resources/movies';

export default {
  name: 'app',
  components: {
    MovieCard,
    MovieCardDetail,
    SearchBox,
    Pagination
  },
  data () {
    return {
      movies: [],
      selectedMovie: null,
      query: '',
      page: 0,
      moviesClient: Movies('1c8df10')
    }
  },
  mounted () {
    this.moviesClient
      .getByQuery('movie')
      .then(movies => {
        this.movies = movies
      })
  },
  watch: {
    query (newQuery) {
      this.page = 0;
      this.getMovies(newQuery, this.page)
    },
    page (newPage) {
      this.getMovies(this.query, newPage)
    }
  },
  methods: {
    onViewDetails(id) {
      this.moviesClient
      .getById(id)
      .then(movie => {
        this.selectedMovie = movie
      })
    },
    onClose(id) {
      this.selectedMovie = null
    },
    getMovies(query, page) {
      this.moviesClient
        .getByQuery(query, page)
        .then(movies => {
          this.movies = movies
          this.selectedMovie = null
      })
    },
    onPageChange(page) {
      this.page = page
    }
  }
}

</script>

<style lang="scss">

@import "./styles/reset";
@import "./styles/base";
* {
  box-sizing: border-box;
}

body {
  background: #333;
}

.main-container {
  max-width: 1380px;
  padding: 20px;
  margin: 200px auto 50px;
  
  @include breakpoint(mobileonly) {
    margin-top: 230px;
  }
}

header {
  padding: 10px;
  background:url(./assets/header-bg.jpg) no-repeat left bottom;
  background-size: cover;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  
  .main-container {
    margin: 0 auto;
  }
}

footer {
  padding: 30px;
  background: #000;
  color: #ccc;
  text-align: center;
  
  a {
    color: #ccc;
    
    &:hover{
      color: #fff;
      text-decoration: underline;
    }
  }
}

.page-title {
  text-align: center;
  font-size: 2.3rem;
  text-transform: uppercase;
  color: #12A2F2;
  text-shadow: 2px 2px 10px rgba(0,0,0,1);
  margin: 2vh 0;
  padding: 10px 30px;
  background: rgba(0,0,0,0.6);
  display: inline-block;
  border-radius: 10px;
}

.cards-movies-container {
  columns: 5;
  grid-column-gap: 25px;

  @include breakpoint(tablet) {
    columns: 3;
  }

  @include breakpoint(phablet) {
    columns: 2; 
  }

  @include breakpoint(mobileonly) {
    columns: 1;
  }
}
</style>
