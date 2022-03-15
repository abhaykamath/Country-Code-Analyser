const {codes} = require('./countryCode')
const prompt = require('prompt-sync')({sigint:true})

function ccLength(LENGTH) {
    let counter = 0
    for(let i = 0; i < codes.length; i++) {
        if(codes[i].dialCode.length == LENGTH+1) {
            counter++
            console.log(`\n\t${counter}) Country : ${codes[i].name} | Code : ${codes[i].dialCode}`)
        }
    }
    console.log(`\n\tThere are ${counter} countries with ${LENGTH} digit Country Code`)
}

function findCountry() {
    console.log('\n')
    let code = prompt(`        Enter country code (please suffix with '+'): `)
    for(let i = 0; i < codes.length; i++) {
        if(codes[i].dialCode == code) {
            console.log(`\n\tCountry : ${codes[i].name} | Code : ${codes[i].dialCode}`)
        }
    }
}

module.exports = {
    ccLength,
    findCountry
}