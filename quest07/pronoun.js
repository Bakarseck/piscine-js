const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we']

const pronoun = (str) => {
    let arr = str.split(' ')
    let newObj = {}
    let i = 0
    arr.forEach(element => {
        if (pronouns.includes(element) && newObj.hasOwnProperty(element)) {
            if (!pronouns.includes(arr[i + 1])) {
                newObj[element].word.push(arr[i + 1])
            }
            newObj[element].count += 1
        } else if (pronouns.includes(element)) {
            let pronounObject = { word: [], count: 1 }
            if (!pronouns.includes(arr[i + 1])) {
                pronounObject.word.push(arr[i + 1])
            }
            newObj[element] = pronounObject
        }
        i++
    });
    return newObj
}

// #### Example

// ```js
const ex = 'Using Array Destructuring, you you can iterate through objects easily.'

// const ex = 'If he you want to buy something you have to pay.'
console.log(pronoun(ex))

// { you: { word: [ 'can' ], count: 2 } }


// {
//   he: { word: [], count: 1}
//   you: { word: [ 'want', 'have' ], count: 2 }
// }
