let arr = [1, 7, 5, 7, 1]
// שאלה 1
function oneToN(n) {
    let i = 1
    let toN = []
    while (i <= n) {
        toN.push(i)
        i += 1
    }
    return toN
}

console.log(oneToN(8))

// שאלה 2
function sumN(n) {
    let sum = 0
    for (let i = 0; i < n; i++) {
        // input
        // sum += 
    }
    return sum
}

// שאלה 3
let arrInAscendingOrder = arr.sort((a, b) => a - b)
console.log(arrInAscendingOrder)

// function arrInAscendingOrder(arr) {
//     let nweArr = []
//     for (let i = 0; i < arr.length; i++) {

//     }
// }

// שאלה 4
let arrInDescendingOrder = arr.sort((a, b) => b - a)
console.log(arrInDescendingOrder)

// function arrInDescendingOrder(arr) {
//     let nweArr = []
//     for (let i = 0; i < arr.length; i++) {

//     }
// }

// שאלה 5
function oneArr(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(oneArr(arr))

// שאלה 6
function towArr(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        if (!newArr.includes(arr1[i])) {
            newArr.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!newArr.includes(arr2[i])) {
            newArr.push(arr2[i])
        }
    }
    return newArr
}
let arr2 = [1, 8, 6, 5]
console.log(towArr(arr, arr2))