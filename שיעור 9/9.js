const body1 = document.getElementsByTagName('BODY')[0]

let id = 1

const input = document.createElement('input')
input.placeholder = 'Enter the text'
input.style.display = 'block'
body1.appendChild(input)

const ok1 = document.createElement('button')
ok1.innerText = "OK"
body1.appendChild(ok1)

const table = document.createElement('table')
body1.appendChild(table)
table.border = '1'

ok1.addEventListener('click', () => {
    
    let imgV = document.createElement('img')
    imgV.style.height = '50px'
    imgV.style.width = '50px'
    imgV.src = 'data:image/jpeg;base64,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'

    let imgP = document.createElement('img')
    imgP.style.height = '50px'
    imgP.style.width = '50px'
    imgP.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvb9Vat-sviRHGclJi1PqZxhqN2ELcrYiwgw&usqp=CAU'
    
    const tr = document.createElement('tr')
    table.appendChild(tr)

    const listChilde = []
    
    listChilde.push(input.value)
    listChilde.push(imgV)
    listChilde.push(imgP)

    for (let i = 0; i < listChilde.length; i++) {
        const td = document.createElement('td')
        td.append(listChilde[i])
        tr.appendChild(td)
    }
    input.value = ''
    
    imgV.addEventListener('click', () => {
        imgV.parentElement.parentElement.firstChild.style.textDecoration = 'line-through'
    })
    
    imgP.addEventListener('click', () => {
        imgP.parentElement.parentElement.remove()
    })
})