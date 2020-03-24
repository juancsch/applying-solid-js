const strategies = {
	file: require('./input-from-file'),
	http: require('./input-from-http')
}

// string => Promise<string>
module.exports = function (location) {

	if (location.startsWith('http')) {
		return strategies['http'](location);
	}

	return strategies['file'](location);
}
