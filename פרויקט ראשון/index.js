const data = [
    {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 3.9, count: 120 }
    },
    {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 4.1, count: 259 }
    },
    {
        id: 3,
        title: 'Mens Cotton Jacket',
        price: 55.99,
        description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 4.7, count: 500 }
    },
    {
        id: 4,
        title: 'Mens Casual Slim Fit',
        price: 15.99,
        description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 2.1, count: 430 }
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 4.6, count: 400 }
    },
    {
        id: 6,
        title: 'Solid Gold Petite Micropave ',
        price: 168,
        description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 3.9, count: 70 }
    },
    {
        id: 7,
        title: 'White Gold Plated Princess',
        price: 9.99,
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 3, count: 400 }
    },
    {
        id: 8,
        title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        price: 10.99,
        description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 1.9, count: 100 }
    },
    {
        id: 9,
        title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
        price: 64,
        description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 3.3, count: 203 }
    },
    {
        id: 10,
        title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
        price: 109,
        description: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/ write speeds of up to 535MB / s / 450MB / s(Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.) ',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 2.9, count: 470 }
    },
    {
        id: 11,
        title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
        price: 109,
        description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC(Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 4.8, count: 319 }
    },
    {
        id: 12,
        title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
        price: 114,
        description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 4.8, count: 400 }
    },
    {
        id: 13,
        title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
        price: 599,
        description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 2.9, count: 250 }
    },
    {
        id: 14,
        title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
        price: 999.99,
        description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 2.2, count: 140 }
    },
    {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description: 'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 2.6, count: 235 }
    },
    {
        id: 16,
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 2.9, count: 340 }
    },
    {
        id: 17,
        title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
        price: 39.99,
        description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 3.8, count: 679 }
    },
    {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 4.7, count: 130 }
    },
    {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description: '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 4.5, count: 146 }
    },
    {
        id: 20,
        title: 'DANVOUY Womens T Shirt Casual Cotton Short',
        price: 12.99,
        description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual / Office / Beach / School / Home / Street.Season: Spring, Summer, Autumn, Winter.',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        quantity: Math.floor(Math.random() * 100),
        rating: { rate: 3.6, count: 145 }
    }
]

const main = document.getElementsByTagName('body')[0]
main.id = 'main'

const heder = document.createElement('div')
heder.id = 'header'
main.appendChild(heder)

const startHeder = document.createElement('div')
startHeder.id = 'startHeader'
heder.appendChild(startHeder)

const pHeder = document.createElement('p')
pHeder.innerText = 'Inventory Managment'
startHeder.appendChild(pHeder)

const icons = document.createElement('span')
startHeder.appendChild(icons)

const homeIcon = document.createElement('button')
homeIcon.classList.add('icons')
homeIcon.id = 'home_end_add'
homeIcon.innerHTML = '<i id="editIcon" class="material-icons">home</i>'
icons.appendChild(homeIcon)

const addIcon = document.createElement('button')
addIcon.classList.add('icons')
addIcon.id = 'home_end_add'
addIcon.innerHTML = '<i id="editIcon" class="material-icons">add_circle_outline</i>'
icons.appendChild(addIcon)

const topHeder = document.createElement('div')
topHeder.id = 'topHeader'
heder.appendChild(topHeder)

const buttons = document.createElement('div')
topHeder.appendChild(buttons)

const buttonAll = document.createElement('button')
buttonAll.innerText = 'All Products'
buttonAll.classList.add("button-styled")
buttons.appendChild(buttonAll)

const buttonMen = document.createElement('button')
buttonMen.innerText = 'Men'
buttonMen.classList.add("button-styled")
buttons.appendChild(buttonMen)

const buttonWomen = document.createElement('button')
buttonWomen.innerText = 'Women'
buttonWomen.classList.add("button-styled")
buttons.appendChild(buttonWomen)

const buttonJewelery = document.createElement('button')
buttonJewelery.innerText = 'Jewelery'
buttonJewelery.classList.add("button-styled")
buttons.appendChild(buttonJewelery)

