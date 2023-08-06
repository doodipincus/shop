const users = [
    {
        id: 1,
        cell: "076 291 85 09",
        dob: {
            date: "1987-12-28T17:51:39.366Z",
            age: 35
        },
        email: "besim.mercier@example.com",
        gender: "male",
        address: {
            country: "Switzerland",
            state: "Bern",
            city: "Rheineck",
            street: {
                number: 2560,
                name: "Rue Dugas-Montbel"
            }
        },
        name: {
            title: "Monsieur",
            first: "Besim",
            last: "Mercier"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/57.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg"
        },
        todos: [
            { id: 1, title: 'Lorem ipsum dolor sit.' },
            { id: 2, title: 'Lorem ipsum dolor sit 2.' },
            { id: 3, title: 'Lorem ipsum dolor sit 3.' }

        ]
    },
    {
        id: 2,
        cell: "0172-1546513",
        dob: {
            date: "2000-08-22T19:35:28.279Z",
            age: 22
        },
        email: "emmi.holzer@example.com",
        gender: "male",
        address: {
            country: "Germany",
            state: "Schleswig-Holstein",
            city: "Groß-Bieberau",
            street: {
                number: 9631,
                name: "Marktplatz"
            }
        },
        name: {
            title: "Mr",
            first: "Emmil",
            last: "Holzer"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/23.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/23.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/23.jpg"
        },
        todos: []
    },
    {
        id: 3,
        cell: "62901262",
        dob: {
            date: "1973-03-07T09:15:47.390Z",
            age: 49
        },
        email: "katrine.jorgensen@example.com",
        gender: "male",
        address: {
            country: "Denmark",
            state: "Hovedstaden",
            city: "Silkeboeg",
            street: {
                number: 5234,
                name: "Skansevej"
            }
        },
        name: {
            title: "Prof",
            first: "John",
            last: "Jørgensen"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/78.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/78.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/78.jpg"
        },
        todos: [{
            id: 1, title: 'Lorem ipsum dolor sit.'
        },
        { id: 2, title: 'Lorem ipsum dolor sit 2.' },
        {
            id: 3, title: 'Lorem ipsum dolor sit 3.'
        },
        { id: 4, title: 'Lorem ipsum dolor sit 4.' }]
    },
    {
        id: 4,
        cell: "07096 461710",
        dob: {
            date: "2000-10-12T10:02:37.380Z",
            age: 22
        },
        email: "debbie.hughes@example.com",
        gender: "male",
        address: {
            country: "United Kingdom",
            state: "West Sussex",
            city: "Bradford",
            street: {
                number: 9980,
                name: "Broadway"
            }
        },
        name: {
            title: "Mr",
            first: "Debbie",
            last: "Hughes"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/88.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/88.jpg"
        },
        todos: []
    },
    {
        id: 5,
        cell: "07344 527913",
        dob: {
            date: "1960-01-03T04:10:14.584Z",
            age: 63
        },
        email: "faith.frazier@example.com",
        gender: "male",
        address: {
            country: "United Kingdom",
            state: "Borders",
            city: "Canterbury",
            street: {
                number: 6191,
                name: "King Street"
            }
        },
        name: {
            title: "Mr",
            first: "Faith",
            last: "Frazier"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/16.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/16.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/16.jpg"
        },
        todos: []
    }
];


let div1 = document.getElementsByTagName('DIV')[0]
div1.id = 'father'

