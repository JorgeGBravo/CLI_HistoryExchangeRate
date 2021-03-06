exrates
=======

CLI based on API Frankfurter and generates a tool for exchange rates quickly

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/exrates.svg)](https://npmjs.org/package/exrates)
[![Downloads/week](https://img.shields.io/npm/dw/exrates.svg)](https://npmjs.org/package/exrates)
[![License](https://img.shields.io/npm/l/exrates.svg)](https://github.com/JorgeGBravo/exrates/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g exrates
$ exrates COMMAND
running command...
$ exrates (-v|--version|version)
exrates/0.0.0 win32-x64 node-v14.16.0
$ exrates --help [COMMAND]
USAGE
  $ exrates COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`exrates help [COMMAND]`](#exrates-help-command)
* [`exrates history`](#exrates-history)
* [`exrates convert`](#exrates-convert)


## `exrates help [COMMAND]`

display help for exrates

```
USAGE
  $ exrates help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `exrates history`

Tool to easily collect historical exchange rates, between currencies.

```
USAGE
  $ exrates history

OPTIONS
  -b, --base=base      type of currency
  -e, --end=end        end date
  -s, --start=start    start date
  -t, --symbol=symbol  currency to change

DESCRIPTION
  Tool to easily collect historical exchange rates, between currencies.
  Example:
             history --start 2021-02-01 --end 2021-02-02 --base USD --symbol EUR
```

_See code: [src/commands/history.js](https://github.com/JorgeGBravo/exrates/blob/v0.0.0/src/commands/history.js)_

## `exrates convert`

Describe the command here

```
USAGE
  $ exrates convert

OPTIONS
  -a, --amount=amount   amount to change
  -f, --from=from       type of currency to change
  -t, --to=to           exchange rate

DESCRIPTION
  Obtener el valor de cambio de una cantidad de dinero a otro tipo de moneda
  Example:  
            convert --amount=50 --from=EUR --to=USD
```

_See code: [src/commands/convert.js](https://github.com/JorgeGBravo/exrates/blob/v0.0.0/src/commands/convert.js)_