const buttonElectronics = document.createElement('button')
buttonElectronics.innerText = 'Electronics'
buttonElectronics.classList.add("button-styled")
buttons.appendChild(buttonElectronics)

const totalSearch = document.createElement('span')
totalSearch.style.display = 'flex'
topHeder.appendChild(totalSearch)

const search = document.createElement('input')
search.placeholder = 'Search'
search.type = 'search'
search.id = 'search'
totalSearch.appendChild(search)

const magnifyingGlass = document.createElement('button')
magnifyingGlass.id = 'magnifyingGlass'
magnifyingGlass.innerHTML = '<i id="editIcon" class="material-icons">search</i>'
totalSearch.appendChild(magnifyingGlass)

const homePage = document.createElement('div')
homePage.id = 'homePage'
main.appendChild(homePage)
homePage.style.display = 'none'

const div1 = document.createElement('div')
div1.id = 'productPageFather'
main.appendChild(div1)
div1.style.display = 'none'

const pageEdit = document.createElement('div')
pageEdit.id = 'pageEdit'
main.appendChild(pageEdit)
pageEdit.style.display = 'none'


function constructorCard(element) {

    // כרטיס מוצר

    homePage.style.display = ''

    const productCard = document.createElement('div')
    productCard.id = 'productCard'
    homePage.appendChild(productCard)

    const imgDiv = document.createElement('div')
    imgDiv.id = 'imgDiv'
    productCard.appendChild(imgDiv)

    const productCardImg = document.createElement('img')
    productCardImg.src = element.image
    imgDiv.appendChild(productCardImg)

    const topCard = document.createElement('div')
    topCard.id = 'topCard';
    productCard.appendChild(topCard)

    const productInformation = document.createElement('p')
    productInformation.innerText = element.title
    topCard.appendChild(productInformation)

    const hr = document.createElement('hr')
    topCard.appendChild(hr)

    const iconsBonus = document.createElement('div')
    iconsBonus.id = 'iconsBonus'
    topCard.appendChild(iconsBonus)

    const plus1 = document.createElement('button')
    plus1.classList.add('icons')
    plus1.innerHTML = '<i id="editIcon" class="material-icons">exposure_plus_1</i>'
    iconsBonus.appendChild(plus1)

    const neg1 = document.createElement('button')
    neg1.classList.add('icons')
    neg1.innerHTML = '<i id="editIcon" class="material-icons">exposure_neg_1</i>'
    iconsBonus.appendChild(neg1)

    const deleteIcon = document.createElement('button')
    deleteIcon.classList.add('icons')
    deleteIcon.innerHTML = '<i id="editIcon" class="material-icons">delete</i>'
    topCard.appendChild(deleteIcon)

    const editIcon = document.createElement('button')
    editIcon.classList.add('icons')
    editIcon.innerHTML = '<i id="editIcon" class="material-icons">edit</i>'
    topCard.appendChild(editIcon)

    // עמוד מוצר

    const productPageTitle = document.createElement('h1')
    productPageTitle.innerText = 'Product Page'

    const productPage = document.createElement('div')
    productPage.id = 'productPage'

    const productPageImg = document.createElement('img')
    productPageImg.id = 'productPageImg'
    productPageImg.src = element.image
    productPage.appendChild(productPageImg)

    const informationOnTheProductPage = document.createElement('div')
    productPage.appendChild(informationOnTheProductPage)

    const hTitle = document.createElement('h4')
    hTitle.innerText = 'Title'
    informationOnTheProductPage.appendChild(hTitle)

    const pTitle = document.createElement('p')
    pTitle.innerText = element.title
    informationOnTheProductPage.appendChild(pTitle)

    const hDescription = document.createElement('h4')
    hDescription.innerText = 'Description'
    informationOnTheProductPage.appendChild(hDescription)

    const pDescription = document.createElement('p')
    pDescription.innerText = element.description
    informationOnTheProductPage.appendChild(pDescription)

    const hCategory = document.createElement('h4')
    hCategory.innerText = 'Category'
    informationOnTheProductPage.appendChild(hCategory)

    const pCategory = document.createElement('p')
    pCategory.innerText = element.category
    informationOnTheProductPage.appendChild(pCategory)

    const hPrice = document.createElement('h4')
    hPrice.innerText = 'Price'
    informationOnTheProductPage.appendChild(hPrice)

    const pPrice = document.createElement('p')
    pPrice.innerText = element.price
    informationOnTheProductPage.appendChild(pPrice)

    const hQuantity = document.createElement('h4')
    hQuantity.innerText = 'Quantity'
    informationOnTheProductPage.appendChild(hQuantity)

    const pQuantity = document.createElement('p')
    pQuantity.innerText = element.quantity
    informationOnTheProductPage.appendChild(pQuantity)

    // עמוד עדכון מוצר

    const editProduct = document.createElement('div')

    const hEdit = document.createElement('h1')
    hEdit.innerText = 'Edit Product'
    editProduct.appendChild(hEdit)

    const labelTitle = document.createElement('label')
    editProduct.appendChild(labelTitle)
    labelTitle.innerText = 'Title'
    const inputTitle = document.createElement('input')
    inputTitle.placeholder = element.title
    labelTitle.appendChild(inputTitle)

    const labelCategory = document.createElement('label')
    editProduct.appendChild(labelCategory)
    labelCategory.innerText = 'Category'
    const inputCategory = document.createElement('input')
    inputCategory.placeholder = element.category
    labelCategory.appendChild(inputCategory)

    const labelPrice = document.createElement('label')
    editProduct.appendChild(labelPrice)
    labelPrice.innerText = 'Price'
    const inputPrice = document.createElement('input')
    inputPrice.placeholder = element.price
    labelPrice.appendChild(inputPrice)

    const labelImg = document.createElement('label')
    editProduct.appendChild(labelImg)
    labelImg.innerText = 'Img'
    const inputImg = document.createElement('input')
    inputImg.placeholder = element.image
    labelImg.appendChild(inputImg)

    const labelQuantity = document.createElement('label')
    editProduct.appendChild(labelQuantity)
    labelQuantity.innerText = 'Quantity'
    const inputQuantity = document.createElement('input')
    inputQuantity.placeholder = element.quantity
    labelQuantity.appendChild(inputQuantity)

    const labelDescription = document.createElement('label')
    editProduct.appendChild(labelDescription)
    labelDescription.innerText = 'Description'
    const inputDescription = document.createElement('input')
    inputDescription.placeholder = element.description
    labelDescription.appendChild(inputDescription)

    const buttonEdit = document.createElement('button')
    buttonEdit.id = 'buttonEdit'
    buttonEdit.innerText = 'EDIT'
    editProduct.appendChild(buttonEdit)


    buttonEdit.addEventListener('click', () => {
        div1.style.display = ''
        pageEdit.style.display = 'none'

        div1.appendChild(productPageTitle)
        div1.appendChild(productPage)

        element.title = inputTitle.value
        element.description = inputDescription.value
        element.category = inputCategory.value
        element.price = inputPrice.value
        element.quantity = inputQuantity.value
        element.image = inputImg.value

        pTitle.innerText = inputTitle.value
        pDescription.innerText = inputDescription.value
        pCategory.innerText = inputCategory.value
        pPrice.innerText = inputPrice.value
        pQuantity.innerText = inputQuantity.value
        productCardImg.src = inputImg.value
        productPageImg.src = inputImg.value

    })

    imgDiv.addEventListener('click', () => {

        homePage.style.display = 'none'
        div1.style.display = ''

        div1.appendChild(productPageTitle)
        div1.appendChild(productPage)
    })


    deleteIcon.addEventListener('click', () => {
        if (confirm("Delete Product?") === true) {
            deleteIcon.parentElement.parentElement.remove()
            
        }
    })

    editIcon.addEventListener('click', () => {

        div1.style.display = 'none'
        homePage.style.display = 'none'
        pageEdit.style.display = ''

        pageEdit.appendChild(editProduct)
        // למה זה עובד
    })
}

