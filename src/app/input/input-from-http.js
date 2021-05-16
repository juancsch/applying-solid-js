const http = require('http')

// string => Promise<string>
module.exports = function (url) {

	return new Promise((resolve, reject) => {

		http.get(url, response => {
			let data = ''

			response.on('data', chunk => {
				data += chunk
			})

			response.on('end', () => {
				resolve(data)
			})
		}).on('error', (err) => {
			err.message = `[HTTPContent] Error retrive data from ${url} due to ${err.message}`
			reject(err)
		})
	})
}
