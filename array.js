const users = [
    {
        name: 'Andrew',
        age: 30
    },
    {
        name: 'Mac',
        age: 34
    },
    {
        name: 'Doris',
        age: 27
    }
]
//find in array
const user = users.find((user) => user.name === 'Mac')

//convert object to json
console.log(JSON.stringify(user))

//convert json to object
console.log(JSON.parse(JSON.stringify(user)))