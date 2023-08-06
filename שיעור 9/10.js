const arrayOfObjects = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        address: { city: "New York", street: "123 Main St" },
        children: [
            { name: "Alice", age: 5 },
            { name: "Bob", age: 8 }
        ]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 28,
        address: { city: "Los Angeles", street: "456 Elm St" },
        children: [
            { name: "Eva", age: 3 },
        ]
    },
    {
        id: 3,
        name: "Michael Johnson",
        age: 45,
        address: { city: "Chicago", street: "789 Oak St" },
        children: []
    },
    {
        id: 4,
        name: "Emily Williams",
        age: 35,
        address: { city: "Houston", street: "1010 Maple Ave" },
        children: [
            { name: "Oliver", age: 12 },
            { name: "Sophia", age: 10 },
            { name: "Lucas", age: 7 }
        ]
    },
    {
        id: 5,
        name: "Daniel Brown",
        age: 40,
        address: { city: "San Francisco", street: "222 Pine St" },
        children: [
            { name: "Lily", age: 6 },
        ]
    }
];

let body1 = document.getElementsByTagName('body')[0]
body1.style.display = 'flex'

const constructor = function (person) {
    for (let i = 0; i < person.length; i++) {

        let div1 = document.createElement('div')
        div1.style.height = '350px'
        div1.style.width = '250px'
        function generateRandomColor() {
            let maxVal = 0xFFFFFF;
            let randomNumber = Math.random() * maxVal;
            randomNumber = Math.floor(randomNumber);
            randomNumber = randomNumber.toString(16);
            let randColor = randomNumber.padStart(6, 0);
            return `#${randColor.toUpperCase()}`
        } div1.style.backgroundColor = generateRandomColor()
        div1.style.borderWidth = '2px'
        div1.style.borderColor = 'black'
        div1.style.borderStyle = 'dotted'
        div1.style.margin = '4px'
        div1.style.boxShadow = '10px 10px 14px rgb(140,140,140)'
        div1.style.borderRadius = '15px'
        div1.style.display = 'inline'

        body1.appendChild(div1)

        let h1 = document.createElement('h1')
        h1.innerText = person[i].name
        div1.appendChild(h1)

        let p1 = document.createElement('p')
        p1.innerText = person[i].age
        div1.appendChild(p1)

        let p2 = document.createElement('p')
        p2.innerText = person[i].address.city + ', ' + person[i].address.street
        div1.appendChild(p2)

        if (person[i].children.length) {
            let p3 = document.createElement('p')
            p3.innerText = 'kids:'
            div1.appendChild(p3)
        }

        const kids = function (children) {
            let ul1 = document.createElement('ul')
            div1.appendChild(ul1)

            for (let j = 0; j < children.length; j++) {

                let li1 = document.createElement('li')
                li1.innerText = children[j].name
                ul1.appendChild(li1)

                let ul2 = document.createElement('ul')
                li1.appendChild(ul2)

                let li2 = document.createElement('li')
                li2.innerText = children[j].age
                ul2.appendChild(li2)
            }
        }
        kids(person[i].children)
    }
}
constructor(arrayOfObjects)
