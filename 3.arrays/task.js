const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((elem,i) => elem === arr2[i]);

let advancedFilter = (arr) => arr.filter((elem) => elem > 0).filter((elem1) => elem1 % 3 === 0).map(elem3 => elem3 * 10) ;