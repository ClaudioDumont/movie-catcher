import Vue from 'vue'

export default (apikey) => ({
	getByQuery: (query, type = 'movie', page = 1, year = '2018') => Vue.http
		.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${query}&type=${type}&page=${page}&year=${year}`)
		.then(response => response.json())
		.then(response => response.Search || [])
		.then(movies => movies.map(movie => ({
			title: movie.Title,
			poster: movie.Poster,
			gender: movie.Type,
			id: movie.imdbID
		}))),
	getById: (id) => Vue.http
		.get(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}` )
		.then(response => response.json())
		.then(movie => ({
			gender: movie.Genre,
			poster: movie.Poster,
			title: movie.Title,
			id: movie.imdbID,
			description: movie.Plot,
			released: movie.Released,
			year: movie.Year,
			boxOffice: movie.BoxOffice,
			duration: movie.Runtime,
			director: movie.Director
		}))
})
