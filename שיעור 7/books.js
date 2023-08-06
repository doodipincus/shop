class Book {
    constructor(name, date, genre, author) {
        this.name = name
        this.date = date
        this.genre = genre
        this.author = author
    }

    print(params) {
        for (let i in params) {
            if (i === "author"){
                for (let j in params.author) {
                    console.log(j, params.author[j])
                }
            }else {
                console.log(i, params[i])
            }
        }
    }

    setNameBook(book, newName) {
        book.name = newName
    }

    setDate(book, newDate) {
        book.date = newDate
    }

    setGenre(book, newGenre) {
        book.genre = newGenre
    }

    setAuthor(book, newAuthor) {
        if (newAuthor.age < 15 || newAuthor.age > 80) {
            console.log("Error")
        }else {
            book.author = newAuthor
        }
    }

    addBookToLibary(book, libary) {
        libary[book.name] = book
    }

}


// שאלה 1
let a = new Book('doodi', '9/1/00', 'metach', {firstName : 'doodi', lastName : 'pincus', age : 35})
console.log(a)
// שאלה 2
a.print(a)
// שאלה 3
a.setNameBook(a, "michel")
console.log(a)
// שאלה 4
a.setDate(a, "1/1/00")
console.log(a)
// שאלה 5
a.setGenre(a, "roman")
console.log(a)
// שאלה 6
a.setAuthor(a, {firstName : 'doodi', lastName : 'cohen', age : 67})
console.log(a)
// שאלה 9
let w = new Book('a', 'a', 'a', {firstName : 'a', lastName : 'a', age : 35})
let x = new Book('b', 'b', 'b', {firstName : 'b', lastName : 'b', age : 35})
let y = new Book('c', 'c', 'c', {firstName : 'c', lastName : 'c', age : 35})
let z = new Book('d', 'd', 'd', {firstName : 'd', lastName : 'd', age : 35})
const libary = {}
w.addBookToLibary(w, libary)
x.addBookToLibary(x, libary)
y.addBookToLibary(y, libary)
z.addBookToLibary(z, libary)
console.log(Object.entries(libary))