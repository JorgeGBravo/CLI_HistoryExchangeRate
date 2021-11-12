const {expect, test} = require('@oclif/test')

describe('convert', () => {
  test
  .stdout()
  .command(['convert'])
  .it('runs convert', ctx => {
    expect(typeof ctx.stdout === typeof 1.0)
  })

  test
  .stdout()
  .command(['convert', '--amount', '50', '--from', 'EUR', '--to', 'USD'])
  .it('convert  --amount 50 --from EUR --to USD', ctx => {
    expect(typeof ctx.stdout === typeof 1.0)
  })
})
