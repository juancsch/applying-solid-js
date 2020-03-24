
module.exports = (input, output) => async location => {
	const data = await input(location)

	const wordCount = data.split(/\s/).length
	const wordCountJSON = {
		wordCount
	}

	await output(wordCountJSON)
}