// הוספת מוצר

const addProduct = document.createElement('div')
addProduct.id = 'addProduct'
main.appendChild(addProduct)
addProduct.style.display = 'none'

const hAdd = document.createElement('h1')
hAdd.innerText = 'Add New Product'
addProduct.appendChild(hAdd)

const addLabelTitle = document.createElement('label')
addProduct.appendChild(addLabelTitle)
addLabelTitle.innerText = 'Title'
const addInputTitle = document.createElement('input')
addInputTitle.placeholder = 'Add Title'
addLabelTitle.appendChild(addInputTitle)

const addLabelCategory = document.createElement('label')
addProduct.appendChild(addLabelCategory)
addLabelCategory.innerText = 'Category'
const addInputCategory = document.createElement('input')
addInputCategory.placeholder = 'Add Category'
addLabelCategory.appendChild(addInputCategory)

const addLabelPrice = document.createElement('label')
addProduct.appendChild(addLabelPrice)
addLabelPrice.innerText = 'Price'
const addInputPrice = document.createElement('input')
addInputPrice.placeholder = 'Add Price'
addLabelPrice.appendChild(addInputPrice)

const addLabelImg = document.createElement('label')
addProduct.appendChild(addLabelImg)
addLabelImg.innerText = 'ing'
const addInputImg = document.createElement('input')
addInputImg.placeholder = 'Add URL Img'
addLabelImg.appendChild(addInputImg)

