const {transformFileToArr, transformFileTo2DArrWithSetElements} = require('./createArrFromFiles');
const {uniqueValues, existInAll, existInAtLeast} = require('./taskFuncs');

const pathToEasyFolder = '200k_words_100x100';
const pathToHeavyFolder = '2kk_words_400x400';

const maxFiles = 20;
const atLeastFiles = 10;

//FirstStep

const arrEasyFolder = transformFileToArr(pathToEasyFolder, maxFiles);
const arr2DEasyFolder = transformFileTo2DArrWithSetElements(pathToEasyFolder, maxFiles);

const resultUniqueValuesEasyFolder = uniqueValues(arrEasyFolder);
const resultExistInAllEasyFolder = existInAll(arr2DEasyFolder, maxFiles);
const resultExistInAtLeastEasyFolder = existInAtLeast(arr2DEasyFolder, atLeastFiles);

console.log('\n')
console.log(`Unique phrases in easy folder files: ${resultUniqueValuesEasyFolder}`);
console.log(`Phrases exist in all easy folder files: ${resultExistInAllEasyFolder}`);
console.log(`Phrases exist in an least 10 easy folder files ${resultExistInAtLeastEasyFolder}`);


//SecondStep

const arrHeavyFolder = transformFileToArr(pathToHeavyFolder, maxFiles);
const arr2DHeavyFolder = transformFileTo2DArrWithSetElements(pathToHeavyFolder, maxFiles);

const resultUniqueValuesHeavyFolder = uniqueValues(arrHeavyFolder);
const resultExistInAllHeavyFolder = existInAll(arr2DHeavyFolder, maxFiles);
const resultExistInAtLeastHeavyFolder = existInAtLeast(arr2DHeavyFolder, atLeastFiles);

console.log('\n')
console.log(`Unique phrases in heavy folder files: ${resultUniqueValuesHeavyFolder}`);
console.log(`Phrases exist in all heavy folder files: ${resultExistInAllHeavyFolder}`);
console.log(`Phrases exist in an least 10 heavy folder files ${resultExistInAtLeastHeavyFolder}`);
console.log('\n')