for (let i = 0; i < users.length; i++) {
    const userCard = document.createElement('div')
    userCard.id = 'userCard'
    div1.appendChild(userCard)

    let img = document.createElement('img')
    img.src = users[i].picture.thumbnail
    img.alt = 'User img'
    userCard.appendChild(img)

    img.addEventListener('click', () => {
        changeColor(userCard)
    })

    let userName = document.createElement('h4')
    userName.innerText = `${users[i].name.title} ${users[i].name.first} ${users[i].name.last}`
    userName.style.display = 'inline'
    userCard.appendChild(userName)

    userName.addEventListener('click', () => {
        changeColor(userCard)
    })

    const hEmail = document.createElement('h4')
    hEmail.innerText = 'Email'
    userCard.appendChild(hEmail)

    const editEmail = document.createElement('button')
    editEmail.innerText = 'Edit Email'
    userCard.appendChild(editEmail)

    let pEmail = document.createElement('p')
    pEmail.innerText = users[i].email
    pEmail.id = 'pEmail'
    userCard.appendChild(pEmail)

    const inputChangeEmail = document.createElement('input')
    userCard.appendChild(inputChangeEmail)
    inputChangeEmail.style.display = 'none'

    let p = 1
    let o = 0
    // לשנות את שמות המשתנים האלו )וכל איפה שהם מופיעים

    editEmail.addEventListener('click', () => {
        if (p) {
            inputChangeEmail.value = pEmail.innerText
            pEmail.style.display = 'none'
            inputChangeEmail.style.display = 'block'
            editEmail.innerText = 'Update'
            p = 0
            o = 1
        } else if (o) {
            pEmail.innerText = inputChangeEmail.value
            pEmail.style.display = 'block'
            inputChangeEmail.style.display = 'none'
            editEmail.innerText = 'Edit Email'
            o = 0
            p = 1
        }
    })
    const hAddress = document.createElement('h4')
    hAddress.innerText = `street ${users[i].address.street.name} ${users[i].address.street.number}, ${users[i].address.city}`
    userCard.appendChild(hAddress)

    const additional = document.createElement('button')
    additional.innerText = 'View more details'
    userCard.appendChild(additional)

    let divAdditional = document.createElement('div')
    divAdditional.style.display = 'none'

    const hAdditional = document.createElement('h4')
    hAdditional.innerText = 'additional'
    divAdditional.appendChild(hAdditional)

    const hDateOfBirth = document.createElement('h6')
    hDateOfBirth.innerText = 'Date of birth'
    divAdditional.appendChild(hDateOfBirth)

    let pDateOfBirth = document.createElement('p')
    pDateOfBirth.innerText = `${users[i].dob.date.slice(8, 10)}-${users[i].dob.date.slice(5, 7)}-${users[i].dob.date.slice(0, 4)}`
    divAdditional.appendChild(pDateOfBirth)

    const hCell = document.createElement('h6')
    hCell.innerText = 'Cell'
    divAdditional.appendChild(hCell)

    let pCell = document.createElement('p')
    pCell.innerText = users[i].cell
    divAdditional.appendChild(pCell)

    let createMoreDetails = 1
    let findOutMore = 0

    additional.addEventListener('click', () => {

        if (createMoreDetails) {
            additional.innerText = 'Hide more details'
            divAdditional.style.display = 'block'

            createMoreDetails = 0
            findOutMore = 1

        } else if (findOutMore) {
            divAdditional.style.display = 'none'
            additional.innerText = 'View more details'

            createMoreDetails = 1
            findOutMore = 0
        }
    })
    const removeUser = document.createElement('button')
    removeUser.innerText = 'Remove User'
    userCard.appendChild(removeUser)

    removeUser.addEventListener('click', () => {
        if (confirm("Delete user?") === true) {
            removeUser.parentElement.remove()
            users.splice(i, 1)
            // שגיאה
            // לבדוק איך ספלייס עובד (בעיקר איזה ערכים שמים
            console.log(users)
        }
    })
    const additionalActions = document.createElement('button')
    additionalActions.innerText = 'See more actions'
    userCard.appendChild(additionalActions)
    
    const divAdditionalActions = document.createElement('div')
    divAdditionalActions.style.display = 'none'
    
    const changeImg = document.createElement('h4')
    changeImg.innerText = 'Change img'
    divAdditionalActions.appendChild(changeImg)

    const inputChangeImg = document.createElement('input')
    inputChangeImg.value = users[i].picture.thumbnail
    divAdditionalActions.appendChild(inputChangeImg)

    const buttonChangeImg = document.createElement('button')
    buttonChangeImg.innerText = 'Change'
    divAdditionalActions.appendChild(buttonChangeImg)

    buttonChangeImg.addEventListener('click', () => {
        img.src = inputChangeImg.value
    })

    const hHobby = document.createElement('h4')
    hHobby.innerText = 'Hobbes'
    divAdditionalActions.appendChild(hHobby)

    const ulHobby = document.createElement('ul')
    divAdditionalActions.appendChild(ulHobby)

    for (let e = 0; e < users[i].todos; e++) {
        const liHobby = document.createElement('li')
        liHobby.innerText = users[i].todos[e]
        ulHobby.appendChild(liHobby)
    }
    const hAddHobby = document.createElement('h4')
    hAddHobby.innerText = 'Add hobby'
    divAdditionalActions.appendChild(hAddHobby)

    const inputHobby = document.createElement('input')
    inputHobby.placeholder = 'Add hobby'
    divAdditionalActions.appendChild(inputHobby)

    const buttonAddHobby = document.createElement('button')
    buttonAddHobby.innerText = 'Add'
    divAdditionalActions.appendChild(buttonAddHobby)

    buttonAddHobby.addEventListener('click', () => {
        const liAddHobby = document.createElement('li')
        liAddHobby.innerText = inputHobby.value
        ulHobby.appendChild(liAddHobby)
        inputHobby.value = ''
    })

    let x = 1
    let y = 0
    // לשנות את שמות המשתנים האלו )וכל איפה שהם מופיעים

    additionalActions.addEventListener('click', () => {

        if (x) {
            additionalActions.innerText = 'lalala'
            divAdditionalActions.style.display = 'block'
            x = 0
            y = 1
        } else if (y) {
            additionalActions.innerText = 'See more actions'
            divAdditionalActions.style.display = 'none'
            y = 0
            x = 1
        }
    })
    userCard.appendChild(divAdditional)

    userCard.appendChild(divAdditionalActions)
}
function changeColor(userCard) {
    console.log('0')

    if (userCard.style.backgroundColor === 'yellow') {
        console.log('2')
        // לבדוק איך כותבים צבע
        userCard.style.backgroundColor = 'lightblue'
    } else if (userCard.style.backgroundColor === 'lightblue') {
        console.log('1')
        userCard.style.backgroundColor = 'yellow'
    }
    // לחשבן עם צבעי הרקע הסופיים
}


// למה פונקציית כולור לא עובדת

// האם אפשר להכניס את כל ההחלפות בפונקציה) ולשלוח את הדיב הרלוונטי

// לעצב