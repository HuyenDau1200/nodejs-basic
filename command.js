//use command

// const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
// console.log('Removing note!')
// }

//use yargs to work with command line arguments
const yargs = require('yargs')
yargs.version('1.1.0')
yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function () {
        console.log("Adding a new note!")
    }
})

console.log(yargs.argv)
/*
Run command: 'node app.js add'
Result: 'Add a new note'
*/

//use yargs part II
//Adding command options, builder title, body
yargs.command({
    command: "add",
    describe: "Add a new note!",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        console.log("Title: " + argv.title);
        console.log("Body: " + argv.body);
    }
})
/*
Run comand: 'note command.js add --title='New title' --body='New body'
Result: '{
  _: [ 'add' ],
  title: 'New title',
  body: 'New body',
  '$0': 'command.js'
}'
*/