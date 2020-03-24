const http = require('http')
const url = require('url')

const input = require('./app/input')
const WordCount = require('./app/domain/word-counter')

const port = 8000

const server = http.createServer(handlerRequest)
server.listen(port)
server.on('error', e => console.error('*** Server error', e))
server.on('listening', () => console.log('*** Server running at http://localhost:%s/', port))

function handlerRequest (req, res) {
	const reqURL = url.parse(req.url, true)
	const location = reqURL.query['location']

	wordCountFrom(location, res)
}

async function wordCountFrom (location, response) {
	try {
		const wordCount = WordCount(input, output)
		await wordCount(location)
	} catch (err) {
		handleError(err)
	}

	async function output (wordCountJSON) {
		response.writeHead(200, {
			'Content-Type': 'application/json'
		})
		response.end(JSON.stringify(wordCountJSON))
	}

	function handleError (error) {
		response.status(500)
				.json({cause: error.message})
	}
}
