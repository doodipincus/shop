const body1 = document.getElementsByTagName('BODY')[0]


let divB = document.createElement('div')
divB.style.display = 'inline'
body1.appendChild(divB)

let diving = document.createElement('div')
diving.style.height = '200px'
diving.style.width = '200px'
diving.style.backgroundColor = 'green'
divB.appendChild(diving)

let button = document.createElement('button')
button.innerText = "Change color"
divB.appendChild(button)

button.addEventListener('click', () => {
    if (diving.style.backgroundColor != "green") {
        diving.style.backgroundColor = "green";
    } else {
        diving.style.backgroundColor = "yellow"
    }
})

let selector = document.createElement('select')
selector.style.display = 'block'
divB.appendChild(selector)

const selector2 = document.getElementsByTagName('select')[0]

let option1 = document.createElement('option')
option1.innerText = 'red'
selector2.appendChild(option1)

let option2 = document.createElement('option')
option2.innerText = 'black'
selector2.appendChild(option2)

let option3 = document.createElement('option')
option3.innerText = 'blue'
selector2.appendChild(option3)

let option4 = document.createElement('option')
option4.innerText = 'orange'
selector2.appendChild(option4)

selector.onchange = ((e) => {
    const selectorValue = e.target.value
    diving.style.backgroundColor = selectorValue
})

let input = document.createElement('input')
input.placeholder = 'Insert the color'
divB.appendChild(input)

let ok = document.createElement('button')
ok.innerText = "OK"
divB.appendChild(ok)

ok.addEventListener('click', () => {
    let x = document.createElement('option')
    x.innerText = input.value
    selector2.appendChild(x)
})

let button2 = document.createElement('button')
button2.innerText = "on/off"
button2.style.display = 'block'
divB.appendChild(button2)

button2.addEventListener('click', () => {
    if (diving.style.display === 'none') {
        diving.style.display = 'block'
        selector.style.display = 'block'
        button.style.display = 'block'
        input.style.display = 'inline'
        ok.style.display = 'inline'
    } else {
        diving.style.display = 'none'
        selector.style.display = 'none'
        button.style.display = 'none'
        input.style.display = 'none'
        ok.style.display = 'none'

    }
})
