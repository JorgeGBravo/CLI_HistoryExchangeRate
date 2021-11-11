const {expect, test} = require('@oclif/test')

describe('convert', () => {
  test
  .stdout()
  .command(['convert'])
  .it('runs convert', ctx => {
    expect(ctx.stdout).to.contain('')
  })

  test
  .stdout()
  .command(['convert', '--amount', '50', '--from', 'EUR', '--to', 'USD'])
  .it('convert  --amount 50 --from EUR --to USD', ctx => {
    expect(ctx.stdout).to.contain('')
  })
})
