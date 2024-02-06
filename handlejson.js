const book = {
    title: "The best seller book",
    author: "Tony Dungz"
}

//Convert Javascript object into JSON string
const bookJson = JSON.stringify(book)
console.log(bookJson)

//Convert JSON string into object
const bookObject = JSON.parse(bookJson)
console.log(bookObject.title);