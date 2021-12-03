const fs = require('fs');

function transformFileToArr(path, maxFiles = 20) {
    let arr = [];

    const filesStr = fs.readdirSync(path);
    for(let i = 0; i < maxFiles; i++) {
        let fileContent = fs.readFileSync(`${path}/${filesStr[i]}`, "utf8");
        arr.push(...fileContent.split('\n'));
    }

    return arr;
}

function transformFileTo2DArrWithSetElements(path, maxFiles = 20) {
    let arr = [];
    
    const filesStr = fs.readdirSync(path);
    for(let i = 0; i < maxFiles; i++) {
        let fileContent = fs.readFileSync(`${path}/${filesStr[i]}`, "utf8");
        arr.push(Array.from(new Set(fileContent.split('\n'))));
    }

    return arr;
}

module.exports = { transformFileToArr, transformFileTo2DArrWithSetElements };