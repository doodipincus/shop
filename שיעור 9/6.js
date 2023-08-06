const body1 = document.getElementsByTagName('BODY')[0]


let divF = document.createElement('div')
body1.appendChild(divF)

let inputSize = document.createElement('input')
inputSize.type = 'number'
inputSize.min = '1'
inputSize.max = '6'
inputSize.style.display = 'block'
inputSize.placeholder = 'Enter the size'
divF.appendChild(inputSize)

let inputText = document.createElement('input')
inputText.placeholder = 'Enter the text'
divF.appendChild(inputText)

let inputColor = document.createElement('input')
inputColor.type = "color"
inputColor.style.display = 'block'
inputColor.placeholder = 'Enter the color'
divF.appendChild(inputColor)

let start = document.createElement('button')
start.innerText = 'OK'
divF.appendChild(start)

start.addEventListener('click', () => {
    x = 'h' + inputSize.value

    let h = document.createElement(x)
    h.innerText = inputText.value
    h.style.color = inputColor.value
    h.style.display = 'block'

    divF.appendChild(h)

    inputSize.value = ''
    inputText.value = ''
    inputColor.value = ''
})