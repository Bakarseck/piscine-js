const flagger = (obj) => {
    let alias = {}
    let description = []
    let bool = true
    if ('help' in obj) {
        description = `-${obj[obj['help']].charAt(0)} --${obj['help']} ${obj[obj['help']]}`
        bool = false
    }
    Object.entries(obj).forEach(([key, value]) => {
        let newKey = key.charAt(0)
        alias[newKey] = key
        if (bool) {
            description.push(`-${newKey} --${key} ${value}`)
        }
    })
    return {alias, description}
}

console.log(flagger({
    multiply: 'multiply the values',
    divide: 'divides the values',
    help: ['divide']
  }))
//   and outputs :
  
//   ```js
//   {
//     alias: { h: 'help', m: 'multiply', d: 'divide'}
//     description: '-d, --divide: divides the values',
//   }
//   ```