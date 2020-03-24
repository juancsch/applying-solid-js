const input = require('./app/input')
const output = require('./app/output/output-to-file')
const wordCounter = require('./app/domain/word-counter')(
    input, output('word-count.json')
)

cli(process.argv[2])

async function cli (location) {
    try {
        await wordCounter(location)
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}
