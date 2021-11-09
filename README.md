exrates
=======

my description

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
* [`exrates hello`](#exrates-hello)
* [`exrates help [COMMAND]`](#exrates-help-command)
* [`exrates history`](#exrates-history)

## `exrates hello`

Describe the command here

```
USAGE
  $ exrates hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/JorgeGBravo/exrates/blob/v0.0.0/src/commands/hello.js)_

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

Describe the command here

```
USAGE
  $ exrates history --start=2021-02-01 --end=2021-02-02 --base=USD --symbol=EUR

OPTIONS
  -s --start  start date 
  -e --end    end date 
  -b --base   type of currency 
  -e --end    currency to change 

DESCRIPTION

Tool to easily collect historical exchange rates, between currencies.

