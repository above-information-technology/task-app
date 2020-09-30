require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findByIdAndRemove('5ec59b8e39978d52f0acd914').then(task => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then(result => {
//     console.log(`${result} uncompleted tasks`)
// }).catch(e => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const deletedTask = await Task.findByIdAndDelete(id)
    const countUncompleted = await Task.countDocuments({ completed: false })
    return { deletedTask, countUncompleted }
}

deleteTaskAndCount('5ec5a2932bc30e53fcfafaad').then(result => {
    console.log(`A fost sters un numar de ${result.countUncompleted} task-uri`)
}).catch(e => {
    console.log(e)
})