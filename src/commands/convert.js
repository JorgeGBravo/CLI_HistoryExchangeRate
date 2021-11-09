const {Command, flags} = require('@oclif/command')
const axios = require('axios')

class ConvertCommand extends Command {
  async run() {
    const {flags} = this.parse(ConvertCommand)
    const amount = flags.amount || '1'
    const from = flags.from || 'EUR'
    const to = flags.to || 'USD'
    const host = 'https://api.frankfurter.app/'
    const url = host + 'latest?amount=' + amount + '&from=' + from + '&to=' + to
    this.call(url)
  }

  async call(url) {
    const data = await axios.get(url)
    const values = data.data.rates
    // eslint-disable-next-line guard-for-in
    for (let value in values) {
      this.log(values[value])
    }
  }
}

ConvertCommand.description = `
Currency converter.
`

ConvertCommand.flags = {
  amount: flags.integer({char: 'a', description: 'amount of change'}),
  from: flags.string({char: 'f', description: 'currency from change'}),
  to: flags.string({char: 't', description: 'currency to change'}),
}

module.exports = ConvertCommand

