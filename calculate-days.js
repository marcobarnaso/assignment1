const yargs = require('yargs')
const calculateDays = require('./function')

/**use:
 * calculate-days calc help -> see the calc command help
 * calculate-days calc --date="08/25/2020" -> see the amount of days that have passed from that date to today
 */

yargs.command({
    command: 'calc',
    describe: 'Please input the date you want to calculate from today',
    builder: {
        date: {
            describe: 'Example: use the command: calculate-days calc --date="08/25/2020"',
            demandOption: true,
            type: 'string',
        }
    },

    handler(argv) {
        calculateDays(argv.date)
    }
})

yargs.parse()




