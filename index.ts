import { data } from './data'
import { compress } from './lib/compress'

console.log(`Length of data: ${JSON.stringify(data).length}`)


compress(data)

// console.log(`Length compressed: ${JSON.stringify(result).length}`)
// console.log(`Length of strMap: ${JSON.stringify(strMap).length}`)