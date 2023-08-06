const body1 = document.getElementsByTagName('BODY')[0]


let divC = document.createElement('div')
divC.style.display = 'inline'
body1.appendChild(divC)

let div2 = document.createElement('div')
div2.style.height = '200px'
div2.style.width = '200px'
div2.style.backgroundColor = 'pink'
divC.appendChild(div2)

let text = document.createTextNode('I am text')
div2.appendChild(text)

div2.style.display = 'flex'
div2.style.alignItems = 'center'
div2.style.justifyContent = 'center'

let changeLocation = document.createElement('button')
changeLocation.innerText = 'Corners'
divC.appendChild(changeLocation)

changeLocation.addEventListener('click', () => {
    if (div2.style.alignItems === 'end' && div2.style.justifyContent === 'right') {
        div2.style.alignItems = 'end'
        div2.style.justifyContent = 'left'
    } else if (div2.style.alignItems === 'end' && div2.style.justifyContent === 'left') {
        div2.style.alignItems = 'start'
        div2.style.justifyContent = 'left'
    } else if (div2.style.alignItems === 'start' && div2.style.justifyContent === 'left') {
        div2.style.alignItems = 'start'
        div2.style.justifyContent = 'right'
    } else if (div2.style.alignItems === 'start' && div2.style.justifyContent === 'right') {
        div2.style.alignItems = 'end'
        div2.style.justifyContent = 'right'
    } else {
        div2.style.alignItems = 'start'
        div2.style.justifyContent = 'right'
    }
})

let changeLocation2 = document.createElement('button')
changeLocation2.innerText = 'Center of the rib'
divC.appendChild(changeLocation2)

changeLocation2.addEventListener('click', () => {
    if (div2.style.alignItems === 'end' && div2.style.justifyContent === 'center') {
        div2.style.alignItems = 'center'
        div2.style.justifyContent = 'left'
    } else if (div2.style.alignItems === 'center' && div2.style.justifyContent === 'left') {
        div2.style.alignItems = 'start'
        div2.style.justifyContent = 'center'
    } else if (div2.style.alignItems === 'start' && div2.style.justifyContent === 'center') {
        div2.style.alignItems = 'center'
        div2.style.justifyContent = 'right'
    } else if (div2.style.alignItems === 'center' && div2.style.justifyContent === 'right') {
        div2.style.alignItems = 'end'
        div2.style.justifyContent = 'center'
    } else {
        div2.style.alignItems = 'start'
        div2.style.justifyContent = 'center'
    }
})

let changeLocation3 = document.createElement('button')
changeLocation3.innerText = 'Center'
divC.appendChild(changeLocation3)

changeLocation3.addEventListener('click', () => {
    div2.style.alignItems = 'center'
    div2.style.justifyContent = 'center'
})