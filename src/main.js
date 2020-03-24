const input = require('./input-from-file')
const output = require('./output-to-file')
const wordCounter = require('./word-counter')(
    input, output('word-count.json')
)

main(process.argv[2])

async function main (location) {

    try {
        await wordCounter(location)
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}
