const prompt = require('prompt-sync')({ sigint: true})
const {ccLength, findCountry} = require('./functions')
let run = true

while(run) {
    console.clear()
    console.log('\t\t\t---------------------')
    console.log('\t\t\tCountry Code Analyser')
    console.log('\t\t\t---------------------')
    console.log('\n\n\tOperations Available')
    console.log('\t--------------------')
    console.log('\n\t1. Length of Country Code')
    console.log('\n\t2. Find Country Info')
    console.log('\n\t')
    let operation = prompt('   Choose operation (Type the index) : ')
    if(operation == 1) {
        console.log('\t')
        let choice = prompt('   How many digits should the country code has ? : ')
        ccLength(parseInt(choice))
    }
    if(operation == 2) {
        console.log('\t')
        findCountry()
    }
    console.log('\n\n\t')
    let choice = prompt('   Do you want to continue (Y/N): ')

    if(choice != 'Y' && choice != 'y') {
        run = false
    }
}