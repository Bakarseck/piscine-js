const neuron = (obj) => {
  let newObj = {}
    obj.forEach((element) => {
        let _children = element.slice(0, element.indexOf(":"))
        let remainded = element.slice(element.indexOf(":")) 
        let _childrenAttrs = element.split(" - ")
        newObj[_children.toLowerCase()] = childrenAttrs
        let _ = element.slice(0, element.indexOf(":"))
    })
  return newObj  
}


// ```js
// // output
// {
//   questions: {
//     what_is_ounces: { question: 'what is ounces?', responses: [
//         'Ounce, unit of weight in the avoirdupois system',
//         'equal to 1/16 pound (437 1/2 grains)'
//     ] },
//     what_is_mud_dauber: { question: 'what is Mud dauber', responses: [
//         'Mud dauber is a name commonly applied to a number of wasps'
//     ] }
//   },
//   orders: {
//     shutdown: { order: 'shutdown!', responses: ['Yes Sr!'] },
//     quote_something: { order: 'Quote something!', responses: [
//         'Pursue what catches your heart, not what catches your eyes.'
//     ] }
//   }
// }
// ```

console.log(neuron([
  'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
  'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
  'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
  'Orders: shutdown! - Response: Yes Sr!',
  'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
]))