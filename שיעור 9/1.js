const body1 = document.getElementsByTagName('BODY')[0]


let divA = document.createElement('div')
divA.style.display = 'inline'
body1.appendChild(divA)

let headingElem = document.createElement('h1');
headingElem.innerText = 'Mouse Out'
divA.appendChild(headingElem)

headingElem.addEventListener("mouseover", () => {
    headingElem.innerText = "Mouse In"
})

headingElem.addEventListener('mouseout', () => {
    headingElem.innerText = 'Mouse Out'
})

headingElem.addEventListener('click', () => {
    headingElem.style.color = 'green'
    headingElem.style.background = 'yellow'
})