const addLabelQuantity = document.createElement('label')
addProduct.appendChild(addLabelQuantity)
addLabelQuantity.innerText = 'Quantity'
const addInputQuantity = document.createElement('input')
addInputQuantity.placeholder = 'Add Quantity'
addLabelQuantity.appendChild(addInputQuantity)

const addLabelDescription = document.createElement('label')
addProduct.appendChild(addLabelDescription)
addLabelDescription.innerText = 'Description'
const addInputDescription = document.createElement('input')
addInputDescription.placeholder = 'Add Description'
addLabelDescription.appendChild(addInputDescription)

const buttonAdd = document.createElement('button')
buttonAdd.id = 'buttonAdd'
buttonAdd.innerText = 'ADD'
addProduct.appendChild(buttonAdd)


addIcon.addEventListener('click', () => {
    addProduct.style.display = ''
    homePage.style.display = 'none'
    div1.style.display = 'none'
    pageEdit.style.display = 'none'
})

buttonAdd.addEventListener('click', () => {
    const newProduct = {
        title: addInputTitle.value,
        price: addInputPrice.value,
        description: addInputDescription.value,
        category: addInputCategory.value,
        image: addInputImg.value,
        quantity: addInputQuantity.value,
    }
    data.unshift(newProduct)
    constructor(data)
})

homeIcon.addEventListener('click', () => {
    constructor(data)
})

const footer = document.createElement('div')
footer.id = 'footer'
footer.innerText = 'בניית אתרים: דודי, טל- 0533114605'
main.appendChild(footer)

constructor(data)

function constructor(listObject) {

    search.value = ''

    homePage.replaceChildren()
    pageEdit.replaceChildren()
    div1.replaceChildren()
    addProduct.style.display = 'none'

    listObject.forEach(element => {
        constructorCard(element);
    });
}

function categories(category) {
    let listObject = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].category === category) {
            listObject.push(data[i])
        }
    }
    constructor(listObject)
}

buttonAll.addEventListener('click', () => {
    constructor(data)
})

buttonMen.addEventListener('click', () => {
    categories("men's clothing")
})

buttonWomen.addEventListener('click', () => {
    categories("women's clothing")
})

buttonJewelery.addEventListener('click', () => {
    categories('jewelery')
})

buttonElectronics.addEventListener('click', () => {
    categories('electronics')
})

magnifyingGlass.addEventListener('click', () => {
    const searchResults = []
    for(let i = 0; i < data.length; i++){
        if(data[i].title.toLowerCase().includes(search.value)){
            searchResults.unshift(data[i])
        }
    }
    constructor(searchResults)
})