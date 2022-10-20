function setEachWordСapitalized(str) {
    let splitString = str.split(' ');
    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1, splitString[i].length + 1);
    }
    return splitString.join(' ');
}

console.log("1:", setEachWordСapitalized('hello my Love'));
console.log("1:", setEachWordСapitalized('i want a pizza'));
console.log("1:", setEachWordСapitalized('1 CUP of tEa'));

function cleanNonLetterOrNonDigit(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str[i].charCodeAt();
        const isChar = charCode >= 48 && charCode <= 57;
        const isChar2 = charCode >= 65 && charCode <= 90;
        const isChar3 = 97 <= charCode && charCode <= 122;

        if ((isChar) || (isChar2) || (isChar3)) {
            result = result + str[i];
        }
    }
    return result;
}

console.log("2:", cleanNonLetterOrNonDigit('mother*123'));
console.log("2:", cleanNonLetterOrNonDigit('#sheeps g0 f0r a w4|k'));

function isPalindrom(str) {
    let newStr = str.toLowerCase().replace(/[^a-zA-Z]+/g, '');
    if (newStr == newStr.split('').reverse().join('')) {
        return true;
    } else return false;
}

console.log("3:", isPalindrom('mama'));
console.log("3:", isPalindrom('голод долог'));
console.log("3:", isPalindrom('а к порту тропка'));
console.log("3:", isPalindrom('Я - арка края'));

function deleteDublicateSymbols(str) {
    let result = '';
    let charSet = new Set();
    for (let i = 0; i < str.length; i++) {
        if (!charSet.has(str[i])) {
            result += str[i];
            charSet.add(str[i]);
        }
    }
    return result;
}

console.log("4:", deleteDublicateSymbols('mama'));
console.log("4:", deleteDublicateSymbols('Valeria Sergeevna'));
console.log("4:", deleteDublicateSymbols('1 2 3 3 4 5'));

function replaceAll(find, replace, str) {
    while(str.includes(find)) {
        str = str.replace(find, replace);
    }
    return str;
}

console.log("5:", replaceAll('cat', 'dog', 'A big cat jumped over the cathouse'));
console.log("5:", replaceAll('2', '5', '22 33 55 232'));