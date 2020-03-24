
module.exports = (input, output) => async location => {
	const data = await input(filepath)

	const wordCount = data.split(/\s/).length
	const wordCountJSON = {
		wordCount
	}

	await output(wordCountJSON)
}
