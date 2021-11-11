const {Command, flags} = require('@oclif/command')
const axios = require('axios')

class HistoryCommand extends Command {
  async run() {
    const {flags} = this.parse(HistoryCommand)
    const host = 'https://api.frankfurter.app/'
    const f = new Date()
    const base = flags.base || 'EUR'
    const symbol = flags.symbol || 'USD'
    const start = flags.start || f.getFullYear() + '-' + f.getMonth() + '-' + f.getDate()
    const end = flags.end || f.getFullYear() + '-' + f.getMonth() + '-' + f.getDate()
    const url = host + start + '..' + end + '?&from=' + base + '&to=' + symbol
    await this.call(url)
  }

  async call(url) {
    const data = await axios.get(url)
    let dataRates = data.data.rates
    const dates = []
    const symbols = []
    const rates = []

    // eslint-disable-next-line guard-for-in
    for (let key in dataRates) {
      let dataKey = dataRates[key]
      // eslint-disable-next-line guard-for-in
      for (let value in dataKey) {
        dates.push(key)
        symbols.push(value)
      }
    }

    for (let i = 0; i < dates.length; i++) {
      let dataRatesDates = dataRates[dates[i]]
      // eslint-disable-next-line guard-for-in
      for (let value in dataRatesDates) {
        rates.push(dataRatesDates[value])
      }
    }

    for (let i = 0; i < dates.length; i++) {
      //  ./exrates history --start 2021-02-01 --end 2021-02-02 --base USD --symbol EUR
      this.log(JSON.stringify({date: dates[i], base: data.data.base, symbol: symbols[i], rate: rates[i]}))
    }
  }
}

HistoryCommand.description = `
Tool to easily collect historical exchange rates, between currencies.
Example:
          history --start 2021-02-01 --end 2021-02-02 --base USD --symbol EUR
`

HistoryCommand.flags = {
  base: flags.string({char: 'b', description: 'type of currency'}),
  symbol: flags.string({char: 't', description: 'currency to change'}),
  start: flags.string({char: 's', description: 'start date'}),
  end: flags.string({char: 'e', description: 'end date'}),
}

module.exports = HistoryCommand
