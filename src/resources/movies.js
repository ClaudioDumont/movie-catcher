import Vue from 'vue'

export default (apikey) => ({
	getByQuery: (query, page = 1, limit = 20) => Vue.http
		.get(`https://yts.am/api/v2/list_movies.json?query_term=${query}&page=${page}&limit=${limit}`)
		.then(response => response.json())
		.then(response => response.data.movies || [])
		.then(movies => movies.map(({title, id, medium_cover_image, genres}) => ({
			title,
			poster: medium_cover_image,
			gender: genres.shift(),
			id
		}))),
	getById: (id) => Vue.http
		.get(`https://yts.am/api/v2/movie_details.json?movie_id=${id}` )
		.then(response => response.json())
		.then(response => response.data.movie)
		.then(movie => ({
			gender: movie.genres.shift(),
			poster: movie.large_cover_image,
			title: movie.title,
			id: movie.id,
			description: movie.description_full,
			year: movie.year,
			duration: movie.runtime
		}))
})
