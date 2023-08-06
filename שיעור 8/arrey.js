let arr = [1, 2, 3, 4, 5]

function addition(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}


function multiplication(arr) {
    let sum = 1
    for (let i = 0; i < arr.length; i++) {
        sum *= arr[i]
    }
    return sum
}

function average(arr) {
    let sum = 0
    let avr = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    avr = sum / arr.length
    return avr
}

function change(arr) {
    let a = arr.shift()
    let z = arr.pop()
    arr.unshift(z)
    arr.push(a)
    return arr
}

function cope(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        let doodi = arr[i]
        arr2.push(doodi)
    }
    return arr2
}

function reverse(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2) + 1; i++) {
        let a = arr[i]
        let z = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = a
        arr[i] = z
    }
    return arr
}

function high(arr) {
    let high = null
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i]
        }
    }
    return high
}

function even(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        let doodi = arr[i]
        if (doodi % 2 === 0) {
            arr2.push(doodi)
        }
    }
    return arr2
}

// שאלה 1 
// a
console.log(addition(arr))

// b
console.log(multiplication(arr))

// c
console.log(average(arr))

// d
// console.log(change(arr))

// e
console.log(cope(arr))

// f
console.log(reverse(arr))

// g
console.log(high(arr))

// h
console.log(even(arr))


let arrStr = ['abcd', 'ef', 'xyz']

function gap(arrStr) {
    let sentence = ''
    for (let i = 0; i < arrStr.length; i++) {
        sentence += arrStr[i]
        if (i < arrStr.length - 1) {
            sentence += ' '
        }
    }
    return sentence
}

function comma(arrStr) {
    let sentence = ''
    for (let i = 0; i < arrStr.length; i++) {
        sentence += arrStr[i]
        if (i < arrStr.length - 1) {
            sentence += ','
        }
    }
    return sentence
}

function sumStr(arrStr) {
    let sum = 0
    for (let i = 0; i < arrStr.length; i++) {
        sum += arrStr[i].length
    }
    return sum
}

function copeUpper(arrStr) {
    let newArr = []
    for (let i = 0; i < arrStr.length; i++) {
        let word = arrStr[i].toUpperCase()
        newArr.push(word)
    }
    return newArr
}

function copeBigTo6(arrStr) {
    let newArr = []
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length >= 6) {
            let word = arrStr[i]
            newArr.push(word)
        }
    }
    return newArr
}

function long(arrStr) {
    let long = 0
    let word = ''
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length > long) {
            long = arrStr[i].length
            word = arrStr[i]
        }
    }
    return word
}

function wordsTo4(arrStr) {
    let sum = 0
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length === 4) {
            sum += 1
        }
    }
    return sum
}


// שאלה 2
// a
console.log(gap(arrStr))

// b
console.log(comma(arrStr))

// c
console.log(sumStr(arrStr))

// d
console.log(copeUpper(arrStr))

// e
console.log(copeBigTo6(arrStr))

// f
console.log(long(arrStr))

// g
console.log(wordsTo4(arrStr))


let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function print(mat) {
    for (let i = 0; i < mat.length; i++) {
        console.log(mat[i])
    }
}

function printSum(mat) {
    for (let i = 0; i < mat.length; i++) {
        console.log(mat[i].length)
    }
}

function sumLongMat(arrStr) {
    let sum = 0
    for (let i = 0; i < arrStr.length; i++) {
        sum += arrStr[i].length
    }
    return sum
}

function printMat(mat) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            console.log(mat[i][j])
        }
    }
}

function printMatBig5(mat) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] > 5) {
                console.log(mat[i][j])
            }
        }
    }
}

function sumMat(mat) {
    let sum = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            sum += mat[i][j]
        }
    }
    return sum
}

// שאלה 3
// a
print(mat)

// b
printSum(mat)

// c
console.log(sumLongMat(mat))

// d
printMat(mat)

// e
printMatBig5(mat)

// f
console.log(sumMat(mat))


// 7 בום
let boom = []
for (let i = 1; i < 100; i++) {
    boom.push(i)
}
console.log(boom)

function sevenBoom(boom) {
    for (let i = 0; i < boom.length; i++) {
        if (boom[i] % 7 === 0) {
            boom[i] = 'boom'
        }
        let test = boom[i].toString()
        if (test.includes('7')) {
            boom[i] = 'boom'
        }
    }
    return boom
}

console.log(sevenBoom(boom))