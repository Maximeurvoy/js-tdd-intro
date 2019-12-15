const assert = require ('assert');


const capitalizeFirstLetter=(string)=>{
if (string.length != 0){
  const words = string.split(' ')
const test =  words.map(word=>word[0].toUpperCase()+ word.slice(1))

return test.join(' ')
}else{
return ('')
}
}

console.log(capitalizeFirstLetter('test'))
console.log(capitalizeFirstLetter('test truc'))
console.log(capitalizeFirstLetter(''))



assert.strictEqual(typeof capitalizeFirstLetter, 'function');
assert.strictEqual(capitalizeFirstLetter('javaScript test'), 'JavaScript Test');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetter('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetter(''), '');