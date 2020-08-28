const chalk = require('chalk')
const today = new Date()

const calculateDays = (data) => {
    const date = new Date(data)
    const difference = today.getTime() - date.getTime()
    const result = difference / (1000 * 3600 * 24)

    if (result < 1) {
        return console.log('Please input a date before today')
    } else if(isNaN(result) == true) {
        return console.log('Please input a valid date') 
    }

    console.log(chalk.blue.inverse('it has passed ' + Math.floor(result) + ' days since ' + data)) 
}

module.exports = calculateDays