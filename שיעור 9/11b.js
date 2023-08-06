const body1 = document.getElementsByTagName('BODY')[0]

const table = document.createElement('table')
body1.appendChild(table)
table.border = '1'

let xTrue = 1
let oTrue = 0

for (let i = 0; i < 3; i++) {
    const tr = document.createElement('tr')
    table.appendChild(tr)
    for (let j = 0; j < 3; j++) {
        const td = document.createElement('td')
        tr.appendChild(td)
        td.style.height = '100px'
        td.style.width = '100px'
        td.addEventListener('click', () => {

            if (xTrue) {
                const x = document.createElement('img')
                x.src = 'https://media.istockphoto.com/id/1276735653/vector/cross-sign-red-hand-drawn-brush-paint-x-letter-handwritten-criss-cross-symbol-painted.jpg?s=612x612&w=0&k=20&c=ldv6LXaUuUoTvfM4539exm4zKFEfthZJNBc-gKHCGgg='
                x.style.height = '100px'
                x.style.width = '100px'
                td.append(x)
                xTrue = 0
                oTrue = 1
            } else {
                const o = document.createElement('img')
                o.src = 'https://www.yalla.co.il/yala/uploads/u10760/zoom/15892853920-1.jpg'
                o.style.height = '100px'
                o.style.width = '100px'
                td.append(o)
                oTrue = 0
                xTrue = 1
            }
        })
    }
}
