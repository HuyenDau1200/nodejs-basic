//Object Destructuring

const user = {
    name: "Huyen",
    age: 24,
    location: "Viet Nam"
}

//The line below using destructuring - the one feature of ES6
// Instead of writing user.name a dozen times, you could destructure the property into a 'name' variable.

const {age, location: address} = user
console.log(age)  //24
console.log(address) //Viet Nam
console.log(user.name) // Huyen
console.log(user.age) // 24

//Destructuring Function Arguments
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}
const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)