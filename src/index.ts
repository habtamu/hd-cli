#!/usr/bin/env node

import {Command} from 'commander'

// Declare the program

const program = new Command()

// Add Actions to that CLI command
program
.argument('<string>', 'string to log')
.action((message: string) => {
    console.log(`Hello ${message}`)
})

// Execute the CLI using given arguments
program.parse(process.argv)