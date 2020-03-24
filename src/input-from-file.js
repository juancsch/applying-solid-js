const path = require('path')
const fs = require('fs')

// string => Promise<string>
module.exports = function input (filepath) {
	const filepathResolved = path.resolve(filepath)
	return fs.promises.readFile(filepathResolved, 'utf8')
}
