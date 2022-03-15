const codes = [
    {
        name: 'Canada',
        countryCode: '+1'
    },
    {
        name: 'Germany',
        countryCode: '+49'
    },
    {
        name: 'India',
        countryCode: '+91'
    },
    {
        name: 'United Kingdom',
        countryCode: '+44'
    }
]

let LENGTH = 2
let counter = 0

for(let i = 0; i < codes.length; i++) {
    if(codes[i].countryCode.length == LENGTH + 1) {
        console.log(`Country : ${codes[i].name} | Code : ${codes[i].countryCode}`)
        counter++
    }
}
console.log(`There are ${counter} countries with ${LENGTH} digit Country Code`)