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
        td.style.textAlign = 'center'
        td.style.color = 'red'
        td.style.fontSize = '80px'
        td.id = id
        id++

        tr.appendChild(td)
        td.style.height = '100px'
        td.style.width = '100px'

        td.addEventListener('click', () => {
            if (td.innerText === '') {
                if (xTrue) {
                    td.innerText = 'x'
                    xTrue = 0
                    oTrue = 1
                }
                else {
                    td.innerText = 'o'
                    oTrue = 0
                    xTrue = 1
                }
            }
        })
    }
}

let A = getElementById('1')
let B = getElementById('2')
let C = getElementById('3')
let D = getElementById('4')
let E = getElementById('5')
let F = getElementById('6')
let G = getElementById('7')
let H = getElementById('8')
let I = getElementById('9')

if(A){
    if(A.innerText == 'x' && B.innerText == 'x' && C.innerText == 'x'){
        console.log('Hello')
    }
}