//5-1 Import

// import la fonction hello du fichier functions.js
import {hello} from './functions.js'

// execute la fonction hello()
hello()

import {showError} from './functions.js'
// showError()

import nyan from './functions.js'

// nyan()

// 5-2 Export
const [a, b] = [7, 9]

import {sum} from './math.js'
import {sub} from './math.js'
import {multiply} from './math.js'
import {divide} from './math.js'
import {pow} from './math.js'

console.log(sum(a, b))
console.log(sub(a, b))
console.log(multiply(a, b))
console.log(divide(a, b))
console.log(pow(a, b))