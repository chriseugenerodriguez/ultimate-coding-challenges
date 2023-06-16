function MergeArray3(arr1, arr2 = arr1){
    arr1.push(...arr2);
    return arr1;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/collections-challenges.md