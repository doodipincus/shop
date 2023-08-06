const body1 = document.getElementsByTagName('BODY')[0]

const table = document.createElement('table')
body1.appendChild(table)
table.border = '1'

let xTrue = 1
let oTrue = 0

let id = 1

for (let i = 0; i < 3; i++) {
    const tr = document.createElement('tr')
    table.appendChild(tr)
    for (let j = 0; j < 3; j++) {
        const td = document.createElement('td')
        td.id = id
        id++
        tr.appendChild(td)
        td.style.height = '100px'
        td.style.width = '100px'
    }
}

let id2 = 1
for (let i = 0; i < 9; i++) {
    let flag = true
    let plaice = document.getElementById(id2)

    plaice.addEventListener('click', () => {

        const o = document.createElement('img')
        o.src = 'https://www.yalla.co.il/yala/uploads/u10760/zoom/15892853920-1.jpg'
        o.alt = 'o'
        o.style.height = '95px'
        o.style.width = '95px'

        const x = document.createElement('img')
        x.src = 'https://media.istockphoto.com/id/1276735653/vector/cross-sign-red-hand-drawn-brush-paint-x-letter-handwritten-criss-cross-symbol-painted.jpg?s=612x612&w=0&k=20&c=ldv6LXaUuUoTvfM4539exm4zKFEfthZJNBc-gKHCGgg='
        x.alt = 'x'
        x.style.height = '95px'
        x.style.width = '95px'

        console.log(table.rows.length)
        console.log(table.rows[0].cells.length)

        if (flag) {
            flag = false

            if (xTrue) {
                plaice.append(x)
                xTrue = 0
                oTrue = 1
            }
            else {
                plaice.append(o)
                oTrue = 0
                xTrue = 1
            }
        }
        // const winner = [
        //     [0, 1, 2],
        //     [3, 4, 5],
        //     [6, 7, 8],
        //     [0, 3, 6],
        //     [1, 4, 7],
        //     [2, 5, 8],
        //     [0, 4, 8],
        //     [2, 4, 6]
        // ]

        // const [a, b, c] = winner[i]
        // if (plaice[a].innerHTML === plaice[b].innerHTML && plaice[a].innerHTML === plaice[c].innerHTML)
        // console.log('ween')
        // plaice[a].innerHTML && 
        for (let i = 0; i < table.rows.length; i++) {
            // console.log("hello")
            for (let j = 0; j < table.rows[0].cells.length; j++) {
                // console.log(table.rows[0].cells[j])
                console.log("hello 2")
                console.log(table.rows[1].cells[0].innerHTML)
                console.log(table.rows[1].cells[1].innerHTML)
                console.log(table.rows[1].cells[2].innerHTML)
                console.log(table.rows[1].cells[0].innerHTML === table.rows[1].cells[1].innerHTML)
                if (table.rows[0].cells[0].innerHTML === table.rows[0].cells[1].innerHTML && table.rows[0].cells[0].innerHTML === table.rows[0].cells[2].innerHTML) {
                    console.log('ween')
                }
                else if (table.rows[1].cells[0].innerHTML === table.rows[1].cells[1].innerHTML && table.rows[1].cells[0].innerHTML === table.rows[1].cells[2].innerHTML) {
                        console.log('ween')
                    }
                    //  else if (table.rows[2].cells[0].innerHTML === table.rows[2].cells[1].innerHTML && table.rows[2].cells[0].innerHTML === table.rows[2].cells[2].innerHTML) {
                    //     console.log('ween')
                    // }
                    //  else if (table.rows[0].cells[0].innerHTML === table.rows[0].cells[1].innerHTML && table.rows[0].cells[0].innerHTML === table.rows[0].cells[2].innerHTML) {
                    //     console.log('ween')
                    // }
                    // } else if (table.rows[0].cells[0].innerHTML === table.rows[0].cells[1].innerHTML && table.rows[0].cells[0].innerHTML === table.rows[0].cells[2].innerHTML) {
                    //     console.log('ween')

                    // } else if (table.rows[0].cells[0].innerHTML === table.rows[0].cells[1].innerHTML && table.rows[0].cells[0].innerHTML === table.rows[0].cells[2].innerHTML) {
                    //     console.log('ween')

                    // } else if (table.rows[0].cells[0].innerHTML === table.rows[0].cells[1].innerHTML && table.rows[0].cells[0].innerHTML === table.rows[0].cells[2].innerHTML) {
                    //     console.log('ween')

                    // } else if (table.rows[0].cells[0].innerHTML === table.rows[0].cells[1].innerHTML && table.rows[0].cells[0].innerHTML === table.rows[0].cells[2].innerHTML) {
                    //     console.log('ween')

                    // } else {
                    //     console.log('lozer')
                    // }
                
            
                }

    }})
    id2++
}


// let A = getElementById('1')
// let B = getElementById('2')
// let C = getElementById('3')
// let D = getElementById('4')
// let G = getElementById('7')


// if (D || G) {
//     if (plaice.id.includes() && id + 1 && id + 2 == ) {

//     }
// } else if (B) {
//     if (B.includes() && B.includes() && B.includes() ==) {

//     }
// } else if (plaice.id == 1) {
//     if (id && id + 1 && id + 2 == || id && id + 3 && id + 6 == || id && id + 4 && id + 8 ==) {

//     }
// } else if (plaice.id == 3) {
//     if (id && id + 3 && id + 6 == || id && id + 2 && id + 4 ==) {

//     }
// }
// else {

// }



// const reset = document.createElement('button')
// reset.innerText = "start"
// body1.appendChild(reset)

// reset.addEventListener('click', () => {
//     reset.parentElement.remove()
//     start()

// })

