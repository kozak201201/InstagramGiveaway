function uniqueValues(arr) {
    let result = 0;
    let resultObj = {};
    for (let val of arr) {
        if (!resultObj[val]) {
            resultObj[val] = 1;
        } else {
            resultObj[val]++;
        }
    }
    for (let key in resultObj) {
        if (resultObj[key] == 1) {
            result++;
        }
    }
    return result;
}

//input 2D Array with set elements
function existInAll(arr, filesCount = 20) {
    let resultObj = {};

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (resultObj[arr[i][j]] == undefined) {
                if (i == 0) {
                    resultObj[arr[i][j]] = 1;
                }
            } else {
                resultObj[arr[i][j]]++;
            }
        }
    }

    let count = 0;

    for (const key in resultObj) {
        if(resultObj[key] == filesCount) {
            count++;
        }
    }

    return count;
}

//input 2D Array with set elements
function existInAtLeast(arr, needAtLeastCount = 10) {
    let resultObj = {};

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (resultObj[arr[i][j]] == undefined) {
                if (i == 0) {
                    resultObj[arr[i][j]] = 1;
                }
            } else {
                resultObj[arr[i][j]]++;
            }
        }
    }

    let count = 0;

    for (const key in resultObj) {
        if(resultObj[key] >= needAtLeastCount) {
            count++;
        }
    }

    return count;
}

module.exports = { uniqueValues, existInAll, existInAtLeast };