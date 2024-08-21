const Block = require('./Block/block')

const block = new Block("21-8-2024","0".repeat(64),"0".repeat(64),"Genesis Block")

console.log(block.toString())
