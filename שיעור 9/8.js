const body1 = document.getElementsByTagName('BODY')[0]

const start = document.createElement('button')
start.innerText = 'Start'
body1.appendChild(start)

let img = document.createElement('img')
body1.appendChild(img)

let img2 = document.createElement('img')
body1.appendChild(img2)

start.addEventListener('click', () => {
    const cube1 = Math.ceil(Math.random() * 6)
    const cube2 = Math.ceil(Math.random() * 6)
    img.src = `/images/dice-0${cube1}.svg`
    img2.src = `/images/dice-0${cube2}.svg`
})