function loop(n) {
    for (let i = 0; n > i; i ++) {
        console.log('Hello')
    }
}
// loop(3)

let arr = [1, 2, 3, 4, 5]

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[arr.length - 1 - i])
}