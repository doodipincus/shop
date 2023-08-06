function func1 (n1, n1) {
    return n1 + n2
}

function func2 (n1, n2) {
    return n1 * n2
}

function func3 (n1, n2) {
    return
}

function func4 (n1, n2) {
    return n1 / n2
}

function func5 (n1, n2) {
    return n1 > n2 ? n1 : n2 > n1 ? n2 : 'שווים'
    // if (n1 > n2){
    //     return n1
    // } else if (n2 > n1){
    //     return n2
    // }else {
    //     return "שווים"
    // }
}

function func6 (n1) {
    return n1 % 2 === 0 ? 'זוגי' : 'אי זוגי'
    // if (n1 % 2 === 0) {
    //     return "זוגי"
    // }else {
    //     return "אי זוגי"
    // }
}

function func7 (a, h) {
    return a * h / 2
}

function func8 (r) {
    return Math.PI * (r**2)
}

function func9 (r) {
    return 2 * Math.PI * r
}

function func10 (str1, str2) {
    return str1.length > str2.length ? str1 : str2.length > str1.length ? str2 : "שווים"
    // if (str1.length > str2.length) {
    //     return str1
    // } else if (str2.length > str1.length) {
    //     return str2
    // } else {
    //     return "שווים"
    // }
}

function func11 (str) {
    let a = str.toLowerCase()
    let b = a[0].toUpperCase() + a.slice(1)
    return b
}

// console.log(func11("yaBcD MMjjkiLL"))

for (let i = 0; i < 10; i++) {
    console.log('Iteration number ' + i)
}