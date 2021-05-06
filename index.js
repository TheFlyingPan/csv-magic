module.exports = function (options = {}) {
    csvToString = (filepath) => {
        return new Promise((resolve, reject) => {
            require('fs').readFile(filepath, 'utf8', function(err, data) {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }
    stringtoArray = (csvString) => {
        return new Promise((resolve, reject) => {
            require('csv-parse')(csvString, options, function(err, output) {
                if (err) reject(err)
                else resolve(output)
            })
        })
    },

    module.toArray = (csvPath) => {
        return new Promise((resolve, reject) => {
            csvToString(csvPath)
                .then((csvString) => {
                    stringtoArray(csvString)
                        .then((csvArray) => {
                            resolve(csvArray)
                        })
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
    return module;
}