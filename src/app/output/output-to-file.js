const path = require('path')
const fs = require('fs')

// string => string => Promise<void>
module.exports = filepath => content => {
	const filepathResolved = path.resolve(filepath)
	return fs.promises.writeFile(
		filepathResolved,
		JSON.stringify(content, null, 2)
	)
}
