const {expect, test} = require('@oclif/test')
const f = new Date()

describe('history', () => {
  test
  .stdout()
  .command(['history'])
  .it('runs history', ctx => {
    expect(ctx.stdout).to.contain('"date":"' + f.getFullYear() + '-' + f.getMonth() + '-' + f.getDate() + '","base":"EUR","symbol":"USD","rate":')
  })

  test
  .stdout()
  .command(['history', '--start', '2021-02-01', '--end', '2021-02-02', '--base', 'USD', '--symbol', 'EUR'])
  .it('runs history -start 2021-02-01 -end 2021-02-02 -base USD -symbol EUR', ctx => {
    expect(ctx.stdout).to.contain('{"date":"2021-02-01","base":"USD","symbol":"EUR","rate":0.82754}\n{"date":"2021-02-02","base":"USD","symbol":"EUR","rate":0.83029}')
  })
})
