const http = require('http')
const url = require('url')

const input = require('./app/input')
const WordCount = require('./app/domain/word-counter')

const port = 8000

const server = http.createServer(handlerRequest)
server.listen(port)
server.on('error', err => console.error('*** Server error', err))
server.on('listening', () => console.log('*** Server running at http://localhost:%s/', port))

async function handlerRequest (request, response) {
	try {
		const wordCount = WordCount(input, outputTo(response))
		await wordCount(getLocationFrom(request))
	} catch (err) {
		handleErrorTo(response, err)
	}
}

const outputTo = response => wordCountJSON => {
	response.writeHead(200, {
		'Content-Type': 'application/json'
	})
	response.end(JSON.stringify(wordCountJSON))
}

function getLocationFrom (request) {
	const reqURL = url.parse(request.url, true)
	return reqURL.query['location']
}

function handleErrorTo (response, error) {
	response.writeHead(500)
			.end({cause: error.message})
}
