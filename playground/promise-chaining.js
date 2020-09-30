require('../src/db/mongoose')
const User = require('../src/models/user')

//5ec5a1898d13054d7464b5aa

// User.findByIdAndUpdate('5ec5a1898d13054d7464b5aa', { age: 1 }).then(user => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then(result => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return { user, count }
}

updateAgeAndCount('5ec5a1898d13054d7464b5aa', 23).then(result => {
    console.log(`User-ul ${result.user.name} a fost modificat, iar numarul total este ${result.count}`)
}).catch(e => {
    console.log(e)
})