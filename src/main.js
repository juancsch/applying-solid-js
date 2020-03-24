const path = require('path')
const fs = require('fs')

main(process.argv[2])

async function main (location) {

    try {
        const data = await input(location)

        const wordCount = data.split(/\s/).length
        const wordCountJSON = {
            wordCount
        }

        await output(wordCountJSON)
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

function input (filepath) {
    const filepathResolved = path.resolve(filepath)
    return fs.promises.readFile(filepathResolved, 'utf8')
}

const saveTo = filepath => content => {
    const filepathResolved = path.resolve(filepath)
    return fs.promises.writeFile(
        filepathResolved,
        JSON.stringify(content, null, 2)
    )
}

const output = saveTo('word-count.json')
