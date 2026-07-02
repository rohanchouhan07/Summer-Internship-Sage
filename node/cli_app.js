#!/usr/bin/env node

import process from 'process';

// Get command-line arguments (ignoring the first two defaults: node path and file path)
const args = process.argv.slice(2);

// Check if help is requested
if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Usage: greetme [options]

Options:
  --name <string>    Provide a name to get a customized greeting.
  --add <x> <y>      Add two numbers together.
  --help, -h         Display this help menu.
    `);
    process.exit(0);
}

// 1. Handle --name flag
const nameIndex = args.indexOf('--name');
if (nameIndex !== -1 && args[nameIndex + 1]) {
    console.log(`Hello, ${args[nameIndex + 1]}! Welcome to your custom Node.js CLI.`);
} else if (!args.includes('--add')) {
    console.log("Hello! Try running this command with '--name YourName' or '--help'.");
}

// 2. Handle --add flag
const addIndex = args.indexOf('--add');
if (addIndex !== -1) {
    const num1 = parseFloat(args[addIndex + 1]);
    const num2 = parseFloat(args[addIndex + 2]);

    if (!isNaN(num1) && !isNaN(num2)) {
        console.log(`Result: ${num1} + ${num2} = ${num1 + num2}`);
    } else {
        console.error("Error: Please provide two valid numbers after --add.");
        process.exit(1);
    }
}