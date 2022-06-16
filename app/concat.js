
const _ = require('lodash')

const arr1 = [34, 55, 45, 78, 20]

const concat = (arr) => {
    return _.concat(arr, arr1);
}

module.exports.concat = concat;