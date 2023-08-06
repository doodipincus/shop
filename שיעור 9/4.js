const body1 = document.getElementsByTagName('BODY')[0]
body1.style.display = 'flex'


let divD = document.createElement('div')
divD.style.display = 'inline'
body1.appendChild(divD)

let divD2 = document.createElement('div')
divD2.style.display = 'inline'
body1.appendChild(divD2)

let table = document.createElement('table')
table.border = '1'
divD.appendChild(table)

let trA = document.createElement('tr')
table.appendChild(trA)

let id = 1

const arr = ['ID', 'NAME', 'AGE', 'GENDER']
for (let i = 0; i < arr.length; i++) {
    let thA1 = document.createElement('th')
    thA1.innerText = arr[i]
    trA.appendChild(thA1)
}

let inputName = document.createElement('input')
inputName.placeholder = 'Enter the name'
// inputName.style.display = 'block'
divD2.appendChild(inputName)

let inputAge = document.createElement('input')
inputAge.placeholder = 'Enter the age'
inputAge.style.display = 'block'
divD2.appendChild(inputAge)

let inputGender = document.createElement('input')
inputGender.placeholder = 'Enter the gender'
// inputGender.style.display = 'block'
divD2.appendChild(inputGender)

let ok1 = document.createElement('button')
ok1.innerText = "OK"
divD2.appendChild(ok1)

ok1.addEventListener('click', () => {
    let tr2 = document.createElement('tr')
    table.appendChild(tr2)

    const arr2 = [id, inputName.value, inputAge.value, inputGender.value]

    for (let i = 0; i < arr2.length; i++) {
        let td = document.createElement('td')
        td.innerText = arr2[i]
        tr2.appendChild(td)
    }
    id++
    inputName.value = ''
    inputAge.value = ''
    inputGender.value = ''

